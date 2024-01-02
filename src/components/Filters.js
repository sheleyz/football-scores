"use client";

import Form from "react-bootstrap/Form";

export default function Filters({ onChange }) {
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
    let seasons = [];
    let weeks = [];
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
            <Form.Select className="bg-brand-light" onChange={(e) => onChange("team", e.target.value)}>
                <option value="all">All Teams</option>
                {teams.map((team) => (
                    <option value={team} key={team}>
                        {team}
                    </option>
                ))}
            </Form.Select>

            <Form.Select className="bg-brand-light" onChange={(e) => onChange("season", e.target.value)}>
                <option value="all">All Seasons</option>
                {seasons.map((season) => (
                    <option value={season} key={season}>
                        {season}
                    </option>
                ))}
            </Form.Select>

            <Form.Select className="bg-brand-light" onChange={(e) => onChange("week", e.target.value)}>
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
        </div>
    );
}
