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
            <Games gameData={filteredData} />
        </Layout>
    );
}
