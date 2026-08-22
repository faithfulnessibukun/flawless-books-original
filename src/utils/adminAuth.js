// There's no backend yet, so this is a lightweight gate — not real
// security. It's enough to keep the book-management screen away from
// casual visitors. Change ADMIN_PASSWORD before deploying, and treat this
// as a placeholder to replace with real auth once there's a server.

const ADMIN_PASSWORD = "flawless2024";
const SESSION_KEY = "flawlessAdminSession";

export function attemptAdminLogin(password) {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(SESSION_KEY, "true");
    return true;
  }
  return false;
}

export function isAdminLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "true";
}

export function adminLogout() {
  localStorage.removeItem(SESSION_KEY);
}
