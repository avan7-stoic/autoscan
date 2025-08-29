function BookingForm({ onSuccess }) {
const [data, setData] = useState({
name: "",
email: "",
phone: "",
vehicleMake: "",
vehicleModel: "",
plate: "",
date: "",
time: "",
notes: "",
});
const [saved, setSaved] = useState(false);


const submit = (e) => {
e.preventDefault();
const appts = JSON.parse(localStorage.getItem("autoscan_appointments") || "[]");
appts.push({ ...data, id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: "pending" });
localStorage.setItem("autoscan_appointments", JSON.stringify(appts));
setSaved(true);
setData({ name:"", email:"", phone:"", vehicleMake:"", vehicleModel:"", plate:"", date:"", time:"", notes:"" });
if (onSuccess) onSuccess();
};


return (
<form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3 text-sm">
<div className="grid md:grid-cols-2 gap-3">
<Field label="Full Name"><input required value={data.name} onChange={e=>setData(d=>({...d, name:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
<Field label="Email"><input type="email" required value={data.email} onChange={e=>setData(d=>({...d, email:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
</div>
<Field label="Phone"><input value={data.phone} onChange={e=>setData(d=>({...d, phone:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>


<div className="grid md:grid-cols-3 gap-3">
<Field label="Vehicle Make"><input placeholder="Toyota" value={data.vehicleMake} onChange={e=>setData(d=>({...d, vehicleMake:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
<Field label="Model"><input placeholder="Axio" value={data.vehicleModel} onChange={e=>setData(d=>({...d, vehicleModel:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
<Field label="Plate"><input placeholder="KDE 123A" value={data.plate} onChange={e=>setData(d=>({...d, plate:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
</div>


<div className="grid md:grid-cols-2 gap-3">
<Field label="Preferred Date"><input type="date" required value={data.date} onChange={e=>setData(d=>({...d, date:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
<Field label="Preferred Time"><input type="time" required value={data.time} onChange={e=>setData(d=>({...d, time:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>
</div>


<Field label="Notes"><textarea rows={3} value={data.notes} onChange={e=>setData(d=>({...d, notes:e.target.value}))} className="w-full rounded-xl border border-slate-300 px-3 py-2"/></Field>


<div className="flex items-center justify-end gap-3 pt-2">
<button type="button" onClick={onSuccess} className="rounded-2xl border border-slate-300 px-4 py-2">Cancel</button>
<button className="rounded-2xl bg-slate-900 px-4 py-2 text-white shadow">Confirm Booking</button>
</div>


{saved && <div className="text-emerald-700">Appointment saved!</div>}
</form>
);
}