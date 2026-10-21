import { campaign } from "@/lib/campaign"

export const AnnouncementBar = () => (
  <div className="bg-gold-400 px-4 py-2 text-center text-xs font-semibold tracking-wide text-navy-950 sm:text-sm">
    Black Friday Anjos · até {campaign.maxDiscount}% OFF · {campaign.maxInstallments}x sem juros · até {campaign.endsLabel}
  </div>
)
