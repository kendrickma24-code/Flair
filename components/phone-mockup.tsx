import { StarLogo } from "./star-logo"

export function PhoneMockupFeed() {
  return (
    <div className="w-[210px] bg-[#09101C] rounded-[38px] p-2.5 border border-white/10 shadow-2xl animate-float">
      <div className="rounded-[30px] overflow-hidden h-[430px] bg-background">
        <div className="p-4 px-3.5">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-1.5 font-display font-extrabold text-sm text-foreground">
              <StarLogo size={14} id="phone-star-1" />
              Flair
            </div>
            <div className="flex gap-1.5">
              <div className="w-[26px] h-[26px] bg-card rounded-full border border-border flex items-center justify-center text-[10px] text-muted">
                ⌕
              </div>
              <div className="w-[26px] h-[26px] bg-card rounded-full border border-border flex items-center justify-center text-[10px] text-muted">
                ✉
              </div>
            </div>
          </div>

          {/* Pills */}
          <div className="flex gap-1.5 mb-3 overflow-hidden">
            <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-blue-dim border border-blue text-blue whitespace-nowrap">
              All
            </span>
            <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-card border border-border text-muted whitespace-nowrap">
              Upcoming
            </span>
            <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-card border border-border text-muted whitespace-nowrap">
              Live
            </span>
            <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-card border border-border text-muted whitespace-nowrap">
              Past
            </span>
          </div>

          {/* Label */}
          <div className="text-[8px] font-semibold text-muted-foreground tracking-widest uppercase mb-2">
            Past Flights
          </div>

          {/* Flight cards */}
          <FlightCard
            initials="K"
            name="Kendrick Ma"
            handle="@kendrickma · 5d ago"
            from="CVG"
            to="DEN"
            meta="UA 479 · 18-04-2026 · 3h 9m"
          />
          <FlightCard
            initials="K"
            name="Kendrick Ma"
            handle="@kendrickma · Apr 15"
            from="HNL"
            to="SEA"
            meta="AS 267 · 13-04-2026 · 5h 54m"
          />
        </div>
      </div>
    </div>
  )
}

function FlightCard({
  initials,
  name,
  handle,
  from,
  to,
  meta,
}: {
  initials: string
  name: string
  handle: string
  from: string
  to: string
  meta: string
}) {
  return (
    <div className="bg-card rounded-xl p-2.5 px-3 mb-2 border border-border">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full bg-[#534AB7] flex items-center justify-center text-[8px] font-bold text-foreground shrink-0">
          {initials}
        </div>
        <div>
          <div className="text-[10px] font-semibold text-foreground">{name}</div>
          <div className="text-[8px] text-muted">{handle}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-display text-xl font-extrabold text-foreground tracking-tight leading-none">
          {from}
        </span>
        <div className="w-[18px] h-[18px] bg-blue-dim rounded-full flex items-center justify-center text-[8px] text-blue">
          ✈
        </div>
        <span className="font-display text-xl font-extrabold text-foreground tracking-tight leading-none">
          {to}
        </span>
      </div>
      <div className="text-[8px] text-muted">{meta}</div>
    </div>
  )
}

export function PhoneMockupDiscover() {
  return (
    <div className="w-[210px] bg-[#09101C] rounded-[38px] p-2.5 border border-white/10 shadow-2xl animate-float mt-10 opacity-65 hidden md:block" style={{ animationDelay: "1.5s" }}>
      <div className="rounded-[30px] overflow-hidden h-[430px] bg-background">
        <div className="p-4 px-3.5">
          <h2 className="font-display text-base font-extrabold text-foreground mb-0.5">
            Discover
          </h2>
          <p className="text-[9px] text-muted mb-3">Where people are flying</p>

          {/* Map placeholder */}
          <div className="bg-[#0D1422] rounded-xl h-[105px] mb-3 border border-border relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(74,158,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,248,0.04) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
            <span className="text-[9px] text-muted-foreground relative z-10">
              Live map
            </span>
          </div>

          {/* Trending routes */}
          <div className="text-[8px] font-semibold text-muted-foreground tracking-widest uppercase mb-2">
            Trending Routes · this week
          </div>
          <div className="bg-card rounded-xl p-2.5 px-3 mb-2 border border-border">
            <div className="text-[7px] font-bold text-blue bg-blue-dim rounded px-1.5 py-0.5 inline-block mb-1.5">
              #1
            </div>
            <div className="font-display text-xs font-bold text-foreground mb-0.5">
              CVG → DEN
            </div>
            <div className="text-[7px] text-muted">
              Cincinnati Northern · ✈ 1 flight
            </div>
          </div>

          {/* Popular destinations */}
          <div className="text-[8px] font-semibold text-muted-foreground tracking-widest uppercase mb-2 mt-2">
            Popular Destinations · now
          </div>
          <div className="bg-card rounded-xl p-2.5 px-3 border border-border">
            <div className="text-[7px] font-bold text-blue bg-blue-dim rounded px-1.5 py-0.5 inline-block mb-1.5">
              #1
            </div>
            <div className="font-display text-xs font-bold text-foreground mb-0.5">
              DEN — Denver
            </div>
            <div className="text-[7px] text-muted">1 traveler</div>
          </div>
        </div>
      </div>
    </div>
  )
}
