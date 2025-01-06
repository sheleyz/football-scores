// Components
import Layout from "../components/branding/Layout";
import Hero from "../components/hero/Hero";
import Games from "../components/games/Games";

export default function Home() {
    return (
        <Layout>
            <Hero
                heading={"Welcome to Football Scores!"}
                subheading={"Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966 (the first season of the Super Bowl era). Use the dropdown menus to filter games by team, season, and/or week for everything from comparing Super Bowls to viewing specific games!"}
            />
            <Games />
        </Layout>
    );
}
