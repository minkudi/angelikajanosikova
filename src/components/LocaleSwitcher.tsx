import { locales, type Locale } from "@/lib/i18n/config";
import { href, resolvePageKey } from "@/lib/i18n/routes";

// Bascule FR / EN — conserve la page courante en résolvant le slug localisé
// (ex. /fr/tarifs → /en/pricing) et mémorise le choix dans un cookie.
export default function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  function switchTo(target: Locale) {
    if (target === locale) return;
    const segments = window.location.pathname.split("/").filter(Boolean);
    const rest = segments.slice(1); // après [locale]
    const pageKey = resolvePageKey(locale, rest.length ? rest : undefined);
    const url = pageKey ? href(pageKey, target) : `/${target}`;
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000;samesite=lax`;
    window.location.href = url;
  }

  return (
    <div
      className="flex items-center rounded-full border border-zinc-200 bg-zinc-50 p-0.5 text-xs font-semibold"
      role="group"
      aria-label={label}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            l === locale
              ? "bg-white text-ink shadow-sm"
              : "text-zinc-500 hover:text-zinc-800"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
