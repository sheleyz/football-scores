"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTeamContext } from "../../app/context/TeamContext";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Games from "../games/Games";
import styles from "./compare.module.scss";
import filtersStyles from "../filters/filters.module.scss";

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

export default function Compare() {
    const { teams, games, loaded } = useTeamContext();
    const [team1Details, setTeam1Details] = useState();
    const [team2Details, setTeam2Details] = useState();
    const [selections, setSelections] = useState({
        team1: "none",
        team2: "none"
    });
    const [team1Wins, setTeam1Wins] = useState(0);
    const [team2Wins, setTeam2Wins] = useState(0);
    const [team1PlayoffWins, setTeam1PlayoffWins] = useState(0);
    const [team2PlayoffWins, setTeam2PlayoffWins] = useState(0);
    const [ties, setTies] = useState(0);

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

    useEffect(() => {
        if (loaded) {
            const { team1, team2 } = selections;

            if (team1 !== "none" && team2 !== "none" && team1 !== team2) {
                const team1Stats = teams.find((team) => team.team_name_short === team1);
                const team2Stats = teams.find((team) => team.team_name_short === team2);

                let team1WinCount = 0;
                let team2WinCount = 0;
                let team1PlayoffWinCount = 0;
                let team2PlayoffWinCount = 0;
                let tiesCount = 0;

                games.forEach((game) => {
                    if (
                        (game.team_home === team1Stats.team_name || team1Stats.team_name_old.includes(game.team_home)) &&
                        (game.team_away === team2Stats.team_name || team2Stats.team_name_old.includes(game.team_away))
                    ) {
                        if (Number(game.score_home) > Number(game.score_away) && game.schedule_playoff === "FALSE") {
                            team1WinCount++;
                        } else if (Number(game.score_away) > Number(game.score_home) && game.schedule_playoff === "FALSE") {
                            team2WinCount++;
                        } else if (Number(game.score_home) > Number(game.score_away) && game.schedule_playoff === "TRUE") {
                            team1PlayoffWinCount++;
                        } else if (Number(game.score_away) > Number(game.score_home) && game.schedule_playoff === "TRUE") {
                            team2PlayoffWinCount++;
                        } else if (Number(game.score_home) == Number(game.score_away)) {
                            tiesCount++;
                        }
                    } else if (
                        (game.team_home === team2Stats.team_name || team2Stats.team_name_old.includes(game.team_home)) &&
                        (game.team_away === team1Stats.team_name || team1Stats.team_name_old.includes(game.team_away))
                    ) {
                        if (Number(game.score_home) > Number(game.score_away) && game.schedule_playoff === "FALSE") {
                            team2WinCount++;
                        } else if (Number(game.score_away) > Number(game.score_home) && game.schedule_playoff === "FALSE") {
                            team1WinCount++;
                        } else if (Number(game.score_home) > Number(game.score_away) && game.schedule_playoff === "TRUE") {
                            team2PlayoffWinCount++;
                        } else if (Number(game.score_away) > Number(game.score_home) && game.schedule_playoff === "TRUE") {
                            team1PlayoffWinCount++;
                        } else if (Number(game.score_home) == Number(game.score_away)) {
                            tiesCount++;
                        }
                    }
                });
                setTeam1Wins(team1WinCount);
                setTeam2Wins(team2WinCount);
                setTeam1PlayoffWins(team1PlayoffWinCount);
                setTeam2PlayoffWins(team2PlayoffWinCount);
                setTies(tiesCount);

                setTeam1Details(team1Stats);
                setTeam2Details(team2Stats);
            }
        }
    }, [loaded, selections]);

    const handleSelections = (type, value) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [type]: value
        }));
    };

    return (
        <div className="mainWrapper container mw-100 px-3 px-md-5 py-4">
            <div className={`${filtersStyles.filterOptionsWrapper} d-flex justify-content-center align-items-center flex-wrap flex-column flex-md-row w-100 my-3`}>
                <Form.Select className="bg-white" onChange={(e) => handleSelections("team1", e.target.value)} aria-label="Select a team">
                    <option value="none">Team 1</option>
                    {teams.map((team) => (
                        <option value={team.team_name_short} key={team.team_name_short}>
                            {team.team_name_short}
                        </option>
                    ))}
                </Form.Select>
                <Form.Select className="bg-white" onChange={(e) => handleSelections("team2", e.target.value)} aria-label="Select a team">
                    <option value="none">Team 2</option>
                    {teams.map((team) => (
                        <option value={team.team_name_short} key={team.team_name_short}>
                            {team.team_name_short}
                        </option>
                    ))}
                </Form.Select>
            </div>
            <div className="compareWrapper d-flex mt-4 mb-5 w-100 justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    {loaded && team1Details && team2Details && (
                        <div className={`${styles.compareCardWrapper} text-center`}>
                            <div className={styles.teamsSection}>
                                <div className={styles.teamInfo}>
                                    <div className={`${styles.logoWrapper} mb-2`}>{getTeamLogo(team1Details.team_name)}</div>
                                    <div className={`${styles.teamName} fw-semibold text-center`}>{team1Details.team_name_short}</div>
                                    <div className="teamFirstYear text-center fw-normal">Est. {team1Details.franchise_first_year}</div>
                                </div>
                                <div className={styles.teamInfo}>
                                    <div className={`${styles.logoWrapper} mb-2`}>{getTeamLogo(team2Details.team_name)}</div>
                                    <div className={`${styles.teamName} fw-semibold text-center`}>{team2Details.team_name_short}</div>
                                    <div className="teamFirstYear text-center fw-normal">Est. {team2Details.franchise_first_year}</div>
                                </div>
                            </div>
                            <Table bordered responsive size="sm">
                                <tbody>
                                    <tr>
                                        <td className={`teamStat ${team1Wins > team2Wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Wins}</div>
                                        </td>
                                        <td>Matchup Wins</td>
                                        <td className={`teamStat ${team1Wins < team2Wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Wins}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat`}>
                                            <div>{ties}</div>
                                        </td>
                                        <td>Matchup Ties</td>
                                        <td className={`teamStat`}>
                                            <div>{ties}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1PlayoffWins > team2PlayoffWins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1PlayoffWins}</div>
                                        </td>
                                        <td>Matchup Playoff Wins</td>
                                        <td className={`teamStat ${team1PlayoffWins < team2PlayoffWins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2PlayoffWins}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_wins > team2Details.franchise_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_wins}</div>
                                        </td>
                                        <td>Wins</td>
                                        <td className={`teamStat ${team1Details.franchise_wins < team2Details.franchise_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_wins}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_losses < team2Details.franchise_losses && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_losses}</div>
                                        </td>
                                        <td>Losses</td>
                                        <td className={`teamStat ${team1Details.franchise_losses > team2Details.franchise_losses && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_losses}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_ties > team2Details.franchise_ties && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_ties}</div>
                                        </td>
                                        <td>Ties</td>
                                        <td className={`teamStat ${team1Details.franchise_ties < team2Details.franchise_ties && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_ties}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_win_loss_percentage > team2Details.franchise_win_loss_percentage && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{(team1Details.franchise_win_loss_percentage * 100).toFixed(1)}%</div>
                                        </td>
                                        <td>Win %</td>
                                        <td className={`teamStat ${team1Details.franchise_win_loss_percentage < team2Details.franchise_win_loss_percentage && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{(team2Details.franchise_win_loss_percentage * 100).toFixed(1)}%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_playoff_wins > team2Details.franchise_playoff_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_playoff_wins}</div>
                                        </td>
                                        <td>Playoff Wins</td>
                                        <td className={`teamStat ${team1Details.franchise_playoff_wins < team2Details.franchise_playoff_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_playoff_wins}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_playoff_losses < team2Details.franchise_playoff_losses && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_playoff_losses}</div>
                                        </td>
                                        <td>Playoff Losses</td>
                                        <td className={`teamStat ${team1Details.franchise_playoff_losses > team2Details.franchise_playoff_losses && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_playoff_losses}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_playoff_win_loss_percentage > team2Details.franchise_playoff_win_loss_percentage && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{(team1Details.franchise_playoff_win_loss_percentage * 100).toFixed(1)}%</div>
                                        </td>
                                        <td>Playoff Win %</td>
                                        <td className={`teamStat ${team1Details.franchise_playoff_win_loss_percentage < team2Details.franchise_playoff_win_loss_percentage && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{(team2Details.franchise_playoff_win_loss_percentage * 100).toFixed(1)}%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_championship_wins > team2Details.franchise_championship_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_championship_wins}</div>
                                        </td>
                                        <td>Championship Wins</td>
                                        <td className={`teamStat ${team1Details.franchise_championship_wins < team2Details.franchise_championship_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_championship_wins}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_superbowl_wins > team2Details.franchise_superbowl_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_superbowl_wins}</div>
                                        </td>
                                        <td>Super Bowl Wins</td>
                                        <td className={`teamStat ${team1Details.franchise_superbowl_wins < team2Details.franchise_superbowl_wins && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_superbowl_wins}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_conference_champions > team2Details.franchise_conference_champions && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_conference_champions}</div>
                                        </td>
                                        <td>Conference Champions</td>
                                        <td className={`teamStat ${team1Details.franchise_conference_champions < team2Details.franchise_conference_champions && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_conference_champions}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`teamStat ${team1Details.franchise_division_champions > team2Details.franchise_division_champions && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team1Details.franchise_division_champions}</div>
                                        </td>
                                        <td>Division Champions</td>
                                        <td className={`teamStat ${team1Details.franchise_division_champions < team2Details.franchise_division_champions && `${styles["bg-brand-green-light"]}`}`}>
                                            <div>{team2Details.franchise_division_champions}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )}
                </div>
            </div>
            {loaded && team1Details && team2Details && (
                <div>
                    <div className={`${styles.headingWrapper} mw-100 px-xl-5 pt-4`}>
                        <h2>Games</h2>
                    </div>
                    <Games key={`${team1Details?.team_name}-${team2Details?.team_name}`} team1={team1Details} team2={team2Details} />
                </div>
            )}
        </div>
    );
}
