function ContactForm() {
const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
const [sent, setSent] = useState(false);


const handleSubmit = (e) => {
e.preventDefault();
// Simulate submit → store locally
const msgs = JSON.parse(localStorage.getItem("autoscan_messages") || "[]");
msgs.push({ ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString() });
localStorage.setItem("autoscan_messages", JSON.stringify(msgs));
setSent(true);
setForm({ name: "", email: "", phone: "", message: "" });
};


if (sent) {
return (
<div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 text-sm">
Thanks! Your message was sent. We will get back to you shortly.
</div>
);
}


return (
<form onSubmit={handleSubmit} className="space-y-3 bg-white border border-slate-200 rounded-3xl p-6">
<div className="grid md:grid-cols-2 gap-3">
<Field label="Name">
<input required value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"/>
</Field>
<Field label="Email">
<input type="email" required value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"/>
</Field>
</div>
<Field label="Phone">
<input value={form.phone} onChange={e=>setForm(f=>({...f, phone:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"/>
</Field>
<Field label="Message">
<textarea required rows={4} value={form.message} onChange={e=>setForm(f=>({...f, message:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"/>
</Field>
<button className="rounded-2xl bg-slate-900 px-4 py-2 text-white shadow">Send Message</button>
</form>
);
}