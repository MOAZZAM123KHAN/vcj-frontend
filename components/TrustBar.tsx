export default function TrustBar() {
  const items = [
    { 
      label: "BIS Hallmarked", 
      icon: <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z"/> 
    },
    { 
      label: "Since 1960", 
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </>
      )
    },
    { 
      label: "100% Buyback", 
      icon: (
        <>
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </>
      )
    },
    { 
      label: "Free Lifetime Repair", 
      icon: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/> 
    }
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-5 md:py-6">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 md:justify-center md:border-r md:last:border-r-0 border-slate-100 px-2">
              <span className="shrink-0">
                <svg stroke="#854F0B" strokeWidth="1.5" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {item.icon}
                </svg>
              </span>
              <span className="text-sm font-medium text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
