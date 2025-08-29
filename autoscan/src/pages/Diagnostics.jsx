function Diagnostics() {
return (
<div className="space-y-10">
<header className="flex items-start justify-between gap-6">
<div>
<h1 className="text-3xl md:text-4xl font-black tracking-tight">Car Diagnostics</h1>
<p className="mt-2 text-slate-600 max-w-2xl">Identify issues before they become costly. We combine advanced OBD-II tools with expert inspection to give you clear answers and a simple action plan.</p>
</div>
<div className="hidden md:block p-3 rounded-2xl bg-white border shadow">
<div className="text-xs text-slate-500">Starting at</div>
<div className="text-2xl font-black">KSh 2,500</div>
</div>
</header>


<section className="grid md:grid-cols-2 gap-8 items-start">
<div className="space-y-4">
<h2 className="text-xl font-semibold">How it works</h2>
<ol className="space-y-3 text-slate-700 list-decimal list-inside">
<li>Connect scanner to OBD-II port and retrieve DTCs.</li>
<li>Analyze live data (fuel trims, O2, MAF, coolant temp, etc.).</li>
<li>Inspect components/wiring as indicated by codes.</li>
<li>Provide a clear report with priorities and estimates.</li>
</ol>
</div>
<div className="space-y-4">
<h2 className="text-xl font-semibold">What we check</h2>
<ul className="space-y-2 text-slate-700 list-disc list-inside">
<li>Engine performance & emissions readiness</li>
<li>Transmission health (where supported)</li>
<li>ABS, airbag/SRS status and codes</li>
<li>Battery, charging and starting systems</li>
</ul>
</div>
</section>


<section className="grid md:grid-cols-3 gap-6">
<InfoCard title="Prevent Breakdowns" desc="Catch small issues early and avoid costly failures."/>
<InfoCard title="Save Money" desc="Target the root cause instead of guessing parts."/>
<InfoCard title="Improve Safety & Efficiency" desc="Restore performance and reduce emissions."/>
</section>


<section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
<h3 className="text-lg font-semibold">Sample Report Preview</h3>
<div className="mt-3 text-sm bg-slate-50 border rounded-2xl p-4">
<div className="font-mono text-xs">DTCs: P0302 (Cylinder 2 misfire), P0420 (Catalyst efficiency)</div>
<div className="mt-2">Recommendations: Inspect coil #2, check exhaust leaks, verify O2 sensors, perform compression test if misfire persists.</div>
</div>
<div className="mt-4">
<Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-white shadow">Book Diagnostics <ArrowRight className="w-4 h-4"/></Link>
</div>
</section>
</div>
);
}