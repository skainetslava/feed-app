export function getItemFromLocalStorage<T>(key: string): T | null {
    try {
        return JSON.parse(localStorage.getItem(key) || "");
    } catch {
        return null;
    }
}

export function setItemFromLocalStorage<T>(key: string, data: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch {
        console.error("ls not available");
    }
}