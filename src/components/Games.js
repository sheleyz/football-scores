"use client";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

// Components
import Game from "./Game";

export default function Games({ gameData }) {
    let [data, setData] = useState([]);

    useEffect(() => {
        function getData() {
            setData(gameData.slice(0, 16));
        }
        getData();
    }, []);

    function handleLoadMore() {
        setData((prevData) => {
            return [...prevData, ...gameData.slice(prevData.length, prevData.length + 16)];
        });
    }

    return (
        <div className="mainWrapper container mw-100 px-4 px-md-5 py-4">
            <div className="row d-flex my-5">
                {data.map((item, index) => {
                    return <Game game={item} key={index} />;
                })}
            </div>
            <div className="d-flex justify-content-center align-items-center w-100">
                <Button variant="dark" size="lg" onClick={handleLoadMore} className="btn-brand-secondary">
                    Load More
                </Button>
            </div>
        </div>
    );
}
