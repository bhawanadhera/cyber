// // components/url-analyzer.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader, Globe, FileText, AlertCircle, Clock, Tag, Zap, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

interface GraphData {
  data: any[];
  layout: Record<string, any>;
}

interface HFResponse {
  report: string;
  graph: GraphData[] | null;
}

interface SearchHistory {
  id: string;
  input: string;
  result: HFResponse;
  timestamp: Date;
}

function parseReport(report: string) {
  const get = (key: string) => {
    const re = new RegExp(`${key}:\\s*([^\\n\\r]*)`, "i");
    const match = report.match(re);
    return match ? match[1].trim() : null;
  };

  return {
    value: get("Value / Name"),
    inputType: get("Input Type"),
    threatLevel: get("Predicted Threat Level"),
    confidence: parseFloat(get("Confidence Score") || "0"),
    source: get("Source / Reference"),
    tags: (get("Tags") || "").split(",").map(t => t.trim()).filter(Boolean),
    firstSeen: get("First Seen"),
    lastSeen: get("Last Seen"),
    description: get("Description"),
    tlp: get("TLP"),
  };
}

const getThreatColor = (level: string | null) => {
  if (!level) return "bg-slate-500/20 text-slate-400 border-slate-600";
  const lower = level.toLowerCase();
  if (lower.includes("critical") || lower.includes("high")) return "bg-red-500/20 text-red-400 border-red-600";
  if (lower.includes("medium")) return "bg-orange-500/20 text-orange-400 border-orange-600";
  if (lower.includes("low")) return "bg-yellow-500/20 text-yellow-400 border-yellow-600";
  return "bg-green-500/20 text-green-400 border-green-600";
};

export default function URLAnalyzer() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<HFResponse | null>(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<SearchHistory[]>([]);
  const [parsedData, setParsedData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("threatSearchHistory");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setHistory(parsed.map((h: any) => ({ ...h, timestamp: new Date(h.timestamp) })));
      } catch (e) {
        console.error("[v0] Failed to parse history:", e);
      }
    }
  }, []);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: userInput }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analysis failed");

      const newResult = data as HFResponse;
      setResult(newResult);
      
      const parsed = parseReport(newResult.report);
      setParsedData(parsed);

      const newHistory = [
        {
          id: Date.now().toString(),
          input: userInput,
          result: newResult,
          timestamp: new Date(),
        },
        ...history,
      ].slice(0, 10);
      
      setHistory(newHistory);
      localStorage.setItem("threatSearchHistory", JSON.stringify(newHistory));
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleReanalyze = (item: SearchHistory) => {
    setUserInput(item.input);
    setResult(item.result);
    setParsedData(parseReport(item.result.report));
  };

  const gaugeGraph = result?.graph?.[0] ?? null;
  const timelineGraph = result?.graph?.[1] ?? null;

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Globe className="text-cyan-400" size={26} />
          Threat Intelligence Analyzer
        </h2>
        <p className="text-slate-400 text-sm mb-6">Analyze IOCs, CVEs, URLs, Actors, and Campaigns for threat intelligence</p>

        <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter IOC / CVE / URL / Actor / Campaign"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
            className="flex-1 px-5 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading && <Loader className="h-5 w-5 animate-spin" />}
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-900/30 border border-red-700/50 rounded-lg flex gap-2 items-start">
            <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}
      </div>

      {/* Result Section */}
      {result && parsedData && (
        <div className="space-y-6">
          {/* Key Threat Insights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-slate-700 bg-slate-900/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">Threat Level</p>
                    <p className={`text-2xl font-bold mt-2 ${getThreatColor(parsedData.threatLevel).split(' ')[1]}`}>
                      {parsedData.threatLevel || "Unknown"}
                    </p>
                  </div>
                  <AlertCircle className={`h-8 w-8 ${getThreatColor(parsedData.threatLevel).split(' ')[1]}`} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">Confidence</p>
                    <p className="text-2xl font-bold text-cyan-400 mt-2">{parsedData.confidence}%</p>
                  </div>
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">Input Type</p>
                    <p className="text-xl font-bold text-slate-200 mt-2">{parsedData.inputType || "Unknown"}</p>
                  </div>
                  <Shield className="h-8 w-8 text-slate-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">Value/Name</p>
                    <p className="text-sm font-mono text-slate-300 mt-2 truncate">{parsedData.value || "N/A"}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-slate-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Threat Metadata */}
          <Card className="border-slate-700 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield size={20} className="text-cyan-400" />
                Threat Metadata
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Source/Reference</p>
                  <p className="text-slate-200">{parsedData.source || "Unknown"}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">TLP Level</p>
                  <p className="text-slate-200 font-mono">{parsedData.tlp || "Unknown"}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">First Seen</p>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-400" />
                    <p className="text-slate-200">{parsedData.firstSeen || "Unknown"}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Last Seen</p>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-400" />
                    <p className="text-slate-200">{parsedData.lastSeen || "Unknown"}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {parsedData.tags.length > 0 && (
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300 hover:bg-cyan-500/20 transition cursor-pointer"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {parsedData.description && (
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Description</p>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-800/30 p-3 rounded border border-slate-700">
                    {parsedData.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Full Report */}
          <Card className="border-slate-700 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText size={20} className="text-cyan-400" />
                Full Threat Intelligence Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap bg-slate-900/60 text-cyan-200 p-5 rounded-lg text-xs leading-relaxed border border-slate-700 overflow-x-auto max-h-64 overflow-y-auto">
                {result.report}
              </pre>
            </CardContent>
          </Card>

          {/* Visualizations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {gaugeGraph && (
              <Card className="border-slate-700 bg-slate-900/50">
                <CardHeader>
                  <CardTitle className="text-white text-sm">Confidence Gauge</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-4">
                  <div className="w-full flex justify-center">
                    <Plot
                      data={gaugeGraph.data}
                      layout={{
                        ...gaugeGraph.layout,
                        paper_bgcolor: "#0b1220",
                        plot_bgcolor: "#0b1220",
                        font: { color: "#e2e8f0" },
                        margin: { t: 30, b: 20, l: 10, r: 10 },
                      }}
                      style={{ width: "100%", height: 320, maxWidth: 400 }}
                      config={{ responsive: true, displayModeBar: false }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {timelineGraph && (
              <Card className="border-slate-700 bg-slate-900/50">
                <CardHeader>
                  <CardTitle className="text-white text-sm">Threat Timeline</CardTitle>
                </CardHeader>
                <CardContent className="p-4 overflow-hidden">
                  <div className="w-full h-80 overflow-hidden rounded">
                    <Plot
                      data={timelineGraph.data}
                      layout={{
                        ...timelineGraph.layout,
                        paper_bgcolor: "#0b1220",
                        plot_bgcolor: "#0b1220",
                        font: { color: "#e2e8f0" },
                        margin: { t: 30, b: 60, l: 50, r: 20},
                        xaxis: {
                          ...(timelineGraph.layout.xaxis || {}),
                          tickangle: -45,
                        },
                      }}
                      style={{ width: "100%", height: "100%" }}
                      config={{ responsive: true, displayModeBar: false }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Search History */}
      {history.length > 0 && (
        <Card className="border-slate-700 bg-slate-900/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock size={20} className="text-cyan-400" />
              Recent Searches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {history.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleReanalyze(item)}
                  className="w-full text-left p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition flex items-center justify-between group"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-slate-200 truncate font-mono text-sm">{item.input}</p>
                    <p className="text-xs text-slate-500">
                      {item.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  <Loader size={16} className="text-slate-500 group-hover:text-cyan-400 transition ml-2 flex-shrink-0" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}











// "use client";

// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import { Loader, Globe, FileText, AlertCircle, Clock, Tag, Zap, Shield, TrendingUp } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// interface GraphData {
//   data: any[];
//   layout: Record<string, any>;
// }

// interface HFResponse {
//   report: string;
//   graph: GraphData[] | null;
// }

// interface SearchHistory {
//   id: string;
//   input: string;
//   result: HFResponse;
//   timestamp: Date;
// }

// function parseReport(report: string) {
//   const get = (key: string) => {
//     const re = new RegExp(`${key}:\\s*([^\\n\\r]*)`, "i");
//     const match = report.match(re);
//     return match ? match[1].trim() : null;
//   };

//   return {
//     value: get("Value / Name"),
//     inputType: get("Input Type"),
//     threatLevel: get("Predicted Threat Level"),
//     confidence: parseFloat(get("Confidence Score") || "0"),
//     source: get("Source / Reference"),
//     tags: (get("Tags") || "").split(",").map(t => t.trim()).filter(Boolean),
//     firstSeen: get("First Seen"),
//     lastSeen: get("Last Seen"),
//     description: get("Description"),
//     tlp: get("TLP"),
//   };
// }

// const getThreatColor = (level: string | null) => {
//   if (!level) return "bg-slate-500/20 text-slate-400 border-slate-600";
//   const lower = level.toLowerCase();
//   if (lower.includes("critical") || lower.includes("high")) return "bg-red-500/20 text-red-400 border-red-600";
//   if (lower.includes("medium")) return "bg-orange-500/20 text-orange-400 border-orange-600";
//   if (lower.includes("low")) return "bg-yellow-500/20 text-yellow-400 border-yellow-600";
//   return "bg-green-500/20 text-green-400 border-green-600";
// };

// export default function URLAnalyzer() {
//   const [userInput, setUserInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState<HFResponse | null>(null);
//   const [error, setError] = useState("");
//   const [history, setHistory] = useState<SearchHistory[]>([]);
//   const [parsedData, setParsedData] = useState<any>(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("threatSearchHistory");
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         setHistory(parsed.map((h: any) => ({ ...h, timestamp: new Date(h.timestamp) })));
//       } catch (e) {
//         console.error("[v0] Failed to parse history:", e);
//       }
//     }
//   }, []);

//   const handleAnalyze = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const res = await fetch("/api/analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user_input: userInput }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Analysis failed");

//       const newResult = data as HFResponse;
//       setResult(newResult);
      
//       const parsed = parseReport(newResult.report);
//       setParsedData(parsed);

//       const newHistory = [
//         {
//           id: Date.now().toString(),
//           input: userInput,
//           result: newResult,
//           timestamp: new Date(),
//         },
//         ...history,
//       ].slice(0, 10);
      
//       setHistory(newHistory);
//       localStorage.setItem("threatSearchHistory", JSON.stringify(newHistory));
//     } catch (err: any) {
//       setError(err.message || "Unknown error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReanalyze = (item: SearchHistory) => {
//     setUserInput(item.input);
//     setResult(item.result);
//     setParsedData(parseReport(item.result.report));
//   };

//   const gaugeGraph = result?.graph?.[0] ?? null;
//   const timelineGraph = result?.graph?.[1] ?? null;

//   return (
//     <div className="space-y-6">
//       {/* Input Section */}
//       <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
//           <Globe className="text-cyan-400" size={26} />
//           Threat Intelligence Analyzer
//         </h2>
//         <p className="text-slate-400 text-sm mb-6">Analyze IOCs, CVEs, URLs, Actors, and Campaigns for threat intelligence</p>

//         <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Enter IOC / CVE / URL / Actor / Campaign"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             required
//             className="flex-1 px-5 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
//           >
//             {loading && <Loader className="h-5 w-5 animate-spin" />}
//             {loading ? "Analyzing..." : "Analyze"}
//           </button>
//         </form>

//         {error && (
//           <div className="mt-4 p-4 bg-red-900/30 border border-red-700/50 rounded-lg flex gap-2 items-start">
//             <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
//             <p className="text-sm text-red-300">{error}</p>
//           </div>
//         )}
//       </div>

//       {/* Result Section */}
//       {result && parsedData && (
//         <div className="space-y-6">
//           {/* Key Threat Insights */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <Card className="border-slate-700 bg-slate-900/50">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-slate-400 uppercase tracking-wide">Threat Level</p>
//                     <p className={`text-2xl font-bold mt-2 ${getThreatColor(parsedData.threatLevel).split(' ')[1]}`}>
//                       {parsedData.threatLevel || "Unknown"}
//                     </p>
//                   </div>
//                   <AlertCircle className={`h-8 w-8 ${getThreatColor(parsedData.threatLevel).split(' ')[1]}`} />
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-slate-700 bg-slate-900/50">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-slate-400 uppercase tracking-wide">Confidence</p>
//                     <p className="text-2xl font-bold text-cyan-400 mt-2">{parsedData.confidence}%</p>
//                   </div>
//                   <Zap className="h-8 w-8 text-cyan-400" />
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-slate-700 bg-slate-900/50">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-slate-400 uppercase tracking-wide">Input Type</p>
//                     <p className="text-xl font-bold text-slate-200 mt-2">{parsedData.inputType || "Unknown"}</p>
//                   </div>
//                   <Shield className="h-8 w-8 text-slate-400" />
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-slate-700 bg-slate-900/50">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-slate-400 uppercase tracking-wide">Value/Name</p>
//                     <p className="text-sm font-mono text-slate-300 mt-2 truncate">{parsedData.value || "N/A"}</p>
//                   </div>
//                   <TrendingUp className="h-8 w-8 text-slate-400" />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Threat Metadata */}
//           <Card className="border-slate-700 bg-slate-900/50">
//             <CardHeader>
//               <CardTitle className="text-white flex items-center gap-2">
//                 <Shield size={20} className="text-cyan-400" />
//                 Threat Metadata
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Source/Reference</p>
//                   <p className="text-slate-200">{parsedData.source || "Unknown"}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">TLP Level</p>
//                   <p className="text-slate-200 font-mono">{parsedData.tlp || "Unknown"}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">First Seen</p>
//                   <div className="flex items-center gap-2">
//                     <Clock size={16} className="text-slate-400" />
//                     <p className="text-slate-200">{parsedData.firstSeen || "Unknown"}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Last Seen</p>
//                   <div className="flex items-center gap-2">
//                     <Clock size={16} className="text-slate-400" />
//                     <p className="text-slate-200">{parsedData.lastSeen || "Unknown"}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Tags */}
//               {parsedData.tags.length > 0 && (
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">Tags</p>
//                   <div className="flex flex-wrap gap-2">
//                     {parsedData.tags.map((tag: string, idx: number) => (
//                       <span
//                         key={idx}
//                         className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300 hover:bg-cyan-500/20 transition cursor-pointer"
//                       >
//                         <Tag size={12} />
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Description */}
//               {parsedData.description && (
//                 <div>
//                   <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Description</p>
//                   <p className="text-slate-300 text-sm leading-relaxed bg-slate-800/30 p-3 rounded border border-slate-700">
//                     {parsedData.description}
//                   </p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Full Report */}
//           <Card className="border-slate-700 bg-slate-900/50">
//             <CardHeader>
//               <CardTitle className="text-white flex items-center gap-2">
//                 <FileText size={20} className="text-cyan-400" />
//                 Full Threat Intelligence Report
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <pre className="whitespace-pre-wrap bg-slate-900/60 text-cyan-200 p-5 rounded-lg text-xs leading-relaxed border border-slate-700 overflow-x-auto max-h-64 overflow-y-auto">
//                 {result.report}
//               </pre>
//             </CardContent>
//           </Card>

//           {/* Visualizations */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {gaugeGraph && (
//               <Card className="border-slate-700 bg-slate-900/50">
//                 <CardHeader>
//                   <CardTitle className="text-white text-sm">Confidence Gauge</CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex justify-center">
//                   <Plot
//                     data={gaugeGraph.data}
//                     layout={{
//                       ...gaugeGraph.layout,
//                       paper_bgcolor: "#0b1220",
//                       plot_bgcolor: "#0b1220",
//                       font: { color: "#e2e8f0" },
//                     }}
//                     style={{ width: 360, height: 360 }}
//                     config={{ responsive: true }}
//                   />
//                 </CardContent>
//               </Card>
//             )}

//             {timelineGraph && (
//               <Card className="border-slate-700 bg-slate-900/50">
//                 <CardHeader>
//                   <CardTitle className="text-white text-sm">Threat Timeline</CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex px-2 justify-center">
//                   <Plot
//                     data={timelineGraph.data}
//                     layout={{
//                       ...timelineGraph.layout,
//                       paper_bgcolor: "#0b1220",
//                       plot_bgcolor: "#0b1220",
//                       font: { color: "#e2e8f0" },
//                     }}
//                     style={{ width: "200%", height: 360, minWidth: 360 }}
//                     config={{ responsive: true }}
//                   />
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Search History */}
//       {history.length > 0 && (
//         <Card className="border-slate-700 bg-slate-900/50">
//           <CardHeader>
//             <CardTitle className="text-white flex items-center gap-2">
//               <Clock size={20} className="text-cyan-400" />
//               Recent Searches
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2 max-h-64 overflow-y-auto">
//               {history.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => handleReanalyze(item)}
//                   className="w-full text-left p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition flex items-center justify-between group"
//                 >
//                   <div className="min-w-0 flex-1">
//                     <p className="text-slate-200 truncate font-mono text-sm">{item.input}</p>
//                     <p className="text-xs text-slate-500">
//                       {item.timestamp.toLocaleTimeString()}
//                     </p>
//                   </div>
//                   <Loader size={16} className="text-slate-500 group-hover:text-cyan-400 transition ml-2 flex-shrink-0" />
//                 </button>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }










// // "use client";

// // import { useState } from "react";
// // import dynamic from "next/dynamic";
// // import { Loader, Globe, FileText, Activity, AlertCircle } from "lucide-react";

// // const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// // interface GraphData {
// //   data: any[];
// //   layout: Record<string, any>;
// // }

// // interface HFResponse {
// //   report: string;
// //   graph: GraphData[] | null;
// // }

// // export default function URLAnalyzer() {
// //   const [userInput, setUserInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState<HFResponse | null>(null);
// //   const [error, setError] = useState("");

// //   const handleAnalyze = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     setResult(null);

// //     try {
// //       const res = await fetch("/api/analyze", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ user_input: userInput }),
// //       });
// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.error || "Analysis failed");
// //       setResult(data as HFResponse);
// //     } catch (err: any) {
// //       setError(err.message || "Unknown error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Safely extract graphs
// //   const gaugeGraph = result?.graph?.[0] ?? null;
// //   const timelineGraph = result?.graph?.[1] ?? null;

// //   return (
// //     <div className="space-y-10">
// //       {/* Input Section */}
// //       <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl shadow-lg p-8">
// //         <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
// //           <Globe className="text-cyan-400" size={26} />
// //           Threat Intelligence Analyzer
// //         </h2>

// //         <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-4">
// //           <input
// //             type="text"
// //             placeholder="Enter IOC / CVE / URL / Actor / Campaign"
// //             value={userInput}
// //             onChange={(e) => setUserInput(e.target.value)}
// //             required
// //             className="flex-1 px-5 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
// //           />
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition disabled:opacity-50 flex items-center justify-center gap-2"
// //           >
// //             {loading && <Loader className="h-5 w-5 animate-spin" />}
// //             {loading ? "Analyzing..." : "Analyze"}
// //           </button>
// //         </form>

// //         {error && (
// //           <div className="mt-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg flex gap-2 items-start">
// //             <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
// //             <p className="text-sm text-red-300">{error}</p>
// //           </div>
// //         )}
// //       </div>

// //       {/* Result Section */}
// //       {result && (
// //         <div className="bg-slate-800/50 border border-slate-700 rounded-2xl shadow-lg p-8 space-y-6">
// //           {/* Report */}
// //           <div className="flex items-center gap-2 mb-3">
// //             <FileText className="text-cyan-400" size={22} />
// //             <h3 className="text-xl font-semibold text-white">Threat Intelligence Report</h3>
// //           </div>

// //           <pre className="whitespace-pre-wrap bg-slate-900/60 text-cyan-200 p-5 rounded-lg text-sm leading-relaxed border border-slate-700 overflow-x-auto">
// //             {result.report}
// //           </pre>

// //           {/* Graphs container - horizontal row */}
// //           <div className="mt-6 flex flex-col lg:flex-row gap-6 items-center justify-center">
// //             {/* Gauge */}
// //             {gaugeGraph && (
// //               <div className="flex-shrink-0">
// //                 <Plot
// //                   data={gaugeGraph.data}
// //                   layout={{
// //                     ...gaugeGraph.layout,
// //                     paper_bgcolor: "#0b1220",
// //                     plot_bgcolor: "#0b1220",
// //                     font: { color: "#e2e8f0" },
// //                   }}
// //                   style={{ width: 360, height: 360 }}
// //                   config={{ responsive: true }}
// //                 />
// //               </div>
// //             )}

// //             {/* Timeline (wide) */}
// //             {timelineGraph && (
// //               <div className="flex-1 max-w-full">
// //                 <Plot
// //                   data={timelineGraph.data}
// //                   layout={{
// //                     ...timelineGraph.layout,
// //                     paper_bgcolor: "#0b1220",
// //                     plot_bgcolor: "#0b1220",
// //                     font: { color: "#e2e8f0" },
// //                   }}
// //                   style={{ width: "720px", height: 360 }}
// //                   config={{ responsive: true }}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






