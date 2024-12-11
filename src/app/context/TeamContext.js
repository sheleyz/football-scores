import { createContext, useContext, useEffect, useState, useRef } from "react";
import teamData from "../../app/data/teamData.json";
import gameData from "../../app/data/gameData.json";

const TeamContext = createContext();

export const useTeamContext = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const teamsRef = useRef([]);
    const gamesRef = useRef([]);
    const [loaded, setLoaded] = useState(false);
    const didRun = useRef(false);

    useEffect(() => {
        if (!didRun.current && !loaded) {
            teamsRef.current = teamData;
            const filteredGames = gameData.filter((game) => {
                if (game.score_home !== "" || game.score_away !== "") {
                    return game;
                }
            });
            gamesRef.current = filteredGames.sort((a, b) => new Date(b.schedule_date).getTime() - new Date(a.schedule_date).getTime());
            didRun.current = true;
            setLoaded(true);
        }
    }, [didRun.current, loaded]);

    return <TeamContext value={{ teams: teamsRef.current, games: gamesRef.current, loaded }}>{children}</TeamContext>;
};
