import React from "react";

export function TrustStrip() {
  const pillars = [
    {
      title: "Custom Made",
      desc: "Dirancang mengikuti ukuran ruang aktual.",
    },
    {
      title: "Transparent",
      desc: "Spesifikasi material & RAB jelas.",
    },
    {
      title: "Measured",
      desc: "Survei & pengukuran presisi sebelum produksi.",
    },
    {
      title: "After Sales",
      desc: "Garansi pemeliharaan 6 bulan tertulis.",
    },
  ];

  return (
    <section className="py-10 md:py-12 bg-[#FAF8F3] border-b border-[#DCD5CA]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-[#D6D0C7]">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className={`space-y-1.5 ${
                idx !== 0 ? "lg:pl-8" : ""
              } ${idx % 2 !== 0 ? "pl-2 sm:pl-4 lg:pl-8" : ""}`}
            >
              <h3 className="font-sans text-[20px] sm:text-[22px] font-semibold text-[#181715] tracking-[-0.025em]">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#656159] leading-[1.5] font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
