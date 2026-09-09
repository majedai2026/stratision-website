import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to a new route without a specific anchor hash, scroll instantly to the absolute top
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    } else {
      // If there is an anchor hash, scroll smoothly to that element after DOM settles
      const targetId = hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const yOffset = -90;
        const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};
