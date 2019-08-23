export function getItemFromLocalStorage<T>(item: string): T | null {
    try {
        return JSON.parse(localStorage.getItem(item) || "");
    } catch {
        return null;
    }
}