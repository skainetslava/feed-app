export function formateWithDots(count: number): string {
    return count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}