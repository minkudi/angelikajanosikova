"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Animations d'apparition au scroll : ajoute une classe au <html> une fois le
// JS chargé (les éléments restent visibles sans JS), puis observe les éléments
// [data-reveal] et les fait entrer en scène.
//
// L'effet se relance à CHAQUE changement de page (usePathname) : en navigation
// client (menu, liens Next), les nouvelles pages rendent de nouveaux éléments
// [data-reveal] qui doivent être observés — sinon ils restent invisibles et
// n'apparaissent qu'après un rechargement manuel. Respecte
// prefers-reduced-motion (tout est affiché sans animation).
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)"),
    );

    if (reduce || elements.length === 0) {
      // Page sans éléments à animer : on retire la classe pour garantir que
      // tout reste visible (utile après une navigation depuis une page animée).
      html.classList.remove("has-reveal");
      return;
    }

    html.classList.add("has-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      // Déjà visible dans la fenêtre (page chargée directement) : révélé
      // immédiatement, sans attendre le premier déclenchement de l'observer.
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("revealed");
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
