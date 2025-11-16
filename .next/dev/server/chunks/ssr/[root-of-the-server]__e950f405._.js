module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/components/dashboard-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
"use client";
;
;
;
;
function DashboardHeader({ email }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = async ()=>{
        try {
            await fetch("/api/auth/logout", {
                method: "POST"
            });
            router.push("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-slate-900/50 border-b border-slate-800 sticky top-0 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Trace X",
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard-header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard-header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-white font-semibold text-2xl hover:text-cyan-400 transition",
                            children: "TRACE X"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard-header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard-header.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300 text-sm",
                                    children: "Welcome back"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-header.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-medium",
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-header.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard-header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-lg transition flex items-center gap-2",
                            title: "Logout",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard-header.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard-header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard-header.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard-header.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard-header.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/threat-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client"
// import { useState } from "react"
// import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
// import { TrendingUp, AlertTriangle, Shield, Zap } from 'lucide-react'
// // Mock data for threat intelligence
// const threatTrendData = [
//   { month: "Jan", threats: 412, critical: 45, warning: 120 },
//   { month: "Feb", threats: 521, critical: 52, warning: 140 },
//   { month: "Mar", threats: 489, critical: 38, warning: 110 },
//   { month: "Apr", threats: 645, critical: 67, warning: 180 },
//   { month: "May", threats: 738, critical: 89, warning: 220 },
//   { month: "Jun", threats: 812, critical: 102, warning: 280 },
// ]
// const threatTypeData = [
//   { name: "Malware", value: 35, fill: "hsl(var(--chart-1))" },
//   { name: "Phishing", value: 25, fill: "hsl(var(--chart-2))" },
//   { name: "Ransomware", value: 20, fill: "hsl(var(--chart-3))" },
//   { name: "DDoS", value: 15, fill: "hsl(var(--chart-4))" },
//   { name: "Exploit", value: 5, fill: "hsl(var(--chart-5))" },
// ]
// const vulnerabilityData = [
//   { severity: "Critical", count: 45, fill: "hsl(0 84% 60%)" },
//   { severity: "High", count: 128, fill: "hsl(25 95% 53%)" },
//   { severity: "Medium", count: 342, fill: "hsl(38 92% 50%)" },
//   { severity: "Low", count: 512, fill: "hsl(142 76% 36%)" },
// ]
// const ipReputationData = [
//   { hour: "00:00", reputation: 65, blocked: 12 },
//   { hour: "04:00", reputation: 72, blocked: 18 },
//   { hour: "08:00", reputation: 58, blocked: 25 },
//   { hour: "12:00", reputation: 48, blocked: 42 },
//   { hour: "16:00", reputation: 35, blocked: 58 },
//   { hour: "20:00", reputation: 42, blocked: 35 },
//   { hour: "24:00", reputation: 55, blocked: 28 },
// ]
// export default function ThreatDashboard() {
//   const [selectedThreatType, setSelectedThreatType] = useState<string | null>(null)
//   const StatCard = ({ 
//     icon: Icon, 
//     label, 
//     value, 
//     trend, 
//     color 
//   }: { 
//     icon: any
//     label: string
//     value: string | number
//     trend: string
//     color: string
//   }) => (
//     <Card className="border-slate-700 bg-slate-900/50">
//       <CardContent className="pt-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-slate-400">{label}</p>
//             <p className="text-2xl font-bold text-white mt-1">{value}</p>
//             <p className={`text-xs mt-2 ${trend.includes("-") ? "text-red-400" : "text-green-400"}`}>
//               {trend}
//             </p>
//           </div>
//           <div className={`p-3 rounded-lg ${color}`}>
//             <Icon className="w-6 h-6" />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
//   return (
//     <div className="w-full bg-background">
//       <div className="space-y-6">
//         {/* Header with Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <StatCard
//             icon={AlertTriangle}
//             label="Active Threats"
//             value="812"
//             trend="+15% from last month"
//             color="bg-red-500/20 text-red-400"
//           />
//           <StatCard
//             icon={Shield}
//             label="Blocked IPs"
//             value="2,547"
//             trend="+8% from last week"
//             color="bg-orange-500/20 text-orange-400"
//           />
//           <StatCard
//             icon={Zap}
//             label="Indicators Found"
//             value="1,243"
//             trend="+22% from last month"
//             color="bg-yellow-500/20 text-yellow-400"
//           />
//           <StatCard
//             icon={TrendingUp}
//             label="Detection Rate"
//             value="94.2%"
//             trend="+2.1% improvement"
//             color="bg-green-500/20 text-green-400"
//           />
//         </div>
//         {/* Charts Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Threat Trends Line Chart */}
//           <Card className="border-slate-700 bg-slate-900/50">
//             <CardHeader>
//               <CardTitle className="text-white">Threat Activity Trends</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Total threats detected over the last 6 months
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ChartContainer
//                 config={{
//                   threats: { label: "Total Threats", color: "hsl(var(--chart-1))" },
//                   critical: { label: "Critical", color: "hsl(0 84% 60%)" },
//                   warning: { label: "Warning", color: "hsl(38 92% 50%)" },
//                 }}
//                 className="h-80"
//               >
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={threatTrendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,116,139,0.2)" />
//                     <XAxis dataKey="month" stroke="rgb(148,163,184)" />
//                     <YAxis stroke="rgb(148,163,184)" />
//                     <ChartTooltip content={<ChartTooltipContent />} />
//                     <Legend />
//                     <Line
//                       type="monotone"
//                       dataKey="threats"
//                       stroke="hsl(var(--chart-1))"
//                       strokeWidth={2}
//                       dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
//                       activeDot={{ r: 6 }}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="critical"
//                       stroke="hsl(0 84% 60%)"
//                       strokeWidth={2}
//                       dot={{ fill: "hsl(0 84% 60%)", r: 4 }}
//                       activeDot={{ r: 6 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </ChartContainer>
//             </CardContent>
//           </Card>
//           {/* Threat Type Distribution Pie Chart */}
//           <Card className="border-slate-700 bg-slate-900/50">
//             <CardHeader>
//               <CardTitle className="text-white">Threat Type Distribution</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Breakdown of detected threat categories
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ChartContainer
//                 config={{
//                   malware: { label: "Malware", color: "hsl(var(--chart-1))" },
//                   phishing: { label: "Phishing", color: "hsl(var(--chart-2))" },
//                   ransomware: { label: "Ransomware", color: "hsl(var(--chart-3))" },
//                   ddos: { label: "DDoS", color: "hsl(var(--chart-4))" },
//                   exploit: { label: "Exploit", color: "hsl(var(--chart-5))" },
//                 }}
//                 className="h-80"
//               >
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={threatTypeData}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={({ name, value }) => `${name}: ${value}%`}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                       onClick={(data) => setSelectedThreatType(data.name)}
//                     >
//                       {threatTypeData.map((entry, index) => (
//                         <Cell
//                           key={`cell-${index}`}
//                           fill={entry.fill}
//                           opacity={
//                             selectedThreatType === null || selectedThreatType === entry.name ? 1 : 0.5
//                           }
//                         />
//                       ))}
//                     </Pie>
//                     <ChartTooltip content={<ChartTooltipContent />} />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </ChartContainer>
//             </CardContent>
//           </Card>
//           {/* Vulnerability Severity Bar Chart */}
//           <Card className="border-slate-700 bg-slate-900/50">
//             <CardHeader>
//               <CardTitle className="text-white">Vulnerability Severity</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Distribution by severity level
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ChartContainer
//                 config={{
//                   critical: { label: "Critical", color: "hsl(0 84% 60%)" },
//                   high: { label: "High", color: "hsl(25 95% 53%)" },
//                   medium: { label: "Medium", color: "hsl(38 92% 50%)" },
//                   low: { label: "Low", color: "hsl(142 76% 36%)" },
//                 }}
//                 className="h-80"
//               >
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={vulnerabilityData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,116,139,0.2)" />
//                     <XAxis dataKey="severity" stroke="rgb(148,163,184)" />
//                     <YAxis stroke="rgb(148,163,184)" />
//                     <ChartTooltip content={<ChartTooltipContent />} />
//                     <Bar dataKey="count" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]}>
//                       {vulnerabilityData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.fill} />
//                       ))}
//                     </Bar>
//                   </BarChart>
//                 </ResponsiveContainer>
//               </ChartContainer>
//             </CardContent>
//           </Card>
//           {/* IP Reputation Area Chart */}
//           <Card className="border-slate-700 bg-slate-900/50">
//             <CardHeader>
//               <CardTitle className="text-white">IP Reputation Over Time</CardTitle>
//               <CardDescription className="text-slate-400">
//                 Reputation score and blocked IPs in last 24 hours
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ChartContainer
//                 config={{
//                   reputation: { label: "Reputation Score", color: "hsl(var(--chart-2))" },
//                   blocked: { label: "Blocked IPs", color: "hsl(0 84% 60%)" },
//                 }}
//                 className="h-80"
//               >
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={ipReputationData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
//                     <defs>
//                       <linearGradient id="colorReputation" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
//                         <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
//                       </linearGradient>
//                       <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="hsl(0 84% 60%)" stopOpacity={0.8} />
//                         <stop offset="95%" stopColor="hsl(0 84% 60%)" stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,116,139,0.2)" />
//                     <XAxis dataKey="hour" stroke="rgb(148,163,184)" />
//                     <YAxis stroke="rgb(148,163,184)" />
//                     <ChartTooltip content={<ChartTooltipContent />} />
//                     <Legend />
//                     <Area
//                       type="monotone"
//                       dataKey="reputation"
//                       stroke="hsl(var(--chart-2))"
//                       fillOpacity={1}
//                       fill="url(#colorReputation)"
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="blocked"
//                       stroke="hsl(0 84% 60%)"
//                       fillOpacity={1}
//                       fill="url(#colorBlocked)"
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </ChartContainer>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Recent Alerts */}
//         <Card className="border-slate-700 bg-slate-900/50">
//           <CardHeader>
//             <CardTitle className="text-white">Recent Security Alerts</CardTitle>
//             <CardDescription className="text-slate-400">
//               Latest detected threats and suspicious activities
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {[
//                 { id: 1, type: "Malware", severity: "Critical", ip: "192.168.1.105", time: "2 minutes ago" },
//                 { id: 2, type: "Phishing", severity: "High", ip: "10.0.0.45", time: "15 minutes ago" },
//                 { id: 3, type: "DDoS", severity: "High", ip: "172.16.0.1", time: "34 minutes ago" },
//                 { id: 4, type: "Ransomware", severity: "Critical", ip: "203.0.113.42", time: "1 hour ago" },
//                 { id: 5, type: "Exploit", severity: "Medium", ip: "198.51.100.89", time: "2 hours ago" },
//               ].map((alert) => (
//                 <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition">
//                   <div className="flex items-center gap-3 flex-1">
//                     <div className={`w-2 h-2 rounded-full ${alert.severity === "Critical" ? "bg-red-500" : "bg-orange-500"}`}></div>
//                     <div>
//                       <p className="text-white font-medium">{alert.type}</p>
//                       <p className="text-slate-400 text-sm">{alert.ip}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       alert.severity === "Critical" ? "bg-red-500/20 text-red-400" : "bg-orange-500/20 text-orange-400"
//                     }`}>
//                       {alert.severity}
//                     </span>
//                     <p className="text-slate-400 text-xs mt-2">{alert.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
}),
"[project]/components/url-analyzer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/url-analyzer.tsx
__turbopack_context__.s([
    "default",
    ()=>URLAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
;
"use client";
;
;
;
;
const Plot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-plotly.js/react-plotly.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function URLAnalyzer() {
    const [userInput, setUserInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleAnalyze = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        setResult(null);
        try {
            const res = await fetch("/api/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_input: userInput
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Analysis failed");
            setResult(data);
        } catch (err) {
            setError(err.message || "Unknown error");
        } finally{
            setLoading(false);
        }
    };
    // Safely extract graphs
    const gaugeGraph = result?.graph?.[0] ?? null;
    const timelineGraph = result?.graph?.[1] ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl shadow-lg p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "text-cyan-400",
                                size: 26
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            "Threat Intelligence Analyzer"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/url-analyzer.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAnalyze,
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Enter IOC / CVE / URL / Actor / Campaign",
                                value: userInput,
                                onChange: (e)=>setUserInput(e.target.value),
                                required: true,
                                className: "flex-1 px-5 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition disabled:opacity-50 flex items-center justify-center gap-2",
                                children: [
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                        className: "h-5 w-5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/url-analyzer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this),
                                    loading ? "Analyzing..." : "Analyze"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/url-analyzer.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg flex gap-2 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "h-5 w-5 text-red-400 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-300",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/url-analyzer.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/url-analyzer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800/50 border border-slate-700 rounded-2xl shadow-lg p-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "text-cyan-400",
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-white",
                                children: "Threat Intelligence Report"
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/url-analyzer.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "whitespace-pre-wrap bg-slate-900/60 text-cyan-200 p-5 rounded-lg text-sm leading-relaxed border border-slate-700 overflow-x-auto",
                        children: result.report
                    }, void 0, false, {
                        fileName: "[project]/components/url-analyzer.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col lg:flex-row gap-6 items-center justify-center",
                        children: [
                            gaugeGraph && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                                    data: gaugeGraph.data,
                                    layout: {
                                        ...gaugeGraph.layout,
                                        paper_bgcolor: "#0b1220",
                                        plot_bgcolor: "#0b1220",
                                        font: {
                                            color: "#e2e8f0"
                                        }
                                    },
                                    style: {
                                        width: 360,
                                        height: 360
                                    },
                                    config: {
                                        responsive: true
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/url-analyzer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            timelineGraph && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Plot, {
                                    data: timelineGraph.data,
                                    layout: {
                                        ...timelineGraph.layout,
                                        paper_bgcolor: "#0b1220",
                                        plot_bgcolor: "#0b1220",
                                        font: {
                                            color: "#e2e8f0"
                                        }
                                    },
                                    style: {
                                        width: "720px",
                                        height: 360
                                    },
                                    config: {
                                        responsive: true
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/url-analyzer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/url-analyzer.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/url-analyzer.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/url-analyzer.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/url-analyzer.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useState } from "react";
 // import dynamic from "next/dynamic";
 // import { Loader, Globe, FileText, Activity, AlertCircle } from "lucide-react";
 // const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
 // interface GraphData {
 //   data: any[];
 //   layout: Record<string, any>;
 // }
 // interface HFResponse {
 //   report: string;
 //   graph: GraphData[] | null;  // array of GraphData or null
 // }
 // export default function URLAnalyzer() {
 //   const [userInput, setUserInput] = useState("");
 //   const [loading, setLoading] = useState(false);
 //   const [result, setResult] = useState<HFResponse | null>(null);
 //   const [error, setError] = useState("");
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
 //       setResult(data);
 //     } catch (err: any) {
 //       setError(err.message);
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <div className="space-y-10">
 //       {/* Input Section */}
 //       <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl shadow-lg p-8">
 //         <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 //           <Globe className="text-cyan-400" size={26} />
 //           Threat Intelligence Analyzer
 //         </h2>
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
 //             className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition disabled:opacity-50 flex items-center justify-center gap-2"
 //           >
 //             {loading && <Loader className="h-5 w-5 animate-spin" />}
 //             {loading ? "Analyzing..." : "Analyze"}
 //           </button>
 //         </form>
 //         {error && (
 //           <div className="mt-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg flex gap-2 items-start">
 //             <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
 //             <p className="text-sm text-red-300">{error}</p>
 //           </div>
 //         )}
 //       </div>
 //       {/* Result Section */}
 //       {result && (
 //         <div className="bg-slate-800/50 border border-slate-700 rounded-2xl shadow-lg p-8 space-y-6">
 //           {/* Report */}
 //           <div className="flex items-center gap-2 mb-3">
 //             <FileText className="text-cyan-400" size={22} />
 //             <h3 className="text-xl font-semibold text-white">Threat Intelligence Report</h3>
 //           </div>
 //           <pre className="whitespace-pre-wrap bg-slate-900/60 text-cyan-200 p-5 rounded-lg text-sm leading-relaxed border border-slate-700 overflow-x-auto">
 //             {result.report}
 //           </pre>
 //           {result && result.graph && result.graph.length > 0 && (
 //             <div className="mt-6 flex flex-row gap-8 justify-center flex-wrap">
 //               {/* Confidence Gauge */}
 //               <div>
 //                 <Plot
 //                   data={result.graph[0].data}
 //                   layout={result.graph[0].layout}
 //                   style={{ width: 350, height: 350 }}
 //                   config={{ responsive: true }}
 //                 />
 //               </div>
 //               {/* Timeline */}
 //               {result.graph.length > 1 && (
 //                 <div>
 //                   <Plot
 //                     data={result.graph[1].data}
 //                     layout={result.graph[1].layout}
 //                     style={{ width: 350, height: 350 }}
 //                     config={{ responsive: true }}
 //                   />
 //                 </div>
 //               )}
 //             </div>
 //           )}
 //         </div>
 //       )}
 //     </div>
 //   );
 // }
}),
"[project]/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$threat$2d$dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/threat-dashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$url$2d$analyzer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/url-analyzer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DashboardPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch("/api/auth/me");
                if (!response.ok) {
                    router.push("/login");
                    return;
                }
                const data = await response.json();
                setUserEmail(data.user.email);
            } catch (error) {
                console.error("[v0] Auth check error:", error);
                router.push("/login");
            } finally{
                setIsLoading(false);
            }
        };
        checkAuth();
    }, [
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300",
                        children: "Loading dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-black to-blue-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                email: userEmail
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$threat$2d$dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$url$2d$analyzer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e950f405._.js.map