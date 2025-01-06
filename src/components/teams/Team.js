"use client";

import Image from "next/image";
import styles from "./teams.module.scss";

// Images
import sf49ers from "../../images/logos/49ers.png";
import bears from "../../images/logos/bears.png";
import bengals from "../../images/logos/bengals.png";
import bills from "../../images/logos/bills.png";
import broncos from "../../images/logos/broncos.png";
import browns from "../../images/logos/browns.png";
import buccaneers from "../../images/logos/buccaneers.png";
import cardinals from "../../images/logos/cardinals.png";
import chargers from "../../images/logos/chargers.png";
import chiefs from "../../images/logos/chiefs.png";
import colts from "../../images/logos/colts.png";
import commanders from "../../images/logos/commanders.png";
import cowboys from "../../images/logos/cowboys.png";
import dolphins from "../../images/logos/dolphins.png";
import eagles from "../../images/logos/eagles.png";
import falcons from "../../images/logos/falcons.png";
import giants from "../../images/logos/giants.png";
import jaguars from "../../images/logos/jaguars.png";
import jets from "../../images/logos/jets.png";
import lions from "../../images/logos/lions.png";
import packers from "../../images/logos/packers.png";
import panthers from "../../images/logos/panthers.png";
import patriots from "../../images/logos/patriots.png";
import raiders from "../../images/logos/raiders.png";
import rams from "../../images/logos/rams.png";
import ravens from "../../images/logos/ravens.png";
import saints from "../../images/logos/saints.png";
import seahawks from "../../images/logos/seahawks.png";
import steelers from "../../images/logos/steelers.png";
import texans from "../../images/logos/texans.png";
import titans from "../../images/logos/titans.png";
import vikings from "../../images/logos/vikings.png";

export default function Team({ team }) {
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
            case "Houston Oilers":
                return <Image src={texans} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Tennessee Titans":
            case "Tennessee Oilers":
                return <Image src={titans} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            case "Minnesota Vikings":
                return <Image src={vikings} alt={`${teamName} logo`} placeholder="blur" className="rounded-3" />;
            default:
                return <div></div>;
        }
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
            <div className={styles.teamCardWrapper}>
                <div className={`${styles.logoWrapper} mb-2`}>{getTeamLogo(team.team_name)}</div>
                <div className="teamName fw-semibold text-center">{team.team_name}</div>
                <div className="teamFirstYear text-center">Est. {team.franchise_first_year}</div>
                <div className={styles.teamRecordsWrapper}>
                    <div className={styles.teamRecordHeading}>Overall Record</div>
                    <div className="teamRecord mb-2">
                        {team.franchise_wins} - {team.franchise_losses} - {team.franchise_ties} ({(team.franchise_win_loss_percentage * 100).toFixed(1)}%)
                    </div>
                    <div className={styles.teamRecordHeading}>Playoff Record</div>
                    <div className="teamRecord">
                        {team.franchise_playoff_wins} - {team.franchise_playoff_losses} ({(team.franchise_playoff_win_loss_percentage * 100).toFixed(1)}%)
                    </div>
                </div>
                <div className="teamChampsWrapper">
                    <div className="teamChampionshipWins">Championship Wins: {team.franchise_championship_wins}</div>
                    <div className="teamSuperBowlWins">Super Bowl Wins: {team.franchise_superbowl_wins}</div>
                    <div className="teamConferenceChampionships">Conference Championships: {team.franchise_conference_champions}</div>
                    <div className="teamDivisionChampionships">Division Championships: {team.franchise_division_champions}</div>
                </div>
            </div>
        </div>
    );
}
