function ServiceCard({ title, desc }) {
return (
<div className="bg-white rounded-3xl p-5 border border-slate-200 hover:shadow-md transition">
<h4 className="font-semibold">{title}</h4>
<p className="text-sm text-slate-600 mt-1">{desc}</p>
<Link to="/services/diagnostics" className="mt-3 inline-flex items-center gap-1 text-sm text-slate-900">Learn more <ArrowRight className="w-4 h-4"/></Link>
</div>
);
}