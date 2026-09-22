import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS_DATA } from "@/data/projects";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

interface StyleData {
  title: string;
  badge: string;
  description: string;
  advantages: string[];
  bestRoomSize: string;
  image: string;
}

const STYLE_INFO: Record<string, StyleData> = {
  minimalis: {
    title: "Kitchen Set Minimalis Sukabumi",
    badge: "Paling Populer",
    description: "Desain bersih tanpa ornamen berlebih, mengutamakan garis horizontal tegas, pegangan handle tersembunyi (profile J-pull), dan paduan warna netral hangat.",
    advantages: [
      "Memberikan ilusi ruangan dapur terasa 30% lebih luas",
      "Sangat mudah dibersihkan dari percikan minyak dan debu",
      "Biaya lebih efisien dengan finishing HPL solid matte",
      "Abadi dan tidak cepat ketinggalan zaman"
    ],
    bestRoomSize: "Cocok untuk dapur ukuran 2x2 meter, 2.5x2 meter, dan rumah klaster tipe 36-60.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
  },
  modern: {
    title: "Kitchen Set Modern Sukabumi",
    badge: "Tren Interior Terkini",
    description: "Menghadirkan fitur terkini seperti lampu LED strip sensor tersembunyi, rak lift-up hidrolik, dan kombinasi material kaca tinted serta marmer elegan.",
    advantages: [
      "Pencahayaan dramatis di area kerja memasak",
      "Penyimpanan pintar untuk peralatan microwave, oven, dan rice cooker tanam",
      "Tampilan mewah berkelas seperti hunian apartemen penthouse",
      "Hardware berdaya beban tinggi untuk laci panci berat"
    ],
    bestRoomSize: "Ideal untuk ruangan terbuka (open-plan) yang menyatu dengan ruang makan & keluarga.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
  },
  "letter-l": {
    title: "Kitchen Set Letter L Sukabumi",
    badge: "Optimalisasi Sudut",
    description: "Tata letak dua dinding siku 90 derajat yang memisahkan area basah (cuci piring) dengan area panas (kompor) secara sempurna dan ergonomis.",
    advantages: [
      "Mengoptimalkan sudut mati ruangan dengan rak Magic Corner",
      "Alur segitiga kerja (work triangle) paling natural dan tidak melelahkan",
      "Dapat mengakomodasi dua orang memasak bersamaan tanpa berdesakan",
      "Mudah disesuaikan dengan posisi ventilasi jendela rumah"
    ],
    bestRoomSize: "Sangat fleksibel untuk luas dapur 2.5x2.5 meter hingga 4x3 meter.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
  },
  "letter-u": {
    title: "Kitchen Set Letter U Sukabumi",
    badge: "Kapasitas Penyimpanan Terbesar",
    description: "Mengelilingi tiga sisi dinding untuk menyediakan kapasitas laci dan ambalan penyimpanan paling maksimal bagi keluarga yang aktif memasak.",
    advantages: [
      "Panjang meja kerja (countertop) sangat luas untuk persiapan bahan",
      "Semua peralatan dapat disimpan tersembunyi di balik pintu kabinet",
      "Zona memasak, mencuci, dan persiapan bahan terpisah tegas",
      "Privasi area masak terlindungi dari pandangan ruang tamu"
    ],
    bestRoomSize: "Disarankan untuk dapur khusus dengan lebar ruangan minimal 3.0 meter.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  straight: {
    title: "Kitchen Set Straight / Single Line Sukabumi",
    badge: "Solusi Dapur Lorong",
    description: "Konfigurasi satu garis lurus sepanjang dinding, solusi paling hemat tempat dan efisien untuk dapur lorong atau menyatu dengan area makan.",
    advantages: [
      "Membutuhkan luas lantai paling sedikit",
      "Biaya produksi paling ekonomis",
      "Instalasi pipa air dan gas berada pada satu dinding yang sama",
      "Sirkulasi lalu lalang tidak terhalang sama sekali"
    ],
    bestRoomSize: "Sangat ideal untuk dinding panjang 2.0m - 3.5m di rumah tipe 36 atau kos eksklusif.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
  },
  island: {
    title: "Kitchen Set dengan Meja Island Sukabumi",
    badge: "Kemewahan & Sosialisasi",
    description: "Menambahkan meja tengah mandiri (kitchen island) yang berfungsi ganda sebagai meja bar santap cepat, tempat memotong, dan lemari penyimpanan bawah.",
    advantages: [
      "Menjadi titik pusat perhatian (centerpiece) interior rumah",
      "Memungkinkan interaksi santai dengan tamu atau anak sambil memasak",
      "Tambahan stop kontak tanam pop-up untuk blender atau laptop",
      "Meningkatkan nilai estetika dan harga jual properti Anda"
    ],
    bestRoomSize: "Membutuhkan jarak bebas keliling minimal 90cm di sekitar meja island.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ style: string }> }): Promise<Metadata> {
  const { style } = await params;
  const data = STYLE_INFO[style];
  if (!data) return { title: "Kitchen Set Sukabumi" };
  return {
    title: `${data.title} | KitchenSetSukabumi.id`,
    description: `${data.description} Plywood 18mm, HPL Taco, survey lokasi gratis di Sukabumi.`,
  };
}

export default async function KitchenSetStylePage({ params }: { params: Promise<{ style: string }> }) {
  const { style } = await params;
  const data = STYLE_INFO[style];

  if (!data) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => {
    if (style === "letter-l") return p.layout === "letter_l";
    if (style === "letter-u") return p.layout === "letter_u";
    if (style === "straight") return p.layout === "straight";
    if (style === "island") return p.layout === "island";
    if (style === "minimalis") return p.style === "minimalis" || p.style === "japandi";
    if (style === "modern") return p.style === "modern";
    return true;
  });

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb
          items={[
            { name: "Kitchen Set", href: "/kitchen-set" },
            { name: data.title },
          ]}
        />

        {/* Hero Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="accent">{data.badge}</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-editorial-900 leading-tight">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base text-editorial-700 leading-relaxed">
              {data.description}
            </p>

            <div className="p-4 rounded-xl bg-editorial-50 border border-editorial-200 text-xs text-editorial-800">
              <span className="font-semibold text-editorial-900">Rekomendasi Ruangan: </span>
              {data.bestRoomSize}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/konsultasi">
                <Button variant="primary" size="md">
                  Konsultasi Desain {data.title}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/estimator">
                <Button variant="outline" size="md">
                  Hitung Estimasi Biaya
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl p-8 border border-editorial-200 space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-editorial-900">
            Keunggulan Konsep {data.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {data.advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-editorial-700">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Projects for this style */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-editorial-900">
            Proyek Nyata Terkait
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(relatedProjects.length > 0 ? relatedProjects : PROJECTS_DATA.slice(0, 3)).map((p) => (
              <Card key={p.id} className="border border-editorial-200">
                <div className="relative aspect-[16/11]">
                  <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-accent">{p.location}</span>
                  <h3 className="font-serif text-sm font-bold text-editorial-900 line-clamp-1">{p.title}</h3>
                  <p className="text-xs text-editorial-600 line-clamp-2">{p.summary}</p>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="text-xs font-semibold text-accent hover:underline pt-2 inline-flex items-center gap-1"
                  >
                    Lihat Studi Kasus &rarr;
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 text-center space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            Punya Ukuran atau Kondisi Dapur yang Mirip?
          </h3>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-lg mx-auto">
            Konsultasikan secara gratis bersama desainer kami. Kami siap survey langsung ke rumah Anda di Sukabumi.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppLink({
                customMessage: `Halo Kitchen Set Sukabumi, saya tertarik dengan konsep ${data.title}. Apakah bisa survey dan ukur ke lokasi saya?`,
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="md">
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
