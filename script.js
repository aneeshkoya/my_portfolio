(function () {
  const storageKey = "portfolio-theme";
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem(storageKey);
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.dataset.theme = storedTheme || preferredTheme;

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      window.localStorage.setItem(storageKey, nextTheme);
    });
  });

  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.getAttribute("data-copy"));
      if (!target) return;
      await navigator.clipboard.writeText(target.textContent.trim());
      const original = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    });
  });

  const filters = document.querySelectorAll("[data-publication-filter]");
  const publications = document.querySelectorAll("[data-publication]");
  filters.forEach((filter) => {
    filter.addEventListener("change", () => {
      const selected = Array.from(filters).reduce((acc, select) => {
        acc[select.name] = select.value;
        return acc;
      }, {});

      publications.forEach((publication) => {
        const visible = Object.keys(selected).every((key) => {
          return selected[key] === "All" || publication.dataset[key] === selected[key];
        });
        publication.hidden = !visible;
      });
    });
  });
})();
