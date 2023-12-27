import { promises as fs } from "fs";

// Components
import Layout from "../components/Layout";

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/src/app/gameData.json");
    const data = JSON.parse(file);
    data.sort((a, b) => new Date(b.schedule_date).getTime() - new Date(a.schedule_date).getTime());
    let count = 0;

    return (
        <Layout>
            <div className="mainWrapper container mw-100 px-4 px-md-5 py-4">
                <div className="row d-flex my-5">
                    {data.map((item, index) => {
                        if ((item.score_home !== "" || item.score_away !== "") && count < 16) {
                            count++;
                            return (
                                <div key={index} className="col-sm-12 col-md-6 col-lg-4 p-0">
                                    <div className="gameWrapper">
                                        <div className="scoreWrapper pb-3">
                                            <div className="teamWrapper">
                                                <div className="teamName">{item.team_home}</div>
                                                <div className="teamScore">{item.score_home}</div>
                                            </div>
                                            <div className="teamWrapper">
                                                <div className="teamName">{item.team_away}</div>
                                                <div className="teamScore">{item.score_away}</div>
                                            </div>
                                        </div>
                                        <div className="gameDetailsWrapper">
                                            <div>
                                                <div className="gameWeek">
                                                    Week {item.schedule_week} | {item.schedule_date}
                                                </div>
                                                <div className="gameStadium">{item.stadium}</div>
                                            </div>
                                            {item.team_favorite_id && (
                                                <div className="spreadDetailsWrapper">
                                                    <div className="spreadFavorite">
                                                        {item.team_favorite_id} {item.spread_favorite}
                                                    </div>
                                                    <div className="overUnderLine">+/- {item.over_under_line}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </Layout>
    );
}
