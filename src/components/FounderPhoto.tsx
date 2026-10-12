import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Drop the photo at public/images/faith-idowu.jpg (or .jpeg/.png/.webp). Until then a placeholder shows.
export function FounderPhoto({ className = "" }: { className?: string }) {
  const file = ["jpg", "jpeg", "png", "webp"]
    .map((e) => `faith-idowu.${e}`)
    .find((f) => fs.existsSync(path.join(process.cwd(), "public/images", f)));

  if (file) {
    return (
      <Image src={`/images/${file}`} alt="Faith Idowu, CEO and Founder of TuraCare" width={800} height={1000}
        className={`aspect-[4/5] w-full rounded-3xl object-cover ${className}`} />
    );
  }
  return (
    <div role="img" aria-label="Founder photo placeholder"
      className={`flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-gable text-6xl font-bold text-cream ${className}`}>
      FI
    </div>
  );
}
