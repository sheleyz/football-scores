"use client";

import { TeamProvider } from "./context/TeamContext";

export function Providers({ children }) {
    return <TeamProvider>{children}</TeamProvider>;
}
