export function formateInMinutes(time: number): string {
    const min = Math.floor(time / 60);
    const sec = `${(time - min * 60)}`;

    return `${min}:${sec.padStart(2, "0")}`
}