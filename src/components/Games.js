"use client";

import { useState, useEffect } from "react";
import { useTeamContext } from "../app/context/TeamContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

// Components
import Filters from "./Filters";
import Game from "./Game";

export default function Games({team1, team2}) {
    const [limit, setLimit] = useState(15);
    let { games, teams, loaded } = useTeamContext();
    if (team1 && team2) {
        games = games.filter((game) => {
            return (game.team_home === team1.team_name && game.team_away === team2.team_name) || (game.team_home === team2.team_name && game.team_away === team1.team_name);
        });
    }
    const [gameData, setGameData] = useState(games.slice(0, limit));
    const [noGamesFound, setNoGamesFound] = useState(false);
    const [filters, setFilters] = useState({
        team: "all",
        season: "all",
        week: "all"
    });

    useEffect(() => {
        if (loaded) {
            let filteredGameData = gameData;
            let selectedTeam = teams.find((team) => team.team_name_short === filters.team);

            // Filter games if a team is selected
            if (filters.team !== "all" && filters.season === "all" && filters.week === "all") {
                filteredGameData = games.filter((game) => {
                    return game.team_home === selectedTeam.team_name || game.team_away === selectedTeam.team_name || selectedTeam.team_name_old.includes(game.team_home) || selectedTeam.team_name_old.includes(game.team_away);
                });
            }
            // Filter games if a season is selected
            if (filters.team === "all" && filters.season !== "all" && filters.week === "all") {
                filteredGameData = games.filter((game) => {
                    return game.schedule_season === filters.season;
                });
            }
            // Filter games if a week is selected
            if (filters.team === "all" && filters.season === "all" && filters.week !== "all") {
                filteredGameData = games.filter((game) => {
                    return game.schedule_week === filters.week;
                });
            }
            // Filter games if a team and season are selected
            if (filters.team !== "all" && filters.season !== "all" && filters.week === "all") {
                filteredGameData = games.filter((game) => {
                    return (game.team_home === selectedTeam.team_name || game.team_away === selectedTeam.team_name || selectedTeam.team_name_old.includes(game.team_home) || selectedTeam.team_name_old.includes(game.team_away)) && game.schedule_season === filters.season;
                });
            }
            // Filter games if a team and week are selected
            if (filters.team !== "all" && filters.season === "all" && filters.week !== "all") {
                filteredGameData = games.filter((game) => {
                    return (game.team_home === selectedTeam.team_name || game.team_away === selectedTeam.team_name || selectedTeam.team_name_old.includes(game.team_home) || selectedTeam.team_name_old.includes(game.team_away)) && game.schedule_week === filters.week;
                });
            }
            // Filter games if a season and week are selected
            if (filters.team === "all" && filters.season !== "all" && filters.week !== "all") {
                filteredGameData = games.filter((game) => {
                    return game.schedule_season === filters.season && game.schedule_week === filters.week;
                });
            }
            // Filter games if a team, season, and week are selected
            if (filters.team !== "all" && filters.season !== "all" && filters.week !== "all") {
                filteredGameData = games.filter((game) => {
                    return (game.team_home === selectedTeam.team_name || game.team_away === selectedTeam.team_name || selectedTeam.team_name_old.includes(game.team_home) || selectedTeam.team_name_old.includes(game.team_away)) && game.schedule_season === filters.season && game.schedule_week === filters.week;
                });
            }
            // Get default games if no filters are selected
            if (filters.team === "all" && filters.season === "all" && filters.week === "all") {
                filteredGameData = games.slice(0, limit);
            }

            setGameData(filteredGameData.slice(0, limit));
        }
    }, [loaded, filters, limit]);

    useEffect(() => {
        if (loaded && gameData.length === 0) {
            setNoGamesFound(true);
        } else {
            setNoGamesFound(false);
        }
    }, [loaded, gameData]);

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
            <Filters onChange={handleFilters} gameFilters={true} compareFilters={team1 && team2} />

            {!loaded && (
                <div className="loadingWrapper">
                    <FontAwesomeIcon icon={faCircleNotch} size="xl" spin />
                </div>
            )}

            {/* Display Games */}
            {loaded && gameData.length !== 0 && (
                <div className={`gamesWrapper row d-flex mt-4 mb-5 w-100 ${gameData.length < 3 && "justify-content-center"}`}>
                    {gameData.map((game, index) => (
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
            {limit <= gameData.length && gameData.length !== 0 && (
                <div className="d-flex justify-content-center align-items-center w-100">
                    <Button data-bs-theme="dark" size="lg" onClick={handleLoadMore} className="btn-brand-secondary border-0">
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}
