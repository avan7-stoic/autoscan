// function AdminAppointments() {
// const [list, setList] = useState(() => JSON.parse(localStorage.getItem("autoscan_appointments") || "[]"));
// const mark = (id, status) => {
// const next = list.map(a => a.id === id ? { ...a, status } : a);
// setList(next);
// localStorage.setItem("autoscan_appointments", JSON.stringify(next));
// };
// const remove = (id) => {
// const next = list.filter(a => a.id !== id);
// setList(next);
// localStorage.setItem("autoscan_appointments", JSON.stringify(next));
// };
// return (
// <div className="space-y-4">
// <h1 className="text-2xl font-bold">Appointments (Local Demo)</h1>
// <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl">
// <table className="min-w-full text-sm">
// <thead className="bg-slate-50">
// <tr className="text-left">
// {['Name','Email','Phone','Vehicle','Plate','Date','Time','Status',''].map(h=> (
// <th key={h} className="px-3 py-2 font-semibold text-slate-700">{h}</th>
// ))}
// </tr>
// </thead>
// <tbody>
// {list.length === 0 && (
// <tr><td colSpan={9} className="px-3 py-6 text-center text-slate-500">No appointments yet.</td></tr>
// )}
// {list.map(a => (
// <tr key={a.id} className="border-t">
// <td className="px-3 py-2">{a.name}</td>
// <td className="px-3 py-2">{a.email}</td>
// <td className="px-3 py-2">{a.phone}</td>
// <td className="px-3 py-2">{a.vehicleMake} {a.vehicleModel}</td>
// <td className="px-3 py-2">{a.plate}</td>
// <td className="px-3 py-2">{a.date}</td>
// <td className="px-3 py-2">{a.time}</td>
// <td className="px-3 py-2">{a.status}</td>
// <td className="px-3 py-2 text-right space-x-2">
// <button onClick={()=>mark(a.id,'confirmed')} className="rounded-xl border border-slate-300 px-3 py-1">Confirm</button>
// <button onClick={()=>mark(a.id,'completed')} className="rounded-xl border border-slate-300 px-3 py-1">Complete</button>
// <button onClick={()=>remove(a.id)} className="rounded-xl border border-rose-300 text-rose-700 px-3 py-1">Delete</button>
// </td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// </div>
// );
// }