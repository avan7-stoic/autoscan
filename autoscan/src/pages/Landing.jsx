function Landing() {
const navigate = useNavigate();
return (
<div className="space-y-14">
<section className="grid md:grid-cols-2 gap-8 items-center">
<div>
<motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.4}} className="text-4xl md:text-5xl font-black tracking-tight mb-4">
Smart Car Diagnostics <span className="text-slate-500">Made Simple</span>
</motion.h1>
<p className="text-slate-600 mb-6">Book an appointment online and get professional OBD-II checks, clear explanations, and a service plan you can trust.</p>
<div className="flex flex-wrap gap-3">
<Link to="/services/diagnostics" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 hover:bg-slate-100">
Learn More <ArrowRight className="w-4 h-4"/>
</Link>
<button onClick={()=>navigate("/contact") } className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800">
Contact Us
</button>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
<Feature icon={<Gauge className="w-4 h-4"/>} label="Fast & Accurate"/>
<Feature icon={<Wrench className="w-4 h-4"/>} label="Certified Techs"/>
<Feature icon={<Car className="w-4 h-4"/>} label="All Makes"/>
<Feature icon={<Calendar className="w-4 h-4"/>} label="Easy Booking"/>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 shadow-2xl"/>
<div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-4 w-56 border border-slate-200">
<div className="text-xs text-slate-500">Live Snapshot</div>
<div className="mt-2 text-sm">OBD-II Scan • Emissions • ABS</div>
</div>
</div>
</section>


<section className="grid md:grid-cols-3 gap-6">
{[
{title:"Online Booking", desc:"Pick a date/time that works. No calls needed.", icon: <Calendar className="w-5 h-5"/>},
{title:"Transparent Reports", desc:"Clear code explanations and action steps.", icon: <Gauge className="w-5 h-5"/>},
{title:"Modern Tools", desc:"Dealer-level scanners and expert inspection.", icon: <Wrench className="w-5 h-5"/>}
].map((c, i)=> (
<Card key={i} {...c} />
))}
</section>
</div>
);
}