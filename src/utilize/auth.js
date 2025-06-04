export function setToken(name, token) {
  localStorage.setItem(name, token);
}

export function getToken(name) {
  return localStorage.getItem(name);
}

export function clearToken(name) {
  localStorage.removeItem(name);
}