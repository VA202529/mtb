import { site } from "@/lib/site";

export function BookingWidget() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <iframe
        src={site.bookingWidget}
        title="Online afspraak maken — Michaela's Beauty Bar"
        className="h-[820px] w-full"
        loading="lazy"
      />
    </div>
  );
}
