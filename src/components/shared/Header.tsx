"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { contact } from "@/config/site";
import { Menu, X, ArrowUpRight, MessageCircle, Calendar } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface NavItem {
  name: string;
  href: string;
  sectionId?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", sectionId: "hero" },
  { name: "Tentang Kami", href: "/#about", sectionId: "about" },
  { name: "Layanan", href: "/#services", sectionId: "services" },
  { name: "Portfolio", href: "/#portfolio", sectionId: "portfolio" },
  { name: "Proses", href: "/#process", sectionId: "process" },
  { name: "Material", href: "/#materials", sectionId: "materials" },
  { name: "FAQ", href: "/#faq", sectionId: "faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const navItems = NAV_ITEMS;

  const [activeNav, setActiveNav] = useState<string>("Home");
  const navRef = useRef<HTMLElement>(null);
  const isUserClickingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Calculate subtle architectural underline indicator position
  const updateIndicator = useCallback(() => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector<HTMLAnchorElement>(
      `[data-nav-name="${activeNav}"]`
    );

    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeNav]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicator]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Initial detection from pathname / hash
  useEffect(() => {
    setMobileMenuOpen(false);

    if (pathname === "/portfolio") {
      setActiveNav("Portfolio");
      return;
    }

    if (pathname === "/") {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        const matched = NAV_ITEMS.find((n) => n.sectionId === hash);
        if (matched) {
          setActiveNav(matched.name);
          return;
        }
      }
      setActiveNav("Home");
    } else {
      setActiveNav("");
    }
  }, [pathname]);

  // Cross-page anchor scrolling (e.g. from /portfolio to /#services)
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const timer = setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const headerOffset = 76;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: Math.max(0, elementPosition - headerOffset),
              behavior: "smooth",
            });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Header background shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy on homepage to highlight nav item dynamically
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScrollSpy = () => {
      if (isUserClickingRef.current) return;

      if (window.scrollY < 200) {
        setActiveNav("Home");
        return;
      }

      const sections = [
        { id: "faq", name: "FAQ" },
        { id: "materials", name: "Material" },
        { id: "process", name: "Proses" },
        { id: "portfolio", name: "Portfolio" },
        { id: "services", name: "Layanan" },
        { id: "about", name: "Tentang Kami" },
      ];

      const scrollPos = window.scrollY + 140;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            setActiveNav(sec.name);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Smooth scroll handler on nav click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setActiveNav(item.name);
    document.body.style.overflow = "";
    setMobileMenuOpen(false);

    isUserClickingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isUserClickingRef.current = false;
    }, 1000);

    if (pathname === "/") {
      if (item.href === "/" || item.sectionId === "hero") {
        e.preventDefault();
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        history.pushState(null, "", "/");
        return;
      }

      if (item.sectionId) {
        const el = document.getElementById(item.sectionId);
        if (el) {
          e.preventDefault();
          const headerOffset = 76;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = Math.max(0, elementPosition - headerOffset);

          requestAnimationFrame(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
          history.pushState(null, "", `#${item.sectionId}`);
        }
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 gpu-layer ${
          scrolled
            ? "glass-surface border-b border-[#DCD5CA]/70 shadow-ambient"
            : "bg-[#F4F1EA]/85 backdrop-blur-[12px] border-b border-[#DCD5CA]/40"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) =>
              handleNavClick(e, { name: "Home", href: "/", sectionId: "hero" })
            }
            className="flex items-center py-1 group shrink-0"
          >
            <div className="relative h-[38px] w-[148px] sm:h-[42px] sm:w-[162px]">
              <Image
                src="/logo.png"
                alt="KitchenSet Sukabumi"
                fill
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.015]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items (Point 25: 13–14px, 500 weight, gap 28px, subtle underline / darker text) */}
          <nav
            ref={navRef}
            className="relative hidden lg:flex items-center gap-7 py-2"
          >
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  data-nav-name={item.name}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative py-1 text-[13.5px] font-medium tracking-normal transition-colors duration-200 ${
                    isActive
                      ? "text-[#181715] font-semibold"
                      : "text-[#656159] hover:text-[#181715]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Subtle Architectural Underline Indicator */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 h-[2px] bg-[#181715] rounded-full transition-all duration-250 ease-out pointer-events-none"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />
          </nav>

          {/* Desktop Action CTAs with tactile micro-interactions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold text-[#181715] hover:text-[#8A6248] px-4 py-2.5 rounded-[10px] border border-[#DCD5CA] bg-[#FAF8F3] hover:bg-[#F4F1EA] transition-all tracking-normal active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Konsultasi</span>
            </a>

            <Link
              href="/jadwalkan-survei"
              className="inline-flex items-center justify-center h-[46px] px-5 rounded-[10px] bg-[#181715] hover:bg-[#8A6248] text-white text-[13px] font-semibold tracking-wide uppercase transition-all shadow-xs group active:scale-[0.97]"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Jadwalkan Survei</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-[#25D366] active:scale-90 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#181715] focus:outline-none active:scale-90 transition-transform"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReduced ? 0.1 : 0.2 }}
                onClick={() => {
                  document.body.style.overflow = "";
                  setMobileMenuOpen(false);
                }}
                className="lg:hidden fixed inset-0 top-[76px] bg-black/40 backdrop-blur-xs z-30"
              />

              {/* Drawer Container */}
              <motion.div
                key="mobile-drawer"
                id="mobile-navigation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden absolute top-[76px] inset-x-0 z-40 bg-[#FAF8F3] border-b border-[#DCD5CA] shadow-2xl px-5 py-5 space-y-4 max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain"
              >
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeNav === item.name;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`text-sm font-medium tracking-normal px-4 py-3 rounded-[10px] flex items-center justify-between transition-all active:scale-[0.98] ${
                          isActive
                            ? "bg-[#FAF8F3] text-[#181715] font-semibold border border-[#DCD5CA]"
                            : "text-[#656159] hover:bg-[#FAF8F3] hover:text-[#181715]"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8A6248]" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <Link
                    href="/jadwalkan-survei"
                    onClick={() => {
                      document.body.style.overflow = "";
                      setMobileMenuOpen(false);
                    }}
                    className="w-full h-[48px] rounded-[10px] bg-[#181715] text-white flex items-center justify-center text-xs font-semibold tracking-wider uppercase active:scale-[0.98] transition-transform shadow-xs"
                  >
                    Jadwalkan Survei
                  </Link>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      document.body.style.overflow = "";
                      setMobileMenuOpen(false);
                    }}
                    className="w-full h-[48px] rounded-[10px] border border-[#DCD5CA] bg-[#FAF8F3] text-[#181715] flex items-center justify-center text-xs font-semibold tracking-normal active:scale-[0.98] transition-transform shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                    Konsultasi WhatsApp ({contact.whatsappDisplay})
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Sticky Mobile Bottom Bar (Point 16) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-[8px] border-t border-[#DCD5CA] p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center gap-2 shadow-float print:hidden">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-[48px] rounded-[10px] bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs font-bold shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          WhatsApp
        </a>
        <Link
          href="/jadwalkan-survei"
          className="flex-1 h-[48px] rounded-[10px] bg-[#181715] hover:bg-[#8A6248] text-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-xs"
        >
          <Calendar className="w-4 h-4" />
          Jadwalkan Survei
        </Link>
      </div>
    </>
  );
}
