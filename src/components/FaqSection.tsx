"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { FAQS } from "@/data/siteData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="relative py-24 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] border-t border-sky-200/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/20">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Healthcare Marketing Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto">
            Clear, straightforward answers about how we manage ads, generate qualified patient leads, and grow healthcare practices.
          </p>

          {/* Quick Search with Shaded Styling */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600" />
            <input
              type="text"
              placeholder="Search healthcare marketing questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/95 border-2 border-sky-300 text-sm text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-sky-600 shadow-md shadow-sky-900/5 transition-all"
            />
          </div>
        </div>

        {/* FAQs Accordion with Shaded Blue & Contrast Cards */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "moving-border-card p-[1.5px] shadow-xl shadow-sky-900/10"
                    : "border-2 border-sky-200/90 hover:border-sky-400 bg-gradient-to-br from-white via-[#f4f8fe] to-[#e6f0fa] shadow-sm"
                }`}
              >
                <div
                  className={`rounded-[14px] transition-colors ${
                    isOpen
                      ? "bg-gradient-to-br from-[#0c142b] via-[#091024] to-[#050814] text-white"
                      : "bg-transparent text-slate-900"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold shrink-0 px-2.5 py-1 rounded-md ${
                          isOpen
                            ? "bg-sky-500/20 text-cyan-300 border border-sky-400/30"
                            : "bg-sky-100 text-sky-800 border border-sky-200"
                        }`}
                      >
                        Q{idx + 1}.
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight ${
                          isOpen ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cyan-300" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm sm:text-base leading-relaxed border-t border-slate-800 mt-1">
                      <p className="pl-10 text-slate-200 font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="pl-10 mt-4 flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-900/60 text-cyan-300 border border-sky-500/30">
                          {faq.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          Verified Practice Protocol
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-white border-2 border-sky-200 text-slate-600">
            No matching questions found for "{searchQuery}". Reach out to our healthcare marketing strategists directly!
          </div>
        )}
      </div>
    </section>
  );
}
