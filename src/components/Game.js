"use client";

import Image from "next/image";

// Images
import sf49ers from "../images/logos/49ers.webp";
import bears from "../images/logos/bears.webp";
import bengals from "../images/logos/bengals.webp";
import bills from "../images/logos/bills.webp";
import broncos from "../images/logos/broncos.webp";
import browns from "../images/logos/browns.webp";
import buccaneers from "../images/logos/buccaneers.webp";
import cardinals from "../images/logos/cardinals.webp";
import chargers from "../images/logos/chargers.webp";
import chiefs from "../images/logos/chiefs.webp";
import colts from "../images/logos/colts.webp";
import commanders from "../images/logos/commanders.webp";
import cowboys from "../images/logos/cowboys.webp";
import dolphins from "../images/logos/dolphins.webp";
import eagles from "../images/logos/eagles.webp";
import falcons from "../images/logos/falcons.webp";
import giants from "../images/logos/giants.webp";
import jaguars from "../images/logos/jaguars.webp";
import jets from "../images/logos/jets.webp";
import lions from "../images/logos/lions.webp";
import packers from "../images/logos/packers.webp";
import panthers from "../images/logos/panthers.webp";
import patriots from "../images/logos/patriots.webp";
import raiders from "../images/logos/raiders.webp";
import rams from "../images/logos/rams.webp";
import ravens from "../images/logos/ravens.webp";
import saints from "../images/logos/saints.webp";
import seahawks from "../images/logos/seahawks.webp";
import steelers from "../images/logos/steelers.webp";
import texans from "../images/logos/texans.webp";
import titans from "../images/logos/titans.webp";
import vikings from "../images/logos/vikings.webp";

export default function Game({ game }) {
    const getTeamLogo = (teamName) => {
        switch (teamName) {
            case "San Francisco 49ers":
                return <Image src={sf49ers} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Chicago Bears":
                return <Image src={bears} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Cincinnati Bengals":
                return <Image src={bengals} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Buffalo Bills":
                return <Image src={bills} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Denver Broncos":
                return <Image src={broncos} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Cleveland Browns":
                return <Image src={browns} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Tampa Bay Buccaneers":
                return <Image src={buccaneers} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Arizona Cardinals":
            case "Phoenix Cardinals":
            case "St. Louis Cardinals":
                return <Image src={cardinals} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Los Angeles Chargers":
            case "San Diego Chargers":
                return <Image src={chargers} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Kansas City Chiefs":
                return <Image src={chiefs} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Indianapolis Colts":
            case "Baltimore Colts":
                return <Image src={colts} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Washington Commanders":
            case "Washington Football Team":
            case "Washington Redskins":
                return <Image src={commanders} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Dallas Cowboys":
                return <Image src={cowboys} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Miami Dolphins":
                return <Image src={dolphins} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Philadelphia Eagles":
                return <Image src={eagles} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Atlanta Falcons":
                return <Image src={falcons} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "New York Giants":
                return <Image src={giants} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Jacksonville Jaguars":
                return <Image src={jaguars} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "New York Jets":
                return <Image src={jets} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Detroit Lions":
                return <Image src={lions} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Green Bay Packers":
                return <Image src={packers} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Carolina Panthers":
                return <Image src={panthers} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "New England Patriots":
            case "Boston Patriots":
                return <Image src={patriots} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Las Vegas Raiders":
            case "Los Angeles Raiders":
            case "Oakland Raiders":
                return <Image src={raiders} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Los Angeles Rams":
            case "St. Louis Rams":
                return <Image src={rams} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Baltimore Ravens":
                return <Image src={ravens} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "New Orleans Saints":
                return <Image src={saints} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Seattle Seahawks":
                return <Image src={seahawks} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Pittsburgh Steelers":
                return <Image src={steelers} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Houston Texans":
                return <Image src={texans} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Tennessee Titans":
                return <Image src={titans} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Minnesota Vikings":
                return <Image src={vikings} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            default:
                return <div></div>;
        }
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
            <div className="gameWrapper">
                <div className="scoreWrapper pb-3">
                    <div className="teamWrapper">
                        <div className="logoWrapper mb-2">{getTeamLogo(game.team_home)}</div>
                        <div className="teamName">{game.team_home}</div>
                        <div className="teamScore">{game.score_home}</div>
                    </div>
                    <div className="teamWrapper">
                        <div className="logoWrapper mb-2">{getTeamLogo(game.team_away)}</div>
                        <div className="teamName">{game.team_away}</div>
                        <div className="teamScore">{game.score_away}</div>
                    </div>
                </div>
                <div className="gameDetailsWrapper">
                    <div>
                        {game.schedule_week === "Wildcard" || game.schedule_week === "Division" || game.schedule_week === "Conference" || game.schedule_week === "Superbowl" ? (
                            <div className="gameWeek">
                                {game.schedule_week} | {game.schedule_date}
                            </div>
                        ) : (
                            <div className="gameWeek">
                                Week {game.schedule_week} | {game.schedule_date}
                            </div>
                        )}
                        <div className="gameStadium">{game.stadium}</div>
                    </div>
                    {game.team_favorite_id && (
                        <div className="spreadDetailsWrapper">
                            <div className="spreadFavorite">
                                {game.team_favorite_id} {game.spread_favorite}
                            </div>
                            <div className="overUnderLine">+/- {game.over_under_line}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
