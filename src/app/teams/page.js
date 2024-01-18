import { promises as fs } from "fs";

// Components
import Layout from "../../components/Layout";
import Teams from "../../components/Teams";

export default async function TeamsPage() {
    const file = await fs.readFile(process.cwd() + "/src/app/teamData.json");
    const data = JSON.parse(file);

    return (
        <Layout>
            <div className="heroIntro d-flex flex-column align-items-center container px-4 px-md-5 pt-5">
                <h1 className="text-center mb-3">Football Teams</h1>
                <p className="mb-0">
                    Use the dropdown menus to filter teams by team name or sort teams by stats such as overall record, playoff record, Super Bowl wins, and more. <a href="https://form.jotform.com/240006603463142" target="_blank" rel="noopener noreferrer">Let me know</a> if you have any suggestions to improve this site.
                </p>
            </div>
            <Teams teamData={data} />
        </Layout>
    );
}
