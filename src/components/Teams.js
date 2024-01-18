"use client";

import { useState, useEffect } from "react";

// Components
import Filters from "./Filters";
import Team from "./Team";

export default function Teams({ teamData }) {
    const [data, setData] = useState(teamData);
    const [filters, setFilters] = useState({
        team: "all",
        sort: "none"
    });

    useEffect(() => {
        let filteredData = data;

        if (filters.team !== "all") {
            // Filter data if a team is selected
            filteredData = teamData.filter((item) => {
                return item.team_name === filters.team;
            });
        } else {
            // Sort data if a team is not selected
            switch (filters.sort) {
                case "none":
                    filteredData = teamData;
                    break;
                case "Overall Record Desc":
                    filteredData = teamData.toSorted((a, b) => b.franchise_win_loss_percentage - a.franchise_win_loss_percentage);
                    break;
                case "Overall Record Asc":
                    filteredData = teamData.toSorted((a, b) => a.franchise_win_loss_percentage - b.franchise_win_loss_percentage);
                    break;
                case "Playoff Record Desc":
                    filteredData = teamData.toSorted((a, b) => b.franchise_playoff_win_loss_percentage - a.franchise_playoff_win_loss_percentage);
                    break;
                case "Playoff Record Asc":
                    filteredData = teamData.toSorted((a, b) => a.franchise_playoff_win_loss_percentage - b.franchise_playoff_win_loss_percentage);
                    break;
                case "Championship Wins Desc":
                    filteredData = teamData.toSorted((a, b) => b.franchise_championship_wins - a.franchise_championship_wins);
                    break;
                case "Championship Wins Asc":
                    filteredData = teamData.toSorted((a, b) => a.franchise_championship_wins - b.franchise_championship_wins);
                    break;
                case "Super Bowl Wins Desc":
                    filteredData = teamData.toSorted((a, b) => b.franchise_superbowl_wins - a.franchise_superbowl_wins);
                    break;
                case "Super Bowl Wins Asc":
                    filteredData = teamData.toSorted((a, b) => a.franchise_superbowl_wins - b.franchise_superbowl_wins);
                    break;
                case "Conference Champions Desc":
                    filteredData = teamData.toSorted((a, b) => b.franchise_conference_champions - a.franchise_conference_champions);
                    break;
                case "Conference Champions Asc":
                    filteredData = teamData.toSorted((a, b) => a.franchise_conference_champions - b.franchise_conference_champions);
                    break;
                case "Division Champions Desc":
                    filteredData = teamData.toSorted((a, b) => b.franchise_division_champions - a.franchise_division_champions);
                    break;
                case "Division Champions Asc":
                    filteredData = teamData.toSorted((a, b) => a.franchise_division_champions - b.franchise_division_champions);
                    break;
            }
        }

        setData(filteredData);
    }, [filters]);

    function handleFilters(type, value) {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value
        }));
    }

    return (
        <div className="mainWrapper container mw-100 px-4 px-md-5 py-4">
            {/* Filter Teams */}
            <Filters onChange={handleFilters} teamFilters={true} />

            {/* Display Teams */}
            <div className="row d-flex mt-4 mb-5 w-100">
                {data.map((item, index) => {
                    return <Team team={item} key={index} />;
                })}
            </div>
        </div>
    );
}
