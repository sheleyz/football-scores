"use client";

import { useState, useEffect } from "react";
import { useTeamContext } from "../app/context/TeamContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// Components
import Filters from "./Filters";
import Team from "./Team";

export default function Teams() {
    let { teams, loaded } = useTeamContext();
    const [teamData, setTeamData] = useState(teams);
    const [filters, setFilters] = useState({
        team: "all",
        sort: "none"
    });

    useEffect(() => {
        if (loaded) {
            let filteredTeamData = teamData;

            if (filters.team !== "all") {
                // Filter teams if a team is selected
                filteredTeamData = teams.filter((team) => {
                    return team.team_name_short === filters.team;
                });
            } else {
                // Sort teams if a team is not selected
                switch (filters.sort) {
                    case "none":
                        filteredTeamData = teams;
                        break;
                    case "Overall Record Desc":
                        filteredTeamData = teams.toSorted((a, b) => b.franchise_win_loss_percentage - a.franchise_win_loss_percentage);
                        break;
                    case "Overall Record Asc":
                        filteredTeamData = teams.toSorted((a, b) => a.franchise_win_loss_percentage - b.franchise_win_loss_percentage);
                        break;
                    case "Playoff Record Desc":
                        filteredTeamData = teams.toSorted((a, b) => b.franchise_playoff_win_loss_percentage - a.franchise_playoff_win_loss_percentage);
                        break;
                    case "Playoff Record Asc":
                        filteredTeamData = teams.toSorted((a, b) => a.franchise_playoff_win_loss_percentage - b.franchise_playoff_win_loss_percentage);
                        break;
                    case "Championship Wins Desc":
                        filteredTeamData = teams.toSorted((a, b) => b.franchise_championship_wins - a.franchise_championship_wins);
                        break;
                    case "Championship Wins Asc":
                        filteredTeamData = teams.toSorted((a, b) => a.franchise_championship_wins - b.franchise_championship_wins);
                        break;
                    case "Super Bowl Wins Desc":
                        filteredTeamData = teams.toSorted((a, b) => b.franchise_superbowl_wins - a.franchise_superbowl_wins);
                        break;
                    case "Super Bowl Wins Asc":
                        filteredTeamData = teams.toSorted((a, b) => a.franchise_superbowl_wins - b.franchise_superbowl_wins);
                        break;
                    case "Conference Champions Desc":
                        filteredTeamData = teams.toSorted((a, b) => b.franchise_conference_champions - a.franchise_conference_champions);
                        break;
                    case "Conference Champions Asc":
                        filteredTeamData = teams.toSorted((a, b) => a.franchise_conference_champions - b.franchise_conference_champions);
                        break;
                    case "Division Champions Desc":
                        filteredTeamData = teams.toSorted((a, b) => b.franchise_division_champions - a.franchise_division_champions);
                        break;
                    case "Division Champions Asc":
                        filteredTeamData = teams.toSorted((a, b) => a.franchise_division_champions - b.franchise_division_champions);
                        break;
                }
            }

            setTeamData(filteredTeamData);
        }
    }, [loaded, filters]);

    function handleFilters(type, value) {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value
        }));
    }

    return (
        <div className="mainWrapper container mw-100 px-3 px-md-5 py-4">
            {/* Filter Teams */}
            <Filters onChange={handleFilters} teamFilters={true} />

            {!loaded && (
                <div className="loadingWrapper">
                    <FontAwesomeIcon icon={faCircleNotch} size="xl" spin />
                </div>
            )}

            {/* Display Teams */}
            {loaded && (
                <div className={`teamsWrapper row d-flex mt-4 mb-5 w-100 ${teamData.length < 3 && "justify-content-center"}`}>
                    {teamData.map((team, index) => (
                        <Team team={team} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
