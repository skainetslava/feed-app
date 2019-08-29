const max: number = 3;
const min: number = 0;

const colors: string[] = ["#FBEA21", "#AB0618", "#040891"];

export function changeBackground() {
    const rand = Math.floor(Math.random() * (max - min)) + min;

    document.body.style.background = `
        linear-gradient(to right bottom, ${colors[rand]}, black),
        linear-gradient(transparent, black 70%)
        `
}