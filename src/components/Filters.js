"use client";

export default function Filters({ onChange }) {
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
        <div className="d-flex justify-content-center align-items-center w-100">
            <select onChange={(e) => onChange("team", e.target.value)}>
                <option value="all">All Teams</option>
                <option value="Indianapolis Colts">Indianapolis Colts</option>
            </select>

            <select onChange={(e) => onChange("season", e.target.value)}>
                <option value="all">All Seasons</option>
                {seasons.map((season) => (
                    <option value={season} key={season}>
                        {season}
                    </option>
                ))}
            </select>

            <select onChange={(e) => onChange("week", e.target.value)}>
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
            </select>
        </div>
    );
}
