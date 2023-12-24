"use client";

import { useState, useEffect } from "react";

// Components
import Layout from "../components/Layout";
import Spinner from "react-bootstrap/Spinner";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(
                    "https://api.baserow.io/api/database/rows/table/229773/?user_field_names=true&order_by=-schedule_season%2C-schedule_week&size=30&filters=%7B%22filter_type%22%3A%22AND%22%2C%22filters%22%3A%5B%7B%22type%22%3A%22equal%22%2C%22field%22%3A%22schedule_season%22%2C%22value%22%3A%222023%22%7D%5D%2C%22groups%22%3A%5B%7B%22filter_type%22%3A%22OR%22%2C%22filters%22%3A%5B%7B%22type%22%3A%22contains%22%2C%22field%22%3A%22team_home%22%2C%22value%22%3A%22Indianapolis%20Colts%22%7D%2C%7B%22type%22%3A%22contains%22%2C%22field%22%3A%22team_away%22%2C%22value%22%3A%22Indianapolis%20Colts%22%7D%5D%2C%22groups%22%3A%5B%5D%7D%5D%7D",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error(`Error fetching API: ${response.status}`);
                }
                const json = await response.json();
                setData(json.results);
                setError(null);
                console.log(json.results);
            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return (
        <Layout>
            {loading && (
                <div className="d-flex flex-column align-items-center my-5 py-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <div className="mt-3">Loading, please wait...</div>
                </div>
            )}
            {error && <div className="d-flex justify-content-center my-5 py-5">There was a problem loading the data, please wait and try again later.</div>}
            {data && (
                <div className="mainWrapper container mw-100 px-4 px-md-5 py-4">
                    <div className="row d-flex my-5">
                        {data.map((item) => {
                            if (item.score_home !== "" || item.score_away !== "") {
                                return (
                                    <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 p-0">
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
                                                <div className="spreadDetailsWrapper">
                                                    <div className="spreadFavorite">
                                                        {item.team_favorite_id} {item.spread_favorite}
                                                    </div>
                                                    <div className="overUnderLine">+/- {item.over_under_line}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            )}
        </Layout>
    );
}
