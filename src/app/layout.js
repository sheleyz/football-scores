import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import localFont from "next/font/local";
import { Providers } from "./providers";
import Script from "next/script";

const outfit = localFont({
    src: "./fonts/Outfit/Outfit-VariableFont_wght.ttf",
    display: "swap",
    variable: "--font-outfit"
});

export const metadata = {
    title: "Football Scores",
    description: "Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966.",
    image: "./opengraph-image.png",
    metadataBase: new URL("https://nflscores.vercel.app"),

    openGraph: {
        title: "Football Scores",
        description: "Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966.",
        url: "https://nflscores.vercel.app",
        siteName: "Football Scores",
        images: ["./opengraph-image.png"],
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: "summary",
        title: "Football Scores",
        description: "Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966.",
        images: ["./opengraph-image.png"],
        url: "https://nflscores.vercel.app"
    },

    icons: {
        icon: "./icon.png",
        shortcut: "./icon.png"
    },

    verification: {
        google: "mUwMofjCd9iaaQC1nkCZaoJrxfv95Ais8OMQTxqae0A",
        other: {
            "msvalidate.01": "913751F24A1482E2603AE560D9749A01"
        }
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-US">
            <body className={outfit.variable}>
                <Providers>{children}</Providers>
            </body>

            {/* Google tag (gtag.js) */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H9K5XVBHBF"></Script>
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-H9K5XVBHBF');`}
            </Script>
        </html>
    );
}
