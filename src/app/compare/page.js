// Components
import Layout from "../../components/branding/Layout";
import Compare from "../../components/compare/Compare";

export default function ComparePage() {
    return (
        <Layout>
            <div className="heroIntro d-flex flex-column align-items-center container px-3 px-md-5 pt-5">
                <h1 className="text-center mb-3">Compare Football Teams</h1>
                <p className="mb-0">Use the dropdown menus to select two teams in order to compare their franchise stats (all-time) and matchup history (since 1966 - the first season of the Super Bowl era).</p>
            </div>
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
