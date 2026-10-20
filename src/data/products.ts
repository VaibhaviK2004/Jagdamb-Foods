export interface Product {
  id: string;
  name: string;
  category: "Fruit Bars" | "Mango Candy" | "Imli Candy" | "Boom Candy" | "Bulk Products";
  price: number;
  originalPrice: number;
  unit: string;
  description: string;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  badge?: string;
  weight: string;
  inStock: boolean;
  flavors?: string[];
}

export const PRODUCTS: Product[] = [
  // --- FRUIT BARS ---
  {
    id: "fb-1",
    name: "100gm Kaccha Mango Fruit Bar",
    category: "Fruit Bars",
    price: 50,
    originalPrice: 70,
    unit: "Pack",
    weight: "100gm",
    description: "A tangy and sweet fruit bar crafted from real raw green mangoes, providing an authentic mouthwatering Indian chatpata experience.",
    image: "https://jagdamb-foods.vercel.app/images/fruite.jpeg",
    featured: true,
    bestseller: true,
    badge: "Bestseller",
    inStock: true,
    flavors: ["Raw Mango", "Chatpata Masala"]
  },
  {
    id: "fb-2",
    name: "500gm Imli Fruit Bar Burfi",
    category: "Fruit Bars",
    price: 250,
    originalPrice: 320,
    unit: "Pack",
    weight: "500gm",
    description: "Delicious traditional tamarind burfi with a rich, chewy toffee-like texture made with pure natural tamarind pulp.",
    image: "https://jagdamb-foods.vercel.app/images/imli3.jpg",
    featured: true,
    bestseller: true,
    badge: "Heritage Favorite",
    inStock: true,
    flavors: ["Pure Tamarind", "Jaggery & Spices"]
  },
  {
    id: "fb-3",
    name: "500gm Green Mango Fruit Cube Bar",
    category: "Fruit Bars",
    price: 250,
    originalPrice: 320,
    unit: "Pack",
    weight: "500gm",
    description: "Sweet and sour green mango fruit cubes, neatly cut into bite-sized mouthwatering squares for guilt-free fruit snacking.",
    image: "https://jagdamb-foods.vercel.app/images/burfi1.jpeg",
    featured: true,
    badge: "Chef Special",
    inStock: true,
    flavors: ["Green Kairi", "Spiced Mango"]
  },
  {
    id: "fb-4",
    name: "100gm Mango Fruit Cube Bar",
    category: "Fruit Bars",
    price: 50,
    originalPrice: 65,
    unit: "Pack",
    weight: "100gm",
    description: "Bite-sized mango fruit cubes, perfect for a quick on-the-go snack filled with sunshine-sweet ripe Alphonso flavor.",
    image: "https://jagdamb-foods.vercel.app/images/mangobar2.jpg",
    featured: true,
    badge: "Popular",
    inStock: true,
    flavors: ["Ripe Mango"]
  },
  {
    id: "fb-5",
    name: "100gm Imli Fruit Bar",
    category: "Fruit Bars",
    price: 50,
    originalPrice: 65,
    unit: "Pack",
    weight: "100gm",
    description: "A classic tamarind fruit bar for a quick, tangy treat reviving nostalgic childhood memories in every bite.",
    image: "https://jagdamb-foods.vercel.app/images/imli5.jpg",
    featured: false,
    badge: "Authentic",
    inStock: true,
    flavors: ["Khatta Meetha Tamarind"]
  },

  // --- IMLI CANDIES ---
  {
    id: "ic-1",
    name: "250gm Imli Candy",
    category: "Imli Candy",
    price: 120,
    originalPrice: 160,
    unit: "Jar",
    weight: "250gm",
    description: "Classic rectangular tamarind candies bursting with real khatta-meetha tamarind pulp and digestive spices in a hygienic reusable jar.",
    image: "https://jagdamb-foods.vercel.app/images/imlicandy.jpeg",
    featured: true,
    bestseller: true,
    badge: "Sale",
    inStock: true,
    flavors: ["Tamarind", "Hing", "Black Salt"]
  },
  {
    id: "ic-2",
    name: "500gm Dobull Imli Candy",
    category: "Imli Candy",
    price: 90,
    originalPrice: 120,
    unit: "Pack",
    weight: "500gm",
    description: "A generous value pack of our intensely popular Dobull Imli Candies, loved by all age groups across India.",
    image: "https://jagdamb-foods.vercel.app/images/dimli.png",
    featured: true,
    badge: "Family Pack",
    inStock: true,
    flavors: ["Double Tangy Imli"]
  },

  // --- MANGO CANDIES & TOFFEES ---
  {
    id: "mc-1",
    name: "250gm Kachha Mango Candy",
    category: "Mango Candy",
    price: 120,
    originalPrice: 150,
    unit: "Box",
    weight: "250gm",
    description: "Tangy raw mango flavored candies, packed in a decorative festive box, offering a zesty punch that tickles your tastebuds.",
    image: "https://jagdamb-foods.vercel.app/images/kacchamango.jpeg",
    featured: true,
    bestseller: true,
    badge: "Sale",
    inStock: true,
    flavors: ["Kaccha Aam", "Mint Zing"]
  },
  {
    id: "mc-2",
    name: "250gm Mango Toffee Candy",
    category: "Mango Candy",
    price: 120,
    originalPrice: 160,
    unit: "Jar",
    weight: "250gm",
    description: "Creamy, rich mango toffees that melt in your mouth, infused with authentic ripe mango sweetness and dairy richness.",
    image: "https://jagdamb-foods.vercel.app/images/mango.jpeg",
    featured: true,
    badge: "Creamy Delight",
    inStock: true,
    flavors: ["Alphonso Cream", "Sweet Mango"]
  },

  // --- BOOM CANDIES ---
  {
    id: "bc-1",
    name: "500gm Dobull Kairi Boom Candy",
    category: "Boom Candy",
    price: 100,
    originalPrice: 140,
    unit: "Pack",
    weight: "500gm",
    description: "Explosive raw mango flavor in a fun candy form with a masala filling that bursts upon biting.",
    image: "https://jagdamb-foods.vercel.app/images/kairi.jpg",
    featured: false,
    bestseller: true,
    badge: "Flavour Boom",
    inStock: true,
    flavors: ["Kairi Masala", "Chili Zing"]
  },
  {
    id: "bc-2",
    name: "100gm Double Imli Boom Candy",
    category: "Boom Candy",
    price: 30,
    originalPrice: 40,
    unit: "Pack",
    weight: "100gm",
    description: "A pocket-sized pack of our explosive tamarind candy, perfect for carrying anywhere.",
    image: "https://jagdamb-foods.vercel.app/images/imli4.jpg",
    featured: false,
    badge: "Pocket Pack",
    inStock: true,
    flavors: ["Double Imli Blast"]
  },
  {
    id: "bc-3",
    name: "100gm Chammach Imli Boom Candy",
    category: "Boom Candy",
    price: 15,
    originalPrice: 20,
    unit: "Pack",
    weight: "100gm",
    description: "Fun nostalgic spoon-shaped tamarind boom candy that brings authentic childhood nostalgia straight to your palate.",
    image: "https://jagdamb-foods.vercel.app/images/imli6.jpg",
    featured: false,
    badge: "Nostalgic",
    inStock: true,
    flavors: ["Chammach Imli"]
  },
  {
    id: "bc-4",
    name: "100gm Imli Boom Candy",
    category: "Boom Candy",
    price: 50,
    originalPrice: 65,
    unit: "Pack",
    weight: "100gm",
    description: "The original Imli Boom candy experience with a rich core of spiced tamarind syrup.",
    image: "https://jagdamb-foods.vercel.app/images/imli2.jpg",
    featured: false,
    badge: "Original",
    inStock: true,
    flavors: ["Original Tamarind"]
  },
  {
    id: "bc-5",
    name: "500gm Jet Imli Boom Candy",
    category: "Boom Candy",
    price: 90,
    originalPrice: 120,
    unit: "Pack",
    weight: "500gm",
    description: "Fast-acting flavor explosion with Jet Imli Boom Candy, formulated for maximum tanginess.",
    image: "https://jagdamb-foods.vercel.app/images/imli7.jpg",
    featured: false,
    badge: "Jet Blast",
    inStock: true,
    flavors: ["Jet Tamarind"]
  },
  {
    id: "bc-6",
    name: "500gm Jet Guava Boom Candy",
    category: "Boom Candy",
    price: 120,
    originalPrice: 150,
    unit: "Pack",
    weight: "500gm",
    description: "Spicy pink guava candy with a center burst of red chili and Himalayan rock salt.",
    image: "https://jagdamb-foods.vercel.app/gauva.jpg",
    featured: false,
    badge: "Exotic",
    inStock: true,
    flavors: ["Pink Guava", "Chili Salt"]
  },
  {
    id: "bc-7",
    name: "500gm Strawberry Boom Candy",
    category: "Boom Candy",
    price: 120,
    originalPrice: 150,
    unit: "Pack",
    weight: "500gm",
    description: "Fresh strawberry candy with a sweet and juicy fruit center that children and adults adore.",
    image: "https://jagdamb-foods.vercel.app/strawberry.jpeg",
    featured: false,
    badge: "Fruity",
    inStock: true,
    flavors: ["Mahabaleshwar Strawberry"]
  },

  // --- BULK & WHOLESALE SUPPLY ---
  {
    id: "bulk-1",
    name: "32Kg Mango Fruit Bar Box",
    category: "Bulk Products",
    price: 5760,
    originalPrice: 7200,
    unit: "Box",
    weight: "32 Kg",
    description: "Industrial wholesale supply of our premium delicious mango fruit bars. Ideal for distributors, retail chains, and confectionery vendors.",
    image: "https://jagdamb-foods.vercel.app/images/mangoammpapad.jpg",
    featured: true,
    badge: "Wholesale",
    inStock: true,
    flavors: ["Alphonso Mango Bulk"]
  },
  {
    id: "bulk-2",
    name: "32Kg Imli Fruit Bar Box",
    category: "Bulk Products",
    price: 5760,
    originalPrice: 7200,
    unit: "Box",
    weight: "32 Kg",
    description: "Bulk supply of our signature tangy tamarind fruit bars directly from the factory line at wholesale margins.",
    image: "https://jagdamb-foods.vercel.app/images/imli.jpg",
    featured: false,
    badge: "Wholesale",
    inStock: true,
    flavors: ["Pure Tamarind Bulk"]
  },
  {
    id: "bulk-3",
    name: "32Kg Kaccha Mango Fruit Bar Box",
    category: "Bulk Products",
    price: 5760,
    originalPrice: 7200,
    unit: "Box",
    weight: "32 Kg",
    description: "Commercial 32kg supply of our special raw mango fruit bars, sealed for long freshness and high shelf stability.",
    image: "https://jagdamb-foods.vercel.app/images/mangobar1.jpg",
    featured: false,
    badge: "Wholesale",
    inStock: true,
    flavors: ["Raw Mango Bulk"]
  },
  {
    id: "bulk-4",
    name: "32Kg Mango Aam Papad Box",
    category: "Bulk Products",
    price: 5760,
    originalPrice: 7200,
    unit: "Box",
    weight: "32 Kg",
    description: "Traditional sun-dried and dehydrated Mango Aam Papad sheets and bars available in 32kg commercial cartons.",
    image: "https://jagdamb-foods.vercel.app/images/mangobar.jpg",
    featured: false,
    badge: "Traditional Bulk",
    inStock: true,
    flavors: ["Aam Papad Bulk"]
  },
  {
    id: "bulk-5",
    name: "Box of 30 Jar Imli Candy",
    category: "Bulk Products",
    price: 1950,
    originalPrice: 2400,
    unit: "Box",
    weight: "30 Jars",
    description: "Master carton containing 30 ready-to-sell counter jars of our classic Imli Candy for retail kirana stores and supermarkets.",
    image: "https://jagdamb-foods.vercel.app/images/imlicandy.jpeg",
    featured: false,
    badge: "Retail Pack",
    inStock: true,
    flavors: ["Imli Candy Jars"]
  },
  {
    id: "bulk-6",
    name: "Box of 30 Jar Mango Candy",
    category: "Bulk Products",
    price: 1950,
    originalPrice: 2400,
    unit: "Box",
    weight: "30 Jars",
    description: "Master retail carton containing 30 shelf-ready display jars of our sweet raw Mango Candy.",
    image: "https://jagdamb-foods.vercel.app/images/kacchamango.jpeg",
    featured: false,
    badge: "Retail Pack",
    inStock: true,
    flavors: ["Mango Candy Jars"]
  },
  {
    id: "bulk-7",
    name: "Box Mango Toffee Candy",
    category: "Bulk Products",
    price: 1950,
    originalPrice: 2400,
    unit: "Box",
    weight: "30 Jars",
    description: "Bulk master carton of creamy rich mango toffee candy jars, ready for wholesale and supermarket merchandising.",
    image: "https://jagdamb-foods.vercel.app/images/label.jpeg",
    featured: false,
    badge: "Retail Pack",
    inStock: true,
    flavors: ["Mango Toffees"]
  },
  {
    id: "bulk-8",
    name: "Box Chammach Imli Boom Candy",
    category: "Bulk Products",
    price: 1500,
    originalPrice: 1900,
    unit: "Box",
    weight: "Bulk Carton",
    description: "Bulk wholesale box of our wildly popular spoon-shaped tamarind candies, high turnover fast-selling item.",
    image: "https://jagdamb-foods.vercel.app/images/imlicandy.jpeg",
    featured: false,
    badge: "High Margin",
    inStock: true,
    flavors: ["Chammach Imli"]
  },
  {
    id: "bulk-9",
    name: "Double Kairi Boom Candy Box",
    category: "Bulk Products",
    price: 1950,
    originalPrice: 2400,
    unit: "Box",
    weight: "Bulk Carton",
    description: "A large carton of explosive raw mango boom candies packaged for distributors and confectionery stockists.",
    image: "https://jagdamb-foods.vercel.app/images/kairi.jpg",
    featured: false,
    badge: "Bestselling Box",
    inStock: true,
    flavors: ["Kairi Boom"]
  }
];

export const COMPANY_INFO = {
  name: "Jagdamb Foods",
  tagline: "Sweetness with Traditional Taste",
  subTagline: "Manufacturer of Premium Fruit Bar Toffees & Traditional Indian Candies",
  founder: "P.G. Kumbhar",
  founderTitle: "CEO & Founder",
  phone: "+91 9309489012",
  phoneDisplay: "+91 93094 89012",
  email: "jagdambfoods03@gmail.com",
  whatsappNumber: "919309489012",
  whatsappUrl: "https://wa.me/919309489012",
  address: {
    company: "Jagdamb Foods Pvt. Ltd.",
    area: "Peth Naka, Ishwarpur",
    district: "Sangli / Kolhapur Highway",
    state: "Maharashtra",
    pincode: "415409",
    country: "India"
  },
  mission: "To deliver unparalleled taste and quality in every confectionery treat, spreading joy, authentic nostalgia, and sweet moments across every Indian household.",
  vision: "To be India's most beloved and trusted traditional confectionery brand, innovating with modern hygiene while honoring age-old authentic recipes.",
  commitment: "Maintaining the strictest standards of food hygiene, sourcing farm-fresh fruits, and ensuring zero compromise on taste or customer satisfaction.",
  stats: [
    { label: "Years of Heritage", value: "20+" },
    { label: "States Reached", value: "24+" },
    { label: "Partner Distributors", value: "1,500+" },
    { label: "Happy Customers", value: "5M+" },
  ]
};

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    role: "Distributor",
    location: "North India (Delhi & UP)",
    rating: 5,
    avatar: "R",
    quote: "Jagdamb Foods has been our trusted partner for years. Their commitment to quality, shelf-stability, and timely delivery is unparalleled. Our retail stockists always ask for repeat orders of their Imli & Mango fruit bars!"
  },
  {
    id: "test-2",
    name: "Priya Sharma",
    role: "Retail Chain Partner",
    location: "Mumbai, Maharashtra",
    rating: 5,
    avatar: "P",
    quote: "The authentic, unadulterated taste and attractive packaging of Jagdamb Foods' candies make them a top seller in our gourmet confectionery aisles. Customers love the nostalgic touch!"
  },
  {
    id: "test-3",
    name: "Amit Singh",
    role: "Wholesale Merchant",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    avatar: "A",
    quote: "A phenomenal range of confectionery, especially the 500g Burfi and 32kg bulk packs. Consistent batch quality and genuine trade profit margins. We are proud to be associated with Jagdamb Foods."
  }
];

export const TIMELINE = [
  {
    year: "Inception",
    title: "The Beginning",
    description: "Jagdamb Foods was founded with a small artisanal unit in Peth Naka, Ishwarpur by CEO P.G. Kumbhar, aiming to bring authentic Indian fruit confectionery to a wider audience."
  },
  {
    year: "Growth",
    title: "First Expansion",
    description: "Expanded our manufacturing facility to meet skyrocketing demand and launched our flagship line of traditional tamarind and mango fruit bars."
  },
  {
    year: "Technology",
    title: "Modernization",
    description: "Invested in automated climate-controlled dehydration machinery and adopted multi-layer food-grade packaging to seal in freshness, aroma, and flavor."
  },
  {
    year: "Scale",
    title: "Nationwide Reach",
    description: "Established a robust wholesale and dealer distribution network spanning Maharashtra, Gujarat, Karnataka, Delhi, and beyond."
  },
  {
    year: "Legacy",
    title: "A Trusted Brand",
    description: "Continuing our proud heritage of taste, quality, and hygiene, loved by millions of children and adults nationwide."
  }
];

export const TRUST_PILLARS = [
  {
    title: "100% Real Fruit Pulp",
    desc: "Crafted using real Alphonso mango, raw kacchi keri, and natural tamarind without artificial pulp substitutes."
  },
  {
    title: "Authentic Heritage Taste",
    desc: "Time-tested recipes handed down through generations, capturing the true nostalgic flavors of Indian childhood."
  },
  {
    title: "Hygienic Modern Facility",
    desc: "Manufactured in a clean, state-of-the-art facility adhering to rigorous food safety, FSSAI guidelines, and hygiene protocols."
  },
  {
    title: "Direct Factory Wholesale",
    desc: "Unbeatable wholesale bulk rates, carton pricing, and seamless logistics support for B2B dealers and distributors."
  }
];
