function Feature({ icon, label }) {
return (
<div className="flex items-center gap-2 rounded-2xl bg-white border border-slate-200 p-3 shadow-sm">
<div className="p-2 rounded-xl bg-slate-900 text-white">
{icon}
</div>
<span className="text-sm font-medium">{label}</span>
</div>
);
}