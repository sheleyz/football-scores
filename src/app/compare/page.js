// Components
import Layout from "../../components/branding/Layout";
import Hero from "../../components/hero/Hero";
import Compare from "../../components/compare/Compare";

export default function ComparePage() {
    return (
        <Layout>
            <Hero
                heading={"Compare Football Teams"}
                subheading={"Use the dropdown menus to select two teams in order to compare their franchise stats (all-time) and matchup history (since 1966 - the first season of the Super Bowl era)."}
            />
            <Compare />
        </Layout>
    );
}

export const metadata = {
    title: "Compare Teams | Football Scores",
    description: "Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966.",
    image: "./opengraph-image.png",
    metadataBase: new URL("https://nflscores.vercel.app"),

    openGraph: {
        title: "Compare Teams | Football Scores",
        description: "Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966.",
        url: "https://nflscores.vercel.app",
        siteName: "Football Scores",
        images: ["./opengraph-image.png"],
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: "summary",
        title: "Compare Teams | Football Scores",
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
