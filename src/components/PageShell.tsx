import { Photo } from "@/components/Photo";
import type { SiteImage } from "@/content/images";

type Props = {
  title: string;
  intro?: string;
  children?: React.ReactNode;
  /** Optional banner image shown above the title */
  image?: SiteImage;
  imageCaption?: string;
  imagePosition?: string;
};

export function PageShell({ title, intro, children, image, imageCaption, imagePosition }: Props) {
  return (
    <>
      {image && (
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <Photo image={image} aspect="aspect-[16/9] sm:aspect-[21/8]" sizes="(min-width: 1152px) 1104px, 100vw"
            caption={imageCaption} position={imagePosition} priority />
        </div>
      )}
      <section className={`mx-auto max-w-3xl px-6 ${image ? "pb-16 pt-10" : "py-16"}`}>
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-prose text-lg leading-relaxed">{intro}</p>}
        <div className="mt-10 space-y-6 leading-relaxed">{children}</div>
      </section>
    </>
  );
}
