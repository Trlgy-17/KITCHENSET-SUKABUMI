import React from "react";

export function ProblemSolutionSection() {
  const issues = [
    {
      num: "01",
      title: "Storage Cepat Penuh & Berantakan",
      desc: "Ruang kabinet tidak diperhitungkan berdasarkan inventaris alat masak aktual sehingga blender, panci besar, dan bumbu berserakan di atas meja kerja.",
    },
    {
      num: "02",
      title: "Sudut Mati (Blind Corner) yang Mubazir",
      desc: "Sudut pertemuan L-shape yang gelap dan sulit dijangkau tangan karena tidak menggunakan mekanisme ambalan tarik putar (Magic Corner).",
    },
    {
      num: "03",
      title: "Tinggi Meja Dapur yang Membuat Punggung Pegal",
      desc: "Ketinggian meja kerja standar 80cm sering tidak ergonomis dengan tinggi badan juru masak utama, menyebabkan leher dan punggung cepat lelah saat mencuci.",
    },
    {
      num: "04",
      title: "Rayap & Material Keropos Akibat Kelembapan Sukabumi",
      desc: "Bahan serbuk kayu murah (particle board) cepat mekar hancur seperti bubur jika terkena uap air basah atau tetesan pipa di bawah wastafel.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FCFBF8] border-b border-[#D8D2C7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B76E48] block">
              DIAGNOSA PERMASALAHAN DAPUR
            </span>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#171715] leading-[1.15] tracking-[-0.02em]">
              DAPUR YANG CANTIK BELUM TENTU{" "}
              <span className="font-serif italic font-normal text-[#775139]">
                nyaman digunakan.
              </span>
            </h2>

            <p className="text-[15px] text-[#474741] leading-relaxed">
              Banyak pemilik rumah di Sukabumi mengeluh dapur baru mereka cepat rusak karena lembap, laci tidak cukup menampung peralatan, atau posisi kompor dan wastafel yang melelahkan saat memasak.
            </p>

            <div className="p-5 rounded-[12px] bg-[#F4F1EA] border border-[#D8D2C7] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#775139]">
                Pendekatan Ergonomi Kami
              </span>
              <p className="font-serif italic text-sm text-[#171715] leading-snug">
                &ldquo;Dapur harus dirancang dari kebiasaan memasak Anda, bukan sekadar menempel lemari ke tembok.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Hairline List Rows per PDF Section 6 Component Rules */}
          <div className="lg:col-span-7 divide-y divide-[#D8D2C7] border-y border-[#D8D2C7]">
            {issues.map((item) => (
              <div key={item.num} className="py-6 sm:py-8 space-y-2 group">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#B76E48]">
                    {item.num}
                  </span>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-[#171715] group-hover:text-[#775139] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[14px] text-[#474741] pl-7 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
