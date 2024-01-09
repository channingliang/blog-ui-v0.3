import localFont from "next/font/local";

export const harmony = localFont({
    src: [
        {
            path: "../public/fonts/HarmonySans_Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/HarmonySans_Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    preload: true,
})