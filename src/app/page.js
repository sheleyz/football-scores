"use client";

import { useState, useEffect } from "react";

// Components
import Layout from "../components/Layout";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://api.baserow.io/api/database/rows/table/229773/?user_field_names=true&order_by=-schedule_season%2C-schedule_week&size=10&filters=%7B%22filter_type%22%3A%22OR%22%2C%22filters%22%3A%5B%7B%22type%22%3A%22contains%22%2C%22field%22%3A%22team_home%22%2C%22value%22%3A%22Indianapolis%20Colts%22%7D%2C%7B%22type%22%3A%22contains%22%2C%22field%22%3A%22team_away%22%2C%22value%22%3A%22Indianapolis%20Colts%22%7D%5D%2C%22groups%22%3A%5B%5D%7D",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`
                    }
                }
            );

            const json = await response.json();
            setData(json);
        }

        fetchData();
    }, []);

    return (
        <Layout>
            <div>{data && JSON.stringify(data)}</div>
        </Layout>
    );
}
