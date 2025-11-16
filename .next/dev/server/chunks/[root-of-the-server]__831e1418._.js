module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/analyze/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/analyze/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gradio$2f$client$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gradio/client/dist/index.js [app-route] (ecmascript)");
;
;
// ----------------- Helper Functions -----------------
function parseReport(report) {
    const get = (key)=>{
        // Use a loose regex that captures until end of line
        const re = new RegExp(`${key}:\\s*([^\\n\\r]*)`, "i");
        const match = report.match(re);
        return match ? match[1].trim() : null;
    };
    const confidenceRaw = get("Confidence Score") ?? "0";
    const confidence = parseFloat(confidenceRaw) || 0;
    return {
        confidence,
        firstSeen: get("First Seen"),
        lastSeen: get("Last Seen"),
        tags: (get("Tags") || "").split(",").map((t)=>t.trim()).filter(Boolean),
        predictedThreat: get("Predicted Threat Level") || "Unknown"
    };
}
function buildGauge(confidence, predictedThreat) {
    // Typed ranges
    const gaugeColors = [
        [
            0,
            0.4,
            "#16a34a"
        ],
        [
            0.4,
            0.75,
            "#f59e0b"
        ],
        [
            0.75,
            1,
            "#dc2626"
        ]
    ];
    return {
        data: [
            {
                type: "indicator",
                mode: "gauge+number+delta",
                value: confidence,
                title: {
                    text: `<b>Confidence</b><br><span style="font-size:12px;color:#cbd5e1">Threat: ${predictedThreat}</span>`,
                    font: {
                        size: 16
                    }
                },
                number: {
                    suffix: "%"
                },
                gauge: {
                    axis: {
                        range: [
                            0,
                            100
                        ],
                        tickwidth: 1,
                        tickcolor: "#94a3b8"
                    },
                    bar: {
                        color: "#0ea5a6"
                    },
                    steps: gaugeColors.map(([s, e, color])=>({
                            range: [
                                s * 100,
                                e * 100
                            ],
                            color
                        })),
                    threshold: {
                        line: {
                            color: "#111827",
                            width: 4
                        },
                        thickness: 0.8,
                        value: confidence
                    }
                }
            }
        ],
        layout: {
            title: {
                text: "Threat Confidence Gauge",
                font: {
                    color: "#e2e8f0"
                }
            },
            margin: {
                t: 40,
                b: 20,
                l: 10,
                r: 10
            },
            paper_bgcolor: "#0b1220",
            plot_bgcolor: "#0b1220",
            font: {
                color: "#e2e8f0"
            },
            height: 360,
            width: 360
        }
    };
}
function buildTimeline(firstSeen, lastSeen) {
    const fsDate = firstSeen ? new Date(firstSeen) : new Date();
    const lsDate = lastSeen ? new Date(lastSeen) : new Date();
    // friendly labels
    const fmt = (d)=>d.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    const fsLabel = fmt(fsDate);
    const lsLabel = fmt(lsDate);
    return {
        data: [
            // invisible baseline (helps with the fill polygon)
            {
                x: [
                    fsDate,
                    lsDate
                ],
                y: [
                    1,
                    1
                ],
                mode: "lines",
                line: {
                    color: "transparent"
                },
                hoverinfo: "skip",
                showlegend: false
            },
            // filled rectangular band between first and last seen
            {
                type: "scatter",
                x: [
                    fsDate,
                    lsDate,
                    lsDate,
                    fsDate,
                    fsDate
                ],
                y: [
                    0.6,
                    0.6,
                    1.4,
                    1.4,
                    0.6
                ],
                fill: "toself",
                fillcolor: "rgba(14,116,144,0.18)",
                line: {
                    color: "rgba(14,116,144,0)"
                },
                hoverinfo: "skip",
                showlegend: false
            },
            // First Seen marker + label
            {
                x: [
                    fsDate
                ],
                y: [
                    1
                ],
                mode: "markers+text",
                marker: {
                    size: 14,
                    color: "#06b6d4",
                    line: {
                        width: 2,
                        color: "#0f172a"
                    }
                },
                text: [
                    `First: ${fsLabel}`
                ],
                textposition: "bottom center",
                textfont: {
                    color: "#06b6d4",
                    size: 12
                },
                hovertemplate: `First Seen: ${fsLabel}<extra></extra>`
            },
            // Last Seen marker + label
            {
                x: [
                    lsDate
                ],
                y: [
                    1
                ],
                mode: "markers+text",
                marker: {
                    size: 14,
                    color: "#60a5fa",
                    line: {
                        width: 2,
                        color: "#0f172a"
                    }
                },
                text: [
                    `Last: ${lsLabel}`
                ],
                textposition: "bottom center",
                textfont: {
                    color: "#60a5fa",
                    size: 12
                },
                hovertemplate: `Last Seen: ${lsLabel}<extra></extra>`
            }
        ],
        layout: {
            title: {
                text: "Threat Levels Over Time",
                font: {
                    size: 18
                }
            },
            xaxis: {
                title: "Last Seen",
                showgrid: true,
                gridcolor: "#1f2937",
                tickangle: -25,
                tickfont: {
                    color: "#cbd5e1"
                }
            },
            yaxis: {
                visible: false,
                range: [
                    0,
                    2
                ]
            },
            margin: {
                t: 60,
                b: 80,
                l: 40,
                r: 40
            },
            paper_bgcolor: "#0b1220",
            plot_bgcolor: "#0b1220",
            font: {
                color: "#e2e8f0"
            },
            height: 330,
            width: 580
        }
    };
}
async function POST(req) {
    try {
        const body = await req.json();
        const { user_input } = body;
        if (!user_input) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Input is required"
            }, {
                status: 400
            });
        }
        // connect to Gradio Space (your space)
        const client = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gradio$2f$client$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"].connect("Bha19/cyber_project");
        const result = await client.predict("/predict", {
            user_input
        });
        // result.data is expected to be [report, maybe-other]
        const dataArray = result.data;
        const [report] = dataArray;
        // parse report
        const { confidence, firstSeen, lastSeen, predictedThreat } = parseReport(report);
        // build graphs
        const graphs = [
            buildGauge(confidence, predictedThreat),
            buildTimeline(firstSeen, lastSeen)
        ];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            report,
            graph: graphs
        });
    } catch (err) {
        console.error("Error calling Gradio API:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to call Gradio API"
        }, {
            status: 500
        });
    }
} // import { NextRequest, NextResponse } from "next/server";
 // import { Client } from "@gradio/client";
 // // ----------------- Helper Functions -----------------
 // function parseReport(report: string) {
 //   const get = (key: string) => {
 //     const match = report.match(new RegExp(`${key}:\\s*(.*)`));
 //     return match ? match[1].trim() : null;
 //   };
 //   return {
 //     confidence: parseFloat(get("Confidence Score") || "0"),
 //     firstSeen: get("First Seen"),
 //     lastSeen: get("Last Seen"),
 //     tags: (get("Tags") || "")
 //       .split(",")
 //       .map((t) => t.trim())
 //       .filter(Boolean),
 //     predictedThreat: get("Predicted Threat Level") || "Unknown",
 //   };
 // }
 // function buildGauge(confidence: number, predictedThreat: string) {
 //   // Define threat zones on gauge:
 //   // Low: 0-40, Medium: 40-75, High: 75-100
 //   // Color code accordingly
 //   const gaugeColors: [number, number, string][] = [
 //     [0, 0.4, "green"],
 //     [0.4, 0.75, "yellow"],
 //     [0.75, 1, "red"],
 //   ];
 //   return {
 //     data: [
 //       {
 //         type: "indicator",
 //         mode: "gauge+number+delta",
 //         value: confidence,
 //         title: {
 //           text: `Confidence Score<br><span style="font-size:0.8em;color:#999;">Predicted Threat: ${predictedThreat}</span>`,
 //           font: { size: 18 },
 //         },
 //         gauge: {
 //           axis: { range: [0, 100], tickwidth: 1, tickcolor: "darkgray" },
 //           bar: { color: "darkblue" },
 //           steps: gaugeColors.map(([start, end, color]) => ({
 //             range: [start * 100, end * 100],
 //             color,
 //           })),
 //           threshold: {
 //             line: { color: "black", width: 4 },
 //             thickness: 0.75,
 //             value: confidence,
 //           },
 //         },
 //       },
 //     ],
 //     layout: {
 //       margin: { t: 40, b: 0, l: 0, r: 0 },
 //       height: 350,
 //       width: 350,
 //       paper_bgcolor: "#0f172a",
 //       font: { color: "#e2e8f0" },
 //     },
 //   };
 // }
 // function buildTimeline(firstSeen: string | null, lastSeen: string | null) {
 //   const fs = firstSeen ? new Date(firstSeen) : new Date();
 //   const ls = lastSeen ? new Date(lastSeen) : new Date();
 //   // Format dates for display
 //   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
 //   const fsLabel = fs.toLocaleDateString(undefined, options);
 //   const lsLabel = ls.toLocaleDateString(undefined, options);
 //   return {
 //     data: [
 //       {
 //         // Invisible baseline for range shape positioning
 //         x: [fs, ls],
 //         y: [1, 1],
 //         mode: "lines",
 //         line: { color: "transparent" },
 //         hoverinfo: "skip",
 //       },
 //       {
 //         // Filled range between dates
 //         type: "scatter",
 //         x: [fs, ls, ls, fs, fs],
 //         y: [0.8, 0.8, 1.2, 1.2, 0.8],
 //         fill: "toself",
 //         fillcolor: "rgba(14, 116, 144, 0.3)",
 //         line: { color: "rgba(14, 116, 144, 0)" },
 //         hoverinfo: "skip",
 //         showlegend: false,
 //       },
 //       {
 //         // Marker for First Seen
 //         x: [fs],
 //         y: [1],
 //         mode: "markers+text",
 //         marker: { size: 14, color: "#0bc5ea" },
 //         text: [`First Seen: ${fsLabel}`],
 //         textposition: "bottom center",
 //         textfont: { color: "#0bc5ea", size: 12 },
 //       },
 //       {
 //         // Marker for Last Seen
 //         x: [ls],
 //         y: [1],
 //         mode: "markers+text",
 //         marker: { size: 14, color: "#22d3ee" },
 //         text: [`Last Seen: ${lsLabel}`],
 //         textposition: "bottom center",
 //         textfont: { color: "#22d3ee", size: 12 },
 //       },
 //     ],
 //     layout: {
 //       title: {
 //         text: "Threat Activity Timeline",
 //         font: { size: 20, color: "#e2e8f0" },
 //       },
 //       xaxis: {
 //         title: "Date",
 //         showgrid: true,
 //         zeroline: false,
 //         showline: true,
 //         linecolor: "#444",
 //         tickformat: "%b %d, %Y",
 //         tickangle: -45,
 //         tickfont: { color: "#ccc" },
 //       },
 //       yaxis: {
 //         visible: false,
 //         range: [0, 2],
 //       },
 //       margin: { t: 60, b: 80, l: 40, r: 40 },
 //       height: 350,
 //       width: 350,
 //       paper_bgcolor: "#0f172a",
 //       plot_bgcolor: "#0f172a",
 //       font: { color: "#e2e8f0" },
 //     },
 //   };
 // }
 // function buildTagBar(tags: string[]) {
 //   const counts: Record<string, number> = {};
 //   tags.forEach((tag) => (counts[tag] = (counts[tag] || 0) + 1));
 //   return {
 //     data: [
 //       {
 //         type: "bar",
 //         x: Object.keys(counts),
 //         y: Object.values(counts),
 //         marker: { color: "#06b6d4" },
 //       },
 //     ],
 //     layout: {
 //       title: "Tag Frequency",
 //       xaxis: { title: "Tags" },
 //       yaxis: { title: "Count" },
 //       margin: { t: 40, b: 50, l: 50, r: 30 },
 //       height: 350,
 //       width: 350,
 //       paper_bgcolor: "#0f172a",
 //       font: { color: "#e2e8f0" },
 //     },
 //   };
 // }
 // // ----------------- API Route -----------------
 // export async function POST(req: NextRequest) {
 //   try {
 //     const body = await req.json();
 //     const { user_input } = body;
 //     if (!user_input) {
 //       return NextResponse.json({ error: "Input is required" }, { status: 400 });
 //     }
 //     const client = await Client.connect("Bha19/cyber_project");
 //     const result = await client.predict("/predict", { user_input });
 //     const dataArray = result.data as [string, string | null];
 //     const [report] = dataArray;
 //     // Parse values from report string
 //     const { confidence, firstSeen, lastSeen, tags, predictedThreat } = parseReport(report);
 //     // Build graphs dynamically
 //     const graphs = [
 //       buildGauge(confidence, predictedThreat),
 //       buildTimeline(firstSeen, lastSeen),
 //       // If you want to keep tag bar, uncomment below:
 //       // buildTagBar(tags),
 //     ];
 //     return NextResponse.json({
 //       report,
 //       graph: graphs,
 //     });
 //   } catch (err) {
 //     console.error("Error calling Gradio API:", err);
 //     return NextResponse.json(
 //       { error: "Failed to call Gradio API" },
 //       { status: 500 }
 //     );
 //   }
 // }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__831e1418._.js.map