import nodemailer, { type Transporter } from "nodemailer";

// Transport SMTP configuré uniquement par variables d'environnement (aucun service
// tiers payant). Compatible avec n'importe quel serveur SMTP : Gmail (mot de passe
// d'application), OVH, Zoho, Infomaniak…
//
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=465
//   SMTP_SECURE=true   (465 => true, 587 => false)
//   SMTP_USER=contact@angelikajanosikova.com
//   SMTP_PASS=********
//   SMTP_FROM="Angelika Jánošíková <contact@angelikajanosikova.com>"   (optionnel, sinon SMTP_USER)
//   CONTACT_TO=contact@angelikajanosikova.com              (optionnel, sinon SMTP_USER)

export function getMailer(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
  });
}

export function mailFrom(): string {
  return process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "contact@angelikajanosikova.com";
}

export function mailTo(): string {
  return process.env.CONTACT_TO ?? process.env.SMTP_USER ?? "contact@angelikajanosikova.com";
}
