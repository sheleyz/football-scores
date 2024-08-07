import { NextResponse } from "next/server";

// Trigger this middleware to run on the home route
export const config = {
    matcher: "/"
};

export function middleware(request) {
    // Extract country (default to US if not found)
    const country = (request.geo && request.geo.country) || "US";

    console.log(`Visitor from ${country}`);

    // Extract user agent
    const userAgent = request.headers.get("User-Agent");
    // console.log(`Visitor from ${userAgent}`);

    // Specify the correct route based on the request location and user agent
    if (
        userAgent === "AhrefsBot" ||
        userAgent === "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)" ||
        userAgent === "Mozilla/5.0 (compatible; AhrefsSiteAudit/6.1; +http://ahrefs.com/robot/site-audit)" ||
        userAgent ===
            "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.128 Mobile Safari/537.36 (compatible; AhrefsSiteAudit/6.1; +http://ahrefs.com/robot/site-audit)"
    ) {
        request.nextUrl.pathname = "/";
    } else if (country !== "US") {
        request.nextUrl.pathname = "/blocked";
    } else {
        request.nextUrl.pathname = "/";
    }

    // Rewrite to URL
    return NextResponse.rewrite(request.nextUrl);
}
