"use client";

import { useTeamContext } from "../app/context/TeamContext";
import Form from "react-bootstrap/Form";

export default function Filters({ onChange, gameFilters, teamFilters, compareFilters }) {
    const { teams } = useTeamContext();
    let seasons = [];
    let weeks = [];
    let sortOptions = [
        "Overall Record Desc",
        "Overall Record Asc",
        "Playoff Record Desc",
        "Playoff Record Asc",
        "Championship Wins Desc",
        "Championship Wins Asc",
        "Super Bowl Wins Desc",
        "Super Bowl Wins Asc",
        "Conference Champions Desc",
        "Conference Champions Asc",
        "Division Champions Desc",
        "Division Champions Asc"
    ];
    // List Seasons
    for (let index = 1966; index < 2025; index++) {
        seasons.push(index);
    }
    // List Weeks
    for (let index = 1; index <= 18; index++) {
        weeks.push(index);
    }
    // Sort Seasons in Descending Order
    seasons.sort((a, b) => b - a);
    // Sort Weeks in Descending Order
    weeks.sort((a, b) => b - a);
    return (
        <div className="filterOptionsWrapper d-flex justify-content-center align-items-center flex-wrap flex-column flex-md-row w-100 my-3">
            {gameFilters && !compareFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("team", e.target.value)} aria-label="Select a team">
                    <option value="all">All Teams</option>
                    {teams.map((team) => (
                        <option value={team.team_name_short} key={team.team_name_short}>
                            {team.team_name_short}
                        </option>
                    ))}
                </Form.Select>
            )}

            {teamFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("team", e.target.value)} aria-label="Select a team">
                    <option value="all">All Teams</option>
                    {teams.map((team) => (
                        <option value={team.team_name_short} key={team.team_name_short}>
                            {team.team_name_short}
                        </option>
                    ))}
                </Form.Select>
            )}

            {gameFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("season", e.target.value)} aria-label="Select a season">
                    <option value="all">All Seasons</option>
                    {seasons.map((season) => (
                        <option value={season} key={season}>
                            {season}
                        </option>
                    ))}
                </Form.Select>
            )}

            {gameFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("week", e.target.value)} aria-label="Select a week">
                    <option value="all">All Weeks</option>
                    <option value="Superbowl">Super Bowl</option>
                    <option value="Conference">Conference</option>
                    <option value="Division">Division</option>
                    <option value="Wildcard">Wild Card</option>
                    {weeks.map((week) => (
                        <option value={week} key={week}>
                            Week {week}
                        </option>
                    ))}
                </Form.Select>
            )}

            {teamFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("sort", e.target.value)} aria-label="Select a sort option">
                    <option value="none">Sort</option>
                    {sortOptions.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            )}
        </div>
    );
}
