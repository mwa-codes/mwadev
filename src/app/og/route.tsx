import { ImageResponse } from "next/og";

export const runtime = "edge";

// /og?title=...
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "MWA Dev Blog";
    const subtitle = searchParams.get("subtitle") ?? "Engineering • AI • Automation";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background:
                        "linear-gradient(135deg, rgb(29,78,216) 0%, rgb(147,51,234) 100%)",
                    color: "white",
                    padding: "64px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                        style={{
                            width: 72,
                            height: 60,
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            fontSize: 28,
                        }}
                    >
                        MWA
                    </div>
                    <div style={{ fontSize: 20, opacity: 0.9 }}>mwadev.me</div>
                </div>
                <div style={{ height: 24 }} />
                <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
                <div style={{ height: 16 }} />
                <div style={{ fontSize: 28, opacity: 0.9 }}>{subtitle}</div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
