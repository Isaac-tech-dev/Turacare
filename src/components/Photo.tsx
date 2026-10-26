import Image from "next/image";
import { conceptLabel, type SiteImage } from "@/content/images";

type Props = {
  image: SiteImage;
  /** Tailwind aspect class for the frame, e.g. "aspect-[4/3]" */
  aspect?: string;
  sizes?: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  /** object-position, e.g. "50% 30%" */
  position?: string;
};

export function Photo({ image, aspect = "aspect-[4/3]", sizes = "(min-width: 1024px) 50vw, 100vw", caption, priority, className = "", position }: Props) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-3xl bg-gable/10 ${aspect}`}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority}
          className="object-cover" style={position ? { objectPosition: position } : undefined} />
        {image.concept && (
          <span className="absolute left-3 top-3 rounded-full bg-gable/90 px-3 py-1 text-xs font-bold text-cream shadow">{conceptLabel}</span>
        )}
      </div>
      {caption && <figcaption className="mt-2 text-xs font-semibold opacity-80">{caption}</figcaption>}
    </figure>
  );
}

/** Full-bleed decorative texture behind a section. Put it inside a `relative isolate` parent. */
export function Texture({ image, opacity = "opacity-25" }: { image: SiteImage; opacity?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${opacity}`}>
      <Image src={image.src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}
