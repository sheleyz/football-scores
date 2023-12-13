"use client";

import { useState, useEffect } from "react";

// Components
import Layout from "../components/Layout";

export default function Home() {
    const [data, setData] = useState(null);



    return (
        <Layout>
            <div>{data && JSON.stringify(data)}</div>
        </Layout>
    );
}
