function InfoCard({ title, desc }) {
return (
<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
<h4 className="font-semibold">{title}</h4>
<p className="text-sm text-slate-600 mt-1">{desc}</p>
</div>
);
}