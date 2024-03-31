export async function getEmojis() {
  const BASE_URL = " https://emojihub.yurace.pro/api/all";

  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Fetching emojis failed");

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error.message);
  } finally {
  }
}
