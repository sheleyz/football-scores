"use client";

import Form from "react-bootstrap/Form";

export default function Filters({ onChange, gameFilters, teamFilters }) {
    let teams = [
        "San Francisco 49ers",
        "Chicago Bears",
        "Cincinnati Bengals",
        "Buffalo Bills",
        "Denver Broncos",
        "Cleveland Browns",
        "Tampa Bay Buccaneers",
        "Arizona Cardinals",
        "Phoenix Cardinals",
        "St. Louis Cardinals",
        "Los Angeles Chargers",
        "San Diego Chargers",
        "Kansas City Chiefs",
        "Indianapolis Colts",
        "Baltimore Colts",
        "Washington Commanders",
        "Washington Football Team",
        "Washington Redskins",
        "Dallas Cowboys",
        "Miami Dolphins",
        "Philadelphia Eagles",
        "Atlanta Falcons",
        "New York Giants",
        "Jacksonville Jaguars",
        "New York Jets",
        "Detroit Lions",
        "Green Bay Packers",
        "Carolina Panthers",
        "New England Patriots",
        "Boston Patriots",
        "Las Vegas Raiders",
        "Los Angeles Raiders",
        "Oakland Raiders",
        "Los Angeles Rams",
        "St. Louis Rams",
        "Baltimore Ravens",
        "New Orleans Saints",
        "Seattle Seahawks",
        "Pittsburgh Steelers",
        "Houston Texans",
        "Houston Oilers",
        "Tennessee Titans",
        "Tennessee Oilers",
        "Minnesota Vikings"
    ];
    let activeTeams = [
        "San Francisco 49ers",
        "Chicago Bears",
        "Cincinnati Bengals",
        "Buffalo Bills",
        "Denver Broncos",
        "Cleveland Browns",
        "Tampa Bay Buccaneers",
        "Arizona Cardinals",
        "Los Angeles Chargers",
        "Kansas City Chiefs",
        "Indianapolis Colts",
        "Washington Commanders",
        "Dallas Cowboys",
        "Miami Dolphins",
        "Philadelphia Eagles",
        "Atlanta Falcons",
        "New York Giants",
        "Jacksonville Jaguars",
        "New York Jets",
        "Detroit Lions",
        "Green Bay Packers",
        "Carolina Panthers",
        "New England Patriots",
        "Las Vegas Raiders",
        "Los Angeles Rams",
        "Baltimore Ravens",
        "New Orleans Saints",
        "Seattle Seahawks",
        "Pittsburgh Steelers",
        "Houston Texans",
        "Tennessee Titans",
        "Minnesota Vikings"
    ];
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
    for (let index = 1966; index < 2024; index++) {
        seasons.push(index);
    }
    // List Weeks
    for (let index = 1; index <= 18; index++) {
        weeks.push(index);
    }
    // Sort Seasons in Descending Order
    seasons.sort((a, b) => b - a);
    return (
        <div className="filterOptionsWrapper d-flex justify-content-center align-items-center flex-wrap flex-column flex-md-row w-100 mt-3">
            {gameFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("team", e.target.value)} aria-label="Select a team">
                    <option value="all">All Teams</option>
                    {teams.map((team) => (
                        <option value={team} key={team}>
                            {team}
                        </option>
                    ))}
                </Form.Select>
            )}

            {teamFilters && (
                <Form.Select className="bg-white" onChange={(e) => onChange("team", e.target.value)} aria-label="Select a team">
                    <option value="all">All Teams</option>
                    {activeTeams.map((team) => (
                        <option value={team} key={team}>
                            {team}
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
                    {weeks.map((week) => (
                        <option value={week} key={week}>
                            Week {week}
                        </option>
                    ))}
                    <option value="Wildcard">Wild Card</option>
                    <option value="Division">Division</option>
                    <option value="Conference">Conference</option>
                    <option value="Superbowl">Super Bowl</option>
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
