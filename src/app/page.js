import { promises as fs } from "fs";

// Components
import Layout from "../components/Layout";
import Games from "../components/Games";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/src/app/gameData.json");
    const data = JSON.parse(file);
    data.sort((a, b) => new Date(b.schedule_date).getTime() - new Date(a.schedule_date).getTime());
    const filteredData = data.filter((item) => {
        if (item.score_home !== "" || item.score_away !== "") {
            return item;
        }
    });

    return (
        <Layout>
            <div className="heroIntro d-flex flex-column align-items-center container px-4 px-md-5 pt-5">
                <h1 className="text-center mb-3">Welcome to Football Scores!</h1>
                <p className="mb-0">
                    Football Scores provides final scores, betting odds (when available), and other details for all NFL games since 1966. Use the dropdown menus to filter games by team, season, and/or
                    week for everything from comparing Super Bowls to viewing specific games! <a href="https://form.jotform.com/240006603463142" target="_blank" rel="noopener noreferrer">Let me know</a> if you have any suggestions to improve this site.
                </p>
            </div>
            <Games gameData={filteredData} />
        </Layout>
    );
}
