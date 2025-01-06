// Components
import Layout from "../components/branding/Layout";
import Hero from "../components/hero/Hero";
import Games from "../components/games/Games";

export default function Home() {
    return (
        <Layout>
            <Hero
                heading={"Welcome to Football Scores!"}
                subheading={"Football Scores provides final scores, betting odds (when available), and other details for all NFL games in the Super Bowl era. Filter games using the dropdown menus for everything from comparing Super Bowls to viewing specific games!"}
            />
            <Games />
        </Layout>
    );
}
