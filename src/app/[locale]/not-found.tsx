import Link from "next/link";

// Page 404 bilingue (indépendante de la langue courante).
export default function NotFound() {
  return (
    <section className="wrap flex flex-col items-center py-28 text-center">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">Page introuvable — Page not found</h1>
      <p className="mt-2 max-w-md text-sm text-zinc-600">
        Cette page n&apos;existe pas ou a été déplacée. / This page does not exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/fr" className="btn btn-primary">
          Accueil
        </Link>
        <Link href="/en" className="btn btn-ghost">
          Home
        </Link>
      </div>
    </section>
  );
}
