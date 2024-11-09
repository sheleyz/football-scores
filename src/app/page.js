// Components
import Layout from "../components/Layout";
import Games from "../components/Games";

export default function Home() {
    return (
        <Layout>
            <div className="heroIntro d-flex flex-column align-items-center container px-3 px-md-5 pt-5">
                <h1 className="text-center mb-3">Welcome to Football Scores!</h1>
                <p className="mb-0">
                    Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966 (the first season of the Super Bowl era). Use the dropdown menus to filter games by team, season, and/or
                    week for everything from comparing Super Bowls to viewing specific games!
                </p>
            </div>
            <Games />
        </Layout>
    );
}
