function BookingModal({ onClose }) {
return (
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />
<div className="relative w-full max-w-lg bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Book Appointment</h3>
<button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5"/></button>
</div>
<BookingForm onSuccess={onClose} />
</div>
</div>
);
}