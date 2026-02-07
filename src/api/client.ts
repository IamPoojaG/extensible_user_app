export const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(url: string, options?: RequestInit) {
  const res = await fetch(`${BASE_URL}${url}`, options);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API Error");
  }

  return res.json();
}
