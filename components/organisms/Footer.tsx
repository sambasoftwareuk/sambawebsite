export function Footer() {
  return (
    <footer className="w-full bg-slate-50 px-6 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 text-lg font-bold text-slate-800">Samba Software</div>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            © 2026 Samba Software. Websites that convert. Automation that saves time.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <h5 className="mb-2 text-sm font-bold text-slate-900">Company</h5>
            {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
              <a key={item} className="text-sm text-slate-500 transition-all hover:text-indigo-600" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="mb-2 text-sm font-bold text-slate-900">Legal</h5>
            {['Privacy Policy', 'Terms'].map((item) => (
              <a key={item} className="text-sm text-slate-500 transition-all hover:text-indigo-600" href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-slate-200/50 p-6">
          <h5 className="mb-4 text-sm font-bold text-slate-900">Subscribe to our newsletter</h5>
          <div className="flex gap-2">
            <input className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none" placeholder="Email address" type="email" />
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
