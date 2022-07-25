const {fontFamily} = require("tailwindcss/defaultTheme")
const daisyui = require("daisyui")

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{jsx,tsx}",
    ],
    theme: {
        borderWidth: {
            DEFAULT: "1px",
            "0": "0",
            "1.25": "1.25px",
            "1.5": "1.5px",
            "2": "2px",
            "2.25": "2.25px",
            "3": "3px",
            "4": "4px",
            "6": "6px",
            "8": "8px",
        },
        extend: {
            maxWidth: {
                "2xs": "16rem",
                "3xs": "12rem",
                "4xs": "8rem",
            },
            spacing: {
                "1/10": "10%",
                "3/8": "37.5%",
                "9/10": "90%",
                "1/12": "8.3%",
                "11/12": "91.7%",
                "1/20": "5%",
                "1.25": "0.3125rem",
                "1.75": "0.4375rem",
            },
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
            fontFamily: {
                sans: ["Inter var", ...fontFamily.sans],
                system: fontFamily.sans,
            },
            zIndex: {
                "100": "100",
                "1000": "1000",
                "10000": "10000",
                "20000": "20000",
            },
            ringWidth: {
                "1.1": "1.1px",
                "1.25": "1.25px",
                "1.5": "1.5px",
            },
        },
    },
    plugins: [
        daisyui
    ],
    daisyui: {
        themes: false,
    },
}
