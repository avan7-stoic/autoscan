function Contact() {
return (
<div className="grid lg:grid-cols-2 gap-8">
<div className="space-y-4">
<h1 className="text-3xl md:text-4xl font-black tracking-tight">Contact Us</h1>
<p className="text-slate-600">Got a question or need to book? Send a message and we’ll get back to you.</p>
<ContactForm/>
</div>
<aside className="space-y-4">
<div className="bg-white border border-slate-200 rounded-3xl p-6">
<h3 className="font-semibold mb-2">Direct Contact</h3>
<ul className="space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +254 700 000 000</li>
<li className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@autoscan.app</li>
<li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Nairobi, Kenya</li>
</ul>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-6">
<h3 className="font-semibold mb-2">Business Hours</h3>
<p className="text-sm text-slate-700">Mon–Fri: 8:00–18:00 · Sat: 9:00–16:00</p>
</div>
</aside>
</div>
);
}