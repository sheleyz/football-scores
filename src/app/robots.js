export default function robots() {
    return {
        rules: [
            {
                userAgent: ["Google-Extended", "Applebot-Extended", "ChatGPT-User", "GPTBot", "CCBot", "PerplexityBot", "anthropic-ai", "Claude-Web", "ClaudeBot", "Bytespider"],
                disallow: "/"
            },
            {
                userAgent: "*",
                allow: "/",
                disallow: "/blocked/"
            }
        ],
        sitemap: "https://nflscores.vercel.app/sitemap.xml"
    };
}
