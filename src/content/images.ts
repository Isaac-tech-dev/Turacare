// Every image on the site lives here, so swapping one is a one-line change.
//
// Mockups: exported from the TuraCare Brand Guidelines (slides 34 to 37), stored in /public/images/mockups.
// Stock: free for commercial use under the Unsplash and Pexels licences. No attribution is required,
// but credits are kept here in case the client wants to show them. Served from the providers' CDNs
// through next/image (see remotePatterns in next.config.mjs). To self-host instead, download each file
// into /public/images/stock and change `src` to the local path.

export type SiteImage = { src: string; alt: string; credit?: string; /** shows the concept badge on the image */ concept?: boolean };

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2400&q=80`;
const pexels = (path: string) => `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&w=2400`;

// CONCEPT LABEL: the packaging mockups show claims that are still being confirmed
// (biodegradability, certification) and a retail shelf. `concept: true` makes <Photo> badge them
// automatically. Remove the flag only once the claims on the box are substantiated and it is on sale.
export const conceptLabel = "Packaging concept · Not yet in stores";

export const mockups = {
  shelf: { src: "/images/mockups/mockup-shelf.jpg", alt: "Concept mockup of Tura EarthPant boxes on a supermarket shelf", concept: true },
  bedroom: { src: "/images/mockups/mockup-bedroom.jpg", alt: "A woman stretching on her bed in the morning, beside a concept Tura EarthPant box on the nightstand", concept: true },
  tshirt: { src: "/images/mockups/mockup-tshirt.jpg", alt: "A smiling woman wearing headphones and a green TuraCare T-shirt" },
  tote: { src: "/images/mockups/mockup-tote.jpg", alt: "A woman sitting at a table with a green TuraCare tote bag over her shoulder" },
} satisfies Record<string, SiteImage>;

export const stock = {
  // Bamboo
  bambooWild: { src: unsplash("photo-1532920161727-344adb090f7f"), alt: "Tall bamboo growing in the wild", credit: "CHUTTERSNAP on Unsplash" },
  bambooGrove: { src: unsplash("photo-1583642037383-861ac716c3f0"), alt: "A green bamboo grove in daylight", credit: "enkuu smile on Unsplash" },
  bambooPath: { src: unsplash("photo-1772196118210-3e982cf79c1e"), alt: "A stone path through a dense bamboo forest", credit: "Tobias Reich on Unsplash" },
  bambooMacro: { src: pexels("5311127/pexels-photo-5311127.jpeg"), alt: "Close-up of a green bamboo stalk", credit: "Sunshine Design on Pexels" },
  bambooDense: { src: pexels("37331249/pexels-photo-37331249.jpeg"), alt: "A dense bamboo grove with tall stalks and green leaves", credit: "Rafael Barros on Pexels" },
  // Green leaves
  leavesSoft: { src: pexels("34282117/pexels-photo-34282117.png"), alt: "Green leaves in soft sunlight", credit: "浪 郭 on Pexels" },
  leavesBright: { src: pexels("37507631/pexels-photo-37507631/free-photo-of-vibrant-green-leaves-in-sunlight.jpeg"), alt: "Bright green leaves in sunlight", credit: "YumeSofii on Pexels" },
  fern: { src: pexels("1334149/pexels-photo-1334149.jpeg"), alt: "Close-up of dark green fern leaves", credit: "Irina Iriser on Pexels" },
  // Natural fibre textures
  wovenWhite: { src: unsplash("photo-1615799998603-7c6270a45196"), alt: "", credit: "Kiwihug on Unsplash" },
  fabricBeige: { src: unsplash("photo-1764437835706-ba9d63250bd2"), alt: "", credit: "Logan Voss on Unsplash" },
  wovenBrown: { src: unsplash("photo-1613931931994-398c3835983b"), alt: "", credit: "Jan Kopřiva on Unsplash" },
  coconutHusk: { src: unsplash("photo-1767380009565-52c573e16288"), alt: "Brown coconut husk fibres woven together", credit: "Rajesh Rajput on Unsplash" },
  // African landscapes
  angolaRoad: { src: pexels("33052904/pexels-photo-33052904.jpeg"), alt: "Aerial view of a road through the green landscape of Dundo, Angola", credit: "Heibby Cris Marvel on Pexels" },
  baobabSunset: { src: pexels("15404534/pexels-photo-15404534.jpeg"), alt: "Baobab trees silhouetted against a warm sunset in Angola", credit: "TUBARONES PHOTOGRAPHY on Pexels" },
  savanna: { src: unsplash("photo-1535940360221-641a69c43bac"), alt: "Acacia trees across a golden savanna under a clear sky", credit: "David Clode on Unsplash" },
  greenHills: { src: unsplash("photo-1779925768918-4e842ed04f3c"), alt: "Sun rays over green hills with small huts", credit: "Lesly Derksen on Unsplash" },
} satisfies Record<string, SiteImage>;
