"use client";

import { useState, useEffect } from "react";
import { useTeamContext } from "../app/context/TeamContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

// Components
import Filters from "./Filters";
import Game from "./Game";

export default function Games() {
    const [limit, setLimit] = useState(15);
    let { games, loaded } = useTeamContext();
    const [data, setData] = useState(games.slice(0, limit));
    const [noGamesFound, setNoGamesFound] = useState(false);
    const [filters, setFilters] = useState({
        team: "all",
        season: "all",
        week: "all"
    });

    useEffect(() => {
        if (loaded) {
            let filteredData = data;

            // Filter data if a team is selected
            if (filters.team !== "all" && filters.season === "all" && filters.week === "all") {
                filteredData = games.filter((game) => {
                    return game.team_home === filters.team || game.team_away === filters.team;
                });
            }
            // Filter data if a season is selected
            if (filters.team === "all" && filters.season !== "all" && filters.week === "all") {
                filteredData = games.filter((game) => {
                    return game.schedule_season === filters.season;
                });
            }
            // Filter data if a week is selected
            if (filters.team === "all" && filters.season === "all" && filters.week !== "all") {
                filteredData = games.filter((game) => {
                    return game.schedule_week === filters.week;
                });
            }
            // Filter data if a team and season are selected
            if (filters.team !== "all" && filters.season !== "all" && filters.week === "all") {
                filteredData = games.filter((game) => {
                    return (game.team_home === filters.team || game.team_away === filters.team) && game.schedule_season === filters.season;
                });
            }
            // Filter data if a team and week are selected
            if (filters.team !== "all" && filters.season === "all" && filters.week !== "all") {
                filteredData = games.filter((game) => {
                    return (game.team_home === filters.team || game.team_away === filters.team) && game.schedule_week === filters.week;
                });
            }
            // Filter data if a season and week are selected
            if (filters.team === "all" && filters.season !== "all" && filters.week !== "all") {
                filteredData = games.filter((game) => {
                    return game.schedule_season === filters.season && game.schedule_week === filters.week;
                });
            }
            // Filter data if a team, season, and week are selected
            if (filters.team !== "all" && filters.season !== "all" && filters.week !== "all") {
                filteredData = games.filter((game) => {
                    return (game.team_home === filters.team || game.team_away === filters.team) && game.schedule_season === filters.season && game.schedule_week === filters.week;
                });
            }
            // Get default data if no filters are selected
            if (filters.team === "all" && filters.season === "all" && filters.week === "all") {
                filteredData = games.slice(0, limit);
            }

            setData(filteredData.slice(0, limit));
        }
    }, [loaded, filters, limit]);

    useEffect(() => {
        if (loaded && data.length === 0) {
            setNoGamesFound(true);
        } else {
            setNoGamesFound(false);
        }
    }, [loaded, data]);

    function handleLoadMore() {
        setLimit((prevLimit) => prevLimit + 15);
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

            {!loaded && (
                <div className="loadingWrapper">
                    <FontAwesomeIcon icon={faCircleNotch} size="xl" spin />
                </div>
            )}

            {/* Display Games */}
            {loaded && data.length !== 0 && (
                <div className="row d-flex mt-4 mb-5 w-100">
                    {data.map((game, index) => (
                        <Game game={game} key={index} />
                    ))}
                </div>
            )}

            {/* Display Message If No Games Found */}
            {loaded && noGamesFound && (
                <div className="messageWrapper d-flex justify-content-center w-100 pt-4">
                    <p>No games found.</p>
                </div>
            )}

            {/* Load More Games */}
            {limit <= data.length && data.length !== 0 && (
                <div className="d-flex justify-content-center align-items-center w-100">
                    <Button data-bs-theme="dark" size="lg" onClick={handleLoadMore} className="btn-brand-secondary border-0">
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}
