function Home() {
const navigate = useNavigate();
return (
<div className="space-y-12">
<section className="text-center">
<h1 className="text-3xl md:text-4xl font-black tracking-tight">Welcome to AutoScan</h1>
<p className="mt-3 text-slate-600 max-w-2xl mx-auto">We provide quick, reliable, and affordable diagnostics so you can make smart decisions about maintenance and repairs.</p>
<div className="mt-6 flex justify-center gap-3">
<Link to="/services/diagnostics" className="rounded-2xl border border-slate-300 px-4 py-2 hover:bg-slate-100">View Diagnostics</Link>
<button onClick={()=>navigate("/contact")} className="rounded-2xl bg-slate-900 px-4 py-2 text-white shadow">Book Now</button>
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Our Services</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{[
{title:"Full OBD-II Scan", desc:"ECU codes, freeze-frame, live data."},
{title:"Engine Health Check", desc:"Misfire, fuel trim, sensors review."},
{title:"Brake/ABS System", desc:"ABS/airbag lights and diagnostics."},
{title:"Battery/Charging", desc:"Battery test and alternator status."},
{title:"Emissions Readiness", desc:"Catalyst efficiency and monitors."},
{title:"Maintenance Plan", desc:"Priorities, cost estimates, schedule."}
].map((s, i)=> (
<ServiceCard key={i} {...s}/>
))}
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
<ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
<Reason>Experienced Staff</Reason>
<Reason>Latest Technology</Reason>
<Reason>Transparent Pricing</Reason>
<Reason>Customer Satisfaction</Reason>
</ul>
</section>


<section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
<h3 className="text-lg font-semibold">Testimonials</h3>
<div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
<blockquote className="p-4 rounded-2xl bg-slate-50 border">“They explained my check-engine light in plain English.”</blockquote>
<blockquote className="p-4 rounded-2xl bg-slate-50 border">“Booked online, was in and out in 40 minutes.”</blockquote>
<blockquote className="p-4 rounded-2xl bg-slate-50 border">“The report helped me avoid an unnecessary repair.”</blockquote>
</div>
</section>
</div>
);
}