import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ARTICLES_DATA } from "@/data/articles";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock, Calendar, User, ArrowRight, Share2, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Inspirasi Dapur Sukabumi" };

  return {
    title: `${article.title} | KitchenSetSukabumi.id`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = ARTICLES_DATA.filter((a) => a.slug !== article.slug);

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb
          items={[
            { name: "Inspirasi", href: "/inspirasi" },
            { name: article.title },
          ]}
        />

        {/* Article Container */}
        <article className="bg-white rounded-2xl p-6 sm:p-12 border border-editorial-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <Badge variant="accent">{article.category}</Badge>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-editorial-900 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-editorial-500 pt-2 border-b border-editorial-100 pb-4">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-accent" />
                {article.author}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {article.publishedAt}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Cover */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-editorial-700 leading-relaxed space-y-4 pt-4">
            {article.content.split("\n\n").map((para, i) => {
              if (para.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-serif text-lg sm:text-xl font-bold text-editorial-900 pt-3">
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              if (para.startsWith("- ") || para.startsWith("1. ")) {
                return (
                  <div key={i} className="pl-4 border-l-2 border-accent/40 my-2 space-y-1">
                    {para.split("\n").map((line, j) => (
                      <p key={j} className="text-xs text-editorial-800">
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>

          {/* Call to action inside article */}
          <div className="mt-8 p-6 rounded-xl bg-editorial-50 border border-editorial-200 space-y-3">
            <h4 className="font-serif text-base font-bold text-editorial-900">
              Butuh Pendapat Ahli Terkait Ruang Dapur Anda di Sukabumi?
            </h4>
            <p className="text-xs text-editorial-600">
              Tim Kitchen Set Sukabumi siap membantu Anda memilih material terbaik dan merancang layout 3D yang sesuai dengan budget keluarga Anda.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/konsultasi">
                <Button variant="primary" size="sm">
                  Konsultasikan Dapur Saya
                </Button>
              </Link>
              <Link href="/estimator">
                <Button variant="outline" size="sm">
                  Hitung Estimasi Biaya
                </Button>
              </Link>
            </div>
          </div>
        </article>

        {/* Other articles */}
        {otherArticles.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="font-serif text-xl font-bold text-editorial-900">
              Artikel Edukasi Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherArticles.map((oa) => (
                <Link
                  key={oa.slug}
                  href={`/inspirasi/${oa.slug}`}
                  className="p-4 rounded-xl bg-white border border-editorial-200 hover:border-accent transition-colors block space-y-1"
                >
                  <span className="text-[10px] font-bold text-accent uppercase">{oa.category}</span>
                  <h4 className="font-serif text-sm font-bold text-editorial-900 line-clamp-1">{oa.title}</h4>
                  <p className="text-xs text-editorial-500 line-clamp-2">{oa.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
