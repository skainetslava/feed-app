import * as React from "react";

const max: number = 3;
const min: number = 0;

const colors: string[] = [
    "#817818",
    "#474b52",
    "#375062",
    "#7a2a1f",
    "#262517",
    "#524749",
    "#6c4f2d",
    "#6c4f2d",
];

export const useBackground = (id: string) => {
    React.useEffect(() => {
        const rand = Math.floor(Math.random() * (max - min)) + min;
        const node = document.getElementById("root");

        if (!node) {
            return;
        }

        node.style.background = `
            linear-gradient(to right bottom, ${colors[rand]}, black),
            linear-gradient(transparent, black 70%)
            `;

        return (() => {
            node.style.background = `
            linear-gradient(to right bottom, #89102a, black),
            linear-gradient(transparent, black 70%)
            `;
        });
    }, [id]);
}