import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import localFont from "next/font/local";

const inter = localFont({
    src: "./fonts/Inter/Inter-VariableFont_slnt_wght.ttf",
    display: "swap",
    variable: "--font-inter"
});

export const metadata = {
    title: "NFL Teams App",
    description: "An app that uses NFL data.",
    image: "./icon.png",
    metadataBase: new URL("https://nflteamsapp.vercel.app"),

    openGraph: {
        title: "NFL Teams App",
        description: "An app that uses NFL data.",
        url: "https://nflteamsapp.vercel.app",
        siteName: "NFL Teams App",
        images: ["./icon.png"],
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: "summary",
        title: "NFL Teams App",
        description: "An app that uses NFL data.",
        images: ["./icon.png"],
        url: "https://nflteamsapp.vercel.app"
    },

    icons: {
        icon: "./icon.png",
        shortcut: "./icon.png"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-US">
            <body className={inter.variable}>{children}</body>
        </html>
    );
}
