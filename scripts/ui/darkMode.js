const btn = document.getElementById("alternar-tema");
const root = document.documentElement;

export function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");

  if (isDark) {
    root.style.setProperty("--color-primary", "#0F1020");
    root.style.setProperty("--color-secundary", "#1C1F3A");
    root.style.setProperty("--color-card-bg", "#161833");

    root.style.setProperty("--color-sidebar-btn", "#12163f");
    root.style.setProperty("--color-sidebar-btn-hover", "#1a3b70");
    root.style.setProperty("--color-modal", "#1C1F3A");

    root.style.setProperty("--color-text", "#EDEDFC");
    root.style.setProperty("--color-text-secondary", "#B6B8D6");
    root.style.setProperty("--color-text-muted", "#7A7CA8");
  } else {
    root.style.setProperty("--color-primary", "#f1f0f8");
    root.style.setProperty("--color-secundary", "#5d46dc");
    root.style.setProperty("--color-card-bg", "#ffffff");

    root.style.setProperty("--color-siderbar-hover", "#8AB4F8");
    root.style.setProperty("--color-sidebar-btn", "#ffffff");
    root.style.setProperty("--color-sidebar-btn-hover", "#8AB4F8");
    root.style.setProperty("--color-modal", "#EDE9FE");

    root.style.setProperty("--color-text", "#0F172A");
    root.style.setProperty("--color-text-secondary", "#64748B");
    root.style.setProperty("--color-text-muted", "#94A3B8");
  }
}

if (btn) {
  btn.addEventListener("click", toggleDarkMode);
}
