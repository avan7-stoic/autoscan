function Field({ label, children }) {
return (
<label className="block text-sm">
<span className="text-slate-700">{label}</span>
<div className="mt-1">{children}</div>
</label>
);
}