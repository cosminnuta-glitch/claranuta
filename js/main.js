/* Language switching, nav state and gentle reveal animations. */
(function () {
  const SUPPORTED = ["en", "ja", "ko", "zh"];
  const STORAGE_KEY = "cn-lang";

  function detectLang() {
    const fromQuery = new URLSearchParams(location.search).get("lang");
    if (fromQuery && SUPPORTED.includes(fromQuery)) return fromQuery;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("ja")) return "ja";
    if (nav.startsWith("ko")) return "ko";
    if (nav.startsWith("zh")) return "zh";
    return "en";
  }

  function applyLang(lang) {
    const dict = window.I18N[lang] || window.I18N.en;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    // CSS hooks use the short code
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = dict[key] != null ? dict[key] : window.I18N.en[key];
      if (value == null) return;
      el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-content");
      const value = dict[key] != null ? dict[key] : window.I18N.en[key];
      if (value != null) el.setAttribute("content", value);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.dataset.lang);
      const url = new URL(location.href);
      url.searchParams.set("lang", btn.dataset.lang);
      history.replaceState(null, "", url);
    });
  });

  applyLang(detectLang());

  // Current year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealTargets = document.querySelectorAll(
    ".section-head, .prose, .facts, .card, .work-item, .timeline li, .education, .contact-text, .contact-links, .stat"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  // Active nav link
  const sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  const navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  if ("IntersectionObserver" in window && sections.length) {
    const navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    sections.forEach(function (s) { navIO.observe(s); });
  }
})();
