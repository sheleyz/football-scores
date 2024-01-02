import { NextResponse } from "next/server";

// Trigger this middleware to run on the home route
export const config = {
    matcher: "/"
};

export function middleware(request) {
    // Extract country (default to US if not found)
    const country = (request.geo && request.geo.country) || "US";

    console.log(`Visitor from ${country}`);

    // Specify the correct route based on the request location
    if (country !== "US") {
        request.nextUrl.pathname = "/blocked";
    } else {
        request.nextUrl.pathname = "/";
    }

    // Rewrite to URL
    return NextResponse.rewrite(request.nextUrl);
}
