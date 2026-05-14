import { InfiniteSlider } from "./ui/infinite-slider";
import { cn } from "../lib/utils";

const logos = [
  {
    src: "https://www.codemonks.xyz/marquee/Smartbike.png",
    alt: "Smartbike Logo",
    className: "brightness-0 scale-70 -mx-6 ",
  },
  {
    src: "https://www.codemonks.xyz/marquee/StrategyConnect.svg",
    alt: "StrategyConnect Logo",
    className: "scale-110",
  },
  {
    src: "https://github.com/Shivamsinghmer/Ibagency/blob/main/public/marquee/TokWealth.png?raw=true",
    alt: "TokWealth Logo",
    className: "scale-290 px-15",
  },
  {
    src: "https://www.codemonks.xyz/marquee/Magnetiq.svg",
    alt: "Magnetiq Logo",
    className: "scale-60 -mx-25 brightness-90",
  },
  {
    src: "https://cdn.prod.website-files.com/603e8cef693c1f49f3e84e58/61e6e2b4b2ed6e3de3f1a075_walnut-logo-pink.svg",
    alt: "Walnut Insurance Logo",
    className: "ml-7 scale-110",
  },
  {
    src: "https://www.peoplestrong.com/wp-content/uploads/2025/12/ps-logo.svg",
    alt: "PeopleStrong Logo",
  },
  {
    src: "https://aiorders.io/lovable-uploads/aio-logo.png",
    alt: "AIOrders Logo",
  },
  {
    src: "https://static-asset.inc42.com/logo/grownout.png",
    alt: "Grownout Logo",
    className: "h-[80%] w-auto object-center scale-290 px-10",
  },
];

export function LogoCloud({ className }) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-white/75 bg-[rgba(255,255,255,0.86)] px-3 py-2 shadow-[0_12px_30px_rgba(79,70,229,0.14)] backdrop-blur-md md:px-6",
        className
      )}
    >
      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] h-16 md:h-15 overflow-hidden py-3">
        <InfiniteSlider gap={62} reverse speed={80} pauseOnHover>
        {logos.map((logo) => (
            <img
              alt={logo.alt}
              className={cn(
                "pointer-events-none h-full max-h-full w-auto !max-w-none select-none object-contain opacity-80",
                logo.className
              )}
              key={`logo-${logo.alt}`}
              loading="lazy"
              src={logo.src}
            />
        ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
