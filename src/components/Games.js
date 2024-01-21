"use client";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

// Components
import Filters from "./Filters";
import Game from "./Game";

export default function Games({ gameData }) {
    const [limit, setLimit] = useState(16);
    const [data, setData] = useState(gameData.slice(0, limit));
    const [filters, setFilters] = useState({
        team: "all",
        season: "all",
        week: "all"
    });

    useEffect(() => {
        let filteredData = data;

        // Filter data if a team is selected
        if (filters.team !== "all" && filters.season === "all" && filters.week === "all") {
            filteredData = gameData.filter((item) => {
                return item.team_home === filters.team || item.team_away === filters.team;
            });
        }
        // Filter data if a season is selected
        if (filters.team === "all" && filters.season !== "all" && filters.week === "all") {
            filteredData = gameData.filter((item) => {
                return item.schedule_season === filters.season;
            });
        }
        // Filter data if a week is selected
        if (filters.team === "all" && filters.season === "all" && filters.week !== "all") {
            filteredData = gameData.filter((item) => {
                return item.schedule_week === filters.week;
            });
        }
        // Filter data if a team and season are selected
        if (filters.team !== "all" && filters.season !== "all" && filters.week === "all") {
            filteredData = gameData.filter((item) => {
                return (item.team_home === filters.team || item.team_away === filters.team) && item.schedule_season === filters.season;
            });
        }
        // Filter data if a team and week are selected
        if (filters.team !== "all" && filters.season === "all" && filters.week !== "all") {
            filteredData = gameData.filter((item) => {
                return (item.team_home === filters.team || item.team_away === filters.team) && item.schedule_week === filters.week;
            });
        }
        // Filter data if a season and week are selected
        if (filters.team === "all" && filters.season !== "all" && filters.week !== "all") {
            filteredData = gameData.filter((item) => {
                return item.schedule_season === filters.season && item.schedule_week === filters.week;
            });
        }
        // Filter data if a team, season, and week are selected
        if (filters.team !== "all" && filters.season !== "all" && filters.week !== "all") {
            filteredData = gameData.filter((item) => {
                return (item.team_home === filters.team || item.team_away === filters.team) && item.schedule_season === filters.season && item.schedule_week === filters.week;
            });
        }
        // Get default data if no filters are selected
        if (filters.team === "all" && filters.season === "all" && filters.week === "all") {
            filteredData = gameData.slice(0, limit);
        }

        setData(filteredData.slice(0, limit));
    }, [filters, limit]);

    function handleLoadMore() {
        setLimit((prevLimit) => prevLimit + 16);
    }

    function handleFilters(type, value) {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value
        }));
    }

    return (
        <div className="mainWrapper container mw-100 px-4 px-md-5 py-4">
            {/* Filter Games */}
            <Filters onChange={handleFilters} gameFilters={true} />

            {/* Display Games */}
            <div className="row d-flex mt-4 mb-5 w-100">
                {data.map((item, index) => {
                    return <Game game={item} key={index} />;
                })}
            </div>

            {/* Load More Games */}
            {limit <= data.length && (
                <div className="d-flex justify-content-center align-items-center w-100">
                    <Button data-bs-theme="dark" size="lg" onClick={handleLoadMore} className="btn-brand-secondary border-0">
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}
