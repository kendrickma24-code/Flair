"use client";

import { FlairLogo } from "./flair-logo";

function FlightCard({
  name,
  handle,
  date,
  origin,
  destination,
  flight,
  duration,
  initial,
}: {
  name: string;
  handle: string;
  date: string;
  origin: string;
  destination: string;
  flight: string;
  duration: string;
  initial: string;
}) {
  return (
    <div className="bg-[var(--background-card)] rounded-xl p-2.5 mb-2 border border-[var(--border)]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full bg-[#534AB7] flex items-center justify-center text-[10px] font-bold text-white shrink-0">
          {initial}
        </div>
        <div>
          <div className="text-[10px] font-semibold text-white">{name}</div>
          <div className="text-[8px] text-[var(--muted)]">{handle} · {date}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="font-[family-name:var(--font-syne)] text-xl font-extrabold text-white tracking-tight leading-none">
          {origin}
        </div>
        <div className="w-4 h-4 bg-[var(--accent-blue-dim)] rounded-full flex items-center justify-center text-[8px] text-[var(--accent-blue)]">
          {"✈"}
        </div>
        <div className="font-[family-name:var(--font-syne)] text-xl font-extrabold text-white tracking-tight leading-none">
          {destination}
        </div>
      </div>
      <div className="text-[8px] text-[var(--muted)]">
        {flight} · {duration}
      </div>
    </div>
  );
}

export function PhoneMockups() {
  return (
    <div className="animate-fade-up flex justify-center items-start gap-5 px-8 pb-24 relative z-10 [animation-delay:0.4s]">
      {/* Main Phone */}
      <div className="w-[210px] bg-[#09101C] rounded-[38px] p-2.5 border border-[rgba(255,255,255,0.1)] shadow-[0_50px_100px_rgba(0,0,0,0.7)] animate-float">
        <div className="rounded-[30px] overflow-hidden h-[430px] bg-[var(--background)]">
          <div className="p-4 pb-3">
            {/* Status bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <FlairLogo size={14} id="g2" />
                <span className="font-[family-name:var(--font-syne)] font-extrabold text-[13px] text-white">
                  Flair
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-6 h-6 bg-[var(--background-card)] rounded-full border border-[var(--border)] flex items-center justify-center text-[10px] text-[var(--muted)]">
                  {"⌕"}
                </div>
                <div className="w-6 h-6 bg-[var(--background-card)] rounded-full border border-[var(--border)] flex items-center justify-center text-[10px] text-[var(--muted)]">
                  {"✉"}
                </div>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex gap-1.5 mb-3 overflow-hidden">
              <div className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[var(--accent-blue-dim)] border border-[var(--accent-blue)] text-[var(--accent-blue)] whitespace-nowrap">
                All
              </div>
              <div className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[var(--background-card)] border border-[var(--border)] text-[var(--muted)] whitespace-nowrap">
                Upcoming
              </div>
              <div className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[var(--background-card)] border border-[var(--border)] text-[var(--muted)] whitespace-nowrap">
                Live
              </div>
              <div className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[var(--background-card)] border border-[var(--border)] text-[var(--muted)] whitespace-nowrap">
                Past
              </div>
            </div>

            {/* Section label */}
            <div className="text-[8px] font-semibold text-[var(--muted-dim)] tracking-widest uppercase mb-2">
              Past Flights
            </div>

            {/* Flight cards */}
            <FlightCard
              name="Kendrick Ma"
              handle="@kendrickma"
              date="5d ago"
              origin="CVG"
              destination="DEN"
              flight="UA 479 · 18-04-2026"
              duration="3h 9m"
              initial="K"
            />
            <FlightCard
              name="Kendrick Ma"
              handle="@kendrickma"
              date="Apr 15"
              origin="HNL"
              destination="SEA"
              flight="AS 267 · 13-04-2026"
              duration="5h 54m"
              initial="K"
            />
          </div>
        </div>
      </div>

      {/* Secondary Phone (hidden on mobile) */}
      <div className="hidden md:block w-[210px] bg-[#09101C] rounded-[38px] p-2.5 border border-[rgba(255,255,255,0.1)] shadow-[0_50px_100px_rgba(0,0,0,0.7)] animate-float mt-10 opacity-65 [animation-delay:1.5s]">
        <div className="rounded-[30px] overflow-hidden h-[430px] bg-[var(--background)]">
          <div className="p-4 pb-3">
            <div className="font-[family-name:var(--font-syne)] text-base font-extrabold text-white mb-0.5">
              Discover
            </div>
            <div className="text-[9px] text-[var(--muted)] mb-3">
              Where people are flying
            </div>

            {/* Map placeholder */}
            <div className="bg-[#0D1422] rounded-lg h-[105px] mb-3 border border-[var(--border)] relative overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(74,158,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,248,0.04) 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <span className="text-[9px] text-[var(--muted-dim)] relative z-10">
                {"🌍"} Live map
              </span>
            </div>

            {/* Trending routes */}
            <div className="text-[8px] font-semibold text-[var(--muted-dim)] tracking-widest uppercase mb-2">
              Trending Routes · this week
            </div>
            <div className="bg-[var(--background-card)] rounded-lg p-2.5 mb-2 border border-[var(--border)]">
              <div className="text-[7px] font-bold text-[var(--accent-blue)] bg-[var(--accent-blue-dim)] rounded px-1.5 py-0.5 inline-block mb-1">
                #1
              </div>
              <div className="font-[family-name:var(--font-syne)] text-[11px] font-bold text-white mb-0.5">
                {"CVG → DEN"}
              </div>
              <div className="text-[7px] text-[var(--muted)]">
                {"Cincinnati Northern · ✈ 1 flight"}
              </div>
            </div>

            {/* Popular destinations */}
            <div className="text-[8px] font-semibold text-[var(--muted-dim)] tracking-widest uppercase mb-2 mt-2">
              Popular Destinations · now
            </div>
            <div className="bg-[var(--background-card)] rounded-lg p-2.5 border border-[var(--border)]">
              <div className="text-[7px] font-bold text-[var(--accent-blue)] bg-[var(--accent-blue-dim)] rounded px-1.5 py-0.5 inline-block mb-1">
                #1
              </div>
              <div className="font-[family-name:var(--font-syne)] text-[11px] font-bold text-white mb-0.5">
                DEN — Denver
              </div>
              <div className="text-[7px] text-[var(--muted)]">
                {"👥"} 1 traveler
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
