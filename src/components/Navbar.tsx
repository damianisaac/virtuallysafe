"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import ReportingTool from "@/components/ReportingTool";

const navItems = [
  {
    label: "Who We Serve",
    children: [
      { label: "Young People", href: "/young-people" },
      { label: "Parents", href: "/parent" },
      { label: "Educators", href: "/educators" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "Internet Safety Stakeholders Forum (ISSF)", href: "/issf" },
      { label: "Internet Safety School Club (ISSC)", href: "/issc" },
      { label: "Hacktivate", href: "/hacktivate" },
      { label: "Young African Internet Safety Fellows (YAISF)", href: "/young-fellows-program" },
      { label: "Awareness & Campaigns", href: "/awarenes-campaign" },
      { label: "Programs Report", href: "/programs-report" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "For Parents", href: "/parent-resources" },
      { label: "For Educators", href: "/educators-resources" },
      { label: "For Young People", href: "/young-people-resources" },
      { label: "General Resources", href: "/general-resources" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [reportOpen, setReportOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setOpenMenu(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerClass = scrolled ? "bg-[#00294B] shadow-lg" : "bg-transparent";

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClass}`}
      >
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setOpenMenu(null)}>
            <Image src="/VSlogo.png" alt="Virtually Safe" width={160} height={48} className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-base font-bold font-jakarta text-white/90 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 mt-px transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {openMenu === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[240px] z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-inter text-gray-700 hover:text-[#00294B] hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenMenu(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2 text-base font-bold font-jakarta text-white/90 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setReportOpen(true)}
              className="hidden lg:inline-flex items-center gap-2 bg-[#61CE70] text-[#00294B] font-bold text-sm font-jakarta px-5 py-2 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Get Help
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-[#00294B] flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
            <span className="text-[#61CE70] text-base font-extrabold font-jakarta">Menu</span>
            <button
              className="text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="Mobile navigation">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="mb-1">
                  <button
                    className="w-full flex justify-between items-center px-3 py-3 text-base font-bold font-jakarta text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-3 mt-1 border-l border-white/10 pl-3 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm font-inter text-white/60 hover:text-[#61CE70] rounded-md hover:bg-white/5 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block px-3 py-3 mb-1 text-base font-bold font-jakarta text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="px-4 py-5 border-t border-white/10 shrink-0">
            <button
              onClick={() => { setMobileOpen(false); setReportOpen(true); }}
              className="w-full flex items-center justify-center gap-2 bg-[#61CE70] text-[#00294B] font-bold font-jakarta text-sm px-5 py-3 rounded-full hover:bg-[#4db85b] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Get Help
            </button>
          </div>
        </div>
      </div>

      <ReportingTool open={reportOpen} onClose={() => setReportOpen(false)} />
    </>
  );
}
