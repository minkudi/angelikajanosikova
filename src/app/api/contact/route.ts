import { NextResponse, type NextRequest } from "next/server";
import { getMailer, mailFrom, mailTo } from "@/lib/smtp";
import { normalizeLocale } from "@/lib/i18n/config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

// Réception du formulaire de contact : validation serveur puis envoi d'un
// email vers contact@angelikajanosikova.com via SMTP (variables d'environnement).
// Sans configuration SMTP, la soumission est journalisée côté serveur.
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const name = asString(data.name).trim();
  const email = asString(data.email).trim();
  const message = asString(data.message).trim();
  const honeypot = asString(data.company).trim();
  const locale = normalizeLocale(asString(data.locale));

  const valid =
    name.length >= 2 &&
    name.length <= 100 &&
    email.length <= 200 &&
    EMAIL_RE.test(email) &&
    message.length >= 10 &&
    message.length <= 5000;
  if (!valid) return NextResponse.json({ error: "invalid_fields" }, { status: 400 });

  // Piège à robots rempli -> on fait semblant d'accepter et on n'envoie rien.
  if (honeypot) return NextResponse.json({ ok: true });

  const mailer = getMailer();
  if (!mailer) {
    console.log(
      "[contact] SMTP non configuré — soumission enregistrée :",
      JSON.stringify({ name, email, locale }),
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const subject =
    locale === "en"
      ? `New message from ${name} — angelikajanosikova.com`
      : `Nouveau message de ${name} — angelikajanosikova.com`;

  try {
    await mailer.sendMail({
      from: mailFrom(),
      to: mailTo(),
      replyTo: email,
      subject,
      text: `${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Envoi SMTP impossible :", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
