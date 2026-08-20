(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Evigo/src/components/Container.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * ── ARCHITECTURE RULE ──────────────────────────────────────────────────────────
 * All page sections MUST wrap their content in <PageContainer> (or <Container>).
 * DO NOT add custom max-width or horizontal padding at the section level.
 *
 * This component is the SINGLE SOURCE OF TRUTH for:
 *   - max-width: 1280px
 *   - width: 100%
 *   - margin: 0 auto
 *   - horizontal padding: 24px (mobile: px-6) / 48px (desktop: md:px-12)
 * ──────────────────────────────────────────────────────────────────────────────
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/components/PageContainer.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Evigo/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ variant = "primary", className = "", ...props }) {
    const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-zinc-900 text-white hover:bg-zinc-800",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${base} ${variants[variant]} ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/Evigo/src/components/Button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Evigo/src/components/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ANIMATION_TRANSFORMS = {
    "fade-up": "translateY(VALpx)",
    "fade-down": "translateY(-VALpx)",
    "fade-left": "translateX(-VALpx)",
    "fade-right": "translateX(VALpx)",
    "zoom-in": "scale(0.92)",
    "fade": "none"
};
function ScrollReveal({ children, animation = "fade-up", delay = 0, duration = 700, distance = 40, threshold = 0.15, once = true, className = "", staggerChildren }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            // Check if user prefers reduced motion
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReduced) {
                setIsVisible(true);
                return;
            }
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) observer.disconnect();
                    } else if (!once) {
                        setIsVisible(false);
                    }
                }
            }["ScrollReveal.useEffect"], {
                threshold,
                rootMargin: "0px 0px -40px 0px"
            });
            observer.observe(el);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], [
        threshold,
        once
    ]);
    const hiddenTransform = ANIMATION_TRANSFORMS[animation].replace("VAL", String(distance));
    // Handle staggered children
    const staggerStyle = staggerChildren ? `
    .sr-stagger > * {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity ${duration}ms ease-out, transform ${duration}ms ease-out;
    }
    .sr-stagger.sr-visible > * {
      opacity: 1;
      transform: translateY(0);
    }
    ${Array.from({
        length: 20
    }, (_, i)=>`.sr-stagger.sr-visible > *:nth-child(${i + 1}) { transition-delay: ${delay + i * staggerChildren}ms; }`).join("\n")}
  ` : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            staggerChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: staggerStyle
            }, void 0, false, {
                fileName: "[project]/Evigo/src/components/ScrollReveal.tsx",
                lineNumber: 89,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: `${className} ${staggerChildren ? "sr-stagger" : ""} ${isVisible && staggerChildren ? "sr-visible" : ""}`,
                style: staggerChildren ? undefined : {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0) translateX(0) scale(1)" : hiddenTransform,
                    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
                    willChange: "opacity, transform"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/Evigo/src/components/ScrollReveal.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ScrollReveal, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Evigo/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIHAR_CITIES",
    ()=>BIHAR_CITIES,
    "CATEGORY_IMAGE",
    ()=>CATEGORY_IMAGE,
    "CATEGORY_TAGLINE",
    ()=>CATEGORY_TAGLINE,
    "EMPOWERMENT_IMAGES",
    ()=>EMPOWERMENT_IMAGES,
    "EVENT_VENUES",
    ()=>EVENT_VENUES,
    "HOTEL_PARTNERS",
    ()=>HOTEL_PARTNERS,
    "SERVICE_CATEGORIES",
    ()=>SERVICE_CATEGORIES,
    "TOURISM_DISTRICTS",
    ()=>TOURISM_DISTRICTS,
    "TOURISM_PLACES",
    ()=>TOURISM_PLACES,
    "TRUSTED_PARTNERS",
    ()=>TRUSTED_PARTNERS,
    "haversineKm",
    ()=>haversineKm,
    "resolveBiharCity",
    ()=>resolveBiharCity
]);
const SERVICE_CATEGORIES = [
    "Catering",
    "Photography",
    "DJ",
    "Mehendi & Makeup",
    "Restaurant"
];
const CATEGORY_TAGLINE = {
    Catering: "Buffet, snacks, and full-service menus",
    Photography: "Wedding shoots, candid moments, and reels",
    DJ: "Party-ready sound, lights, and vibes",
    "Mehendi & Makeup": "Bridal mehendi and makeover artists",
    Restaurant: "Verified hotels, banquets, and fine dining"
};
const CATEGORY_IMAGE = {
    Catering: "/catering_service_1777314249262.png",
    Photography: "/photography_service_1777314265964.png",
    DJ: "/dj_service_1777314281684.png",
    "Mehendi & Makeup": "/mehendi_service_1777314296728.png",
    Restaurant: "/partners/events/genx_brij/genx_brij_1.png"
};
const EMPOWERMENT_IMAGES = [
    {
        src: "/emp_mehendi_1777315417623.png",
        label: "Mehendi Artistry",
        sub: "Traditional artists sharing their craft",
        accent: "#f59e0b"
    },
    {
        src: "/emp_makeup_1777315436915.png",
        label: "Professional Makeover",
        sub: "Independent makeup experts",
        accent: "#06b6d4"
    },
    {
        src: "/emp_catering_1777315455487.png",
        label: "Catering Excellence",
        sub: "Women-led cooking teams",
        accent: "#8b5cf6"
    },
    {
        src: "/emp_photographer_1777315475083.png",
        label: "Event Photography",
        sub: "Capturing moments professionally",
        accent: "#ec4899"
    },
    {
        src: "/emp_cultural_1777315492625.png",
        label: "Madhubani Artists",
        sub: "Preserving cultural heritage",
        accent: "#10b981"
    }
];
const TRUSTED_PARTNERS = [
    {
        name: "Hotel Usha Nand Palace",
        location: "Jamui, Bihar",
        description: "Premium rooms & banquet — ideal for weddings and events.",
        image: "/partners/hotel_usha_nand_palace.png"
    },
    {
        name: "GenX Brij",
        location: "Jamui, Bihar",
        description: "Luxury stay with modern interiors and top-class amenities.",
        image: "/partners/events/genx_brij/genx_brij_1.png"
    },
    {
        name: "Hotel JP Grand",
        location: "Jamui, Bihar",
        description: "Elegant property with serene garden lounge and fine dining.",
        image: "/partners/events/jp_grand/jp_grand_1.png"
    },
    {
        name: "Hotel Nirmala Inn",
        location: "Jamui, Bihar",
        description: "A/C banquet hall, restaurant & conference facilities.",
        image: "/partners/events/nirmala_inn/nirmala_inn_1.png"
    }
];
const HOTEL_PARTNERS = [
    {
        id: "hotel-usha-nand-palace",
        name: "Hotel Usha Nand Palace",
        address: "Near Town Centre",
        city: "Jamui",
        districtBihar: "Jamui",
        lat: 24.9278,
        lng: 86.2265,
        category: "hotel",
        photos: [
            "/partners/events/usha_nand/usha_nand_1.png",
            "/partners/events/usha_nand/usha_nand_2.jpg",
            "/partners/events/usha_nand/usha_nand_3.jpg",
            "/partners/events/usha_nand/usha_nand_4.jpg",
            "/partners/events/usha_nand/usha_nand_5.jpg"
        ],
        phone: "+91 98765 00001",
        priceRange: "₹1,500–₹4,000/night",
        description: "Premium rooms & grand banquet — ideal for weddings, corporate events, and family functions."
    },
    {
        id: "genx-brij",
        name: "GenX Brij",
        address: "Main Road",
        city: "Jamui",
        districtBihar: "Jamui",
        lat: 24.9240,
        lng: 86.2210,
        category: "hotel",
        photos: [
            "/partners/events/genx_brij/genx_brij_1.png",
            "/partners/events/genx_brij/genx_brij_2.png",
            "/partners/events/genx_brij/genx_brij_3.png",
            "/partners/events/genx_brij/genx_brij_4.png",
            "/partners/events/genx_brij/genx_brij_5.png"
        ],
        phone: "+91 98765 00002",
        priceRange: "₹1,200–₹3,500/night",
        description: "Luxury stay with modern interiors, Punjabi Junction restaurant, and Bake & Chill café."
    },
    {
        id: "hotel-jp-grand",
        name: "Hotel JP Grand",
        address: "JP Grand Road",
        city: "Jamui",
        districtBihar: "Jamui",
        lat: 24.9310,
        lng: 86.2290,
        category: "hotel",
        photos: [
            "/partners/events/jp_grand/jp_grand_1.png",
            "/partners/events/jp_grand/jp_grand_2.png",
            "/partners/events/jp_grand/jp_grand_3.png",
            "/partners/events/jp_grand/jp_grand_4.png",
            "/partners/events/jp_grand/jp_grand_5.png"
        ],
        phone: "+91 98765 00003",
        priceRange: "₹1,000–₹3,000/night",
        description: "Elegant property with serene garden lounge, fine dining, and well-equipped banquet facilities."
    },
    {
        id: "hotel-nirmala-inn",
        name: "Hotel Nirmala Inn",
        address: "Station Road",
        city: "Jamui",
        districtBihar: "Jamui",
        lat: 24.9215,
        lng: 86.2230,
        category: "hotel",
        photos: [
            "/partners/events/nirmala_inn/nirmala_inn_1.png",
            "/partners/events/nirmala_inn/nirmala_inn_2.png",
            "/partners/events/nirmala_inn/nirmala_inn_3.png",
            "/partners/events/nirmala_inn/nirmala_inn_4.png",
            "/partners/events/nirmala_inn/nirmala_inn_5.png"
        ],
        phone: "+91 98765 00004",
        priceRange: "₹800–₹2,500/night",
        description: "Fully A/C banquet hall, multi-cuisine restaurant, family suites and conference facilities."
    }
];
const BIHAR_CITIES = [
    {
        name: "Jamui",
        lat: 24.9278,
        lng: 86.2265,
        aliases: [
            "jamui",
            "jamui bihar",
            "jamui town",
            "jamui station",
            "malaypur"
        ]
    },
    {
        name: "Patna",
        lat: 25.5941,
        lng: 85.1376,
        aliases: [
            "patna",
            "patna city",
            "pataliputra",
            "danapur"
        ]
    },
    {
        name: "Gaya",
        lat: 24.7955,
        lng: 85.0002,
        aliases: [
            "gaya",
            "gaya ji",
            "bodh gaya",
            "bodhgaya"
        ]
    },
    {
        name: "Muzaffarpur",
        lat: 26.1197,
        lng: 85.3910,
        aliases: [
            "muzaffarpur",
            "muz"
        ]
    },
    {
        name: "Bhagalpur",
        lat: 25.2425,
        lng: 86.9842,
        aliases: [
            "bhagalpur",
            "silk city"
        ]
    },
    {
        name: "Rajgir",
        lat: 25.0303,
        lng: 85.4182,
        aliases: [
            "rajgir",
            "rajgriha"
        ]
    },
    {
        name: "Nalanda",
        lat: 25.1359,
        lng: 85.4442,
        aliases: [
            "nalanda",
            "bihar sharif"
        ]
    },
    {
        name: "Vaishali",
        lat: 25.6870,
        lng: 85.1290,
        aliases: [
            "vaishali",
            "hajipur"
        ]
    },
    {
        name: "Bodh Gaya",
        lat: 24.6961,
        lng: 84.9911,
        aliases: [
            "bodhgaya",
            "bodh gaya"
        ]
    },
    {
        name: "Munger",
        lat: 25.3743,
        lng: 86.4730,
        aliases: [
            "munger",
            "monghyr",
            "jamalpur"
        ]
    },
    {
        name: "Begusarai",
        lat: 25.4182,
        lng: 86.1272,
        aliases: [
            "begusarai",
            "barauni"
        ]
    },
    {
        name: "Darbhanga",
        lat: 26.1542,
        lng: 85.8918,
        aliases: [
            "darbhanga",
            "mithila"
        ]
    },
    {
        name: "Sitamarhi",
        lat: 26.5936,
        lng: 85.4899,
        aliases: [
            "sitamarhi"
        ]
    },
    {
        name: "Motihari",
        lat: 26.6503,
        lng: 84.9183,
        aliases: [
            "motihari",
            "east champaran"
        ]
    },
    {
        name: "Samastipur",
        lat: 25.8614,
        lng: 85.7795,
        aliases: [
            "samastipur"
        ]
    },
    {
        name: "Purnia",
        lat: 25.7771,
        lng: 87.4753,
        aliases: [
            "purnia",
            "purnea"
        ]
    },
    {
        name: "Katihar",
        lat: 25.5541,
        lng: 87.5683,
        aliases: [
            "katihar"
        ]
    },
    {
        name: "Saharsa",
        lat: 25.8835,
        lng: 86.6006,
        aliases: [
            "saharsa"
        ]
    },
    {
        name: "Deoghar",
        lat: 24.4826,
        lng: 86.6974,
        aliases: [
            "deoghar",
            "baba dham"
        ]
    },
    {
        name: "Simultala",
        lat: 24.7115,
        lng: 86.5415,
        aliases: [
            "simultala",
            "simultala hill station"
        ]
    }
];
function resolveBiharCity(query) {
    if (!query) return null;
    const clean = query.trim().toLowerCase().replace(/[,.-]/g, " ").replace(/\s+/g, " ");
    // 1. Direct name match
    for (const city of BIHAR_CITIES){
        if (city.name.toLowerCase() === clean) return city;
    }
    // 2. Alias match
    for (const city of BIHAR_CITIES){
        if (city.aliases?.some((a)=>a === clean || clean.includes(a) || a.includes(clean))) {
            return city;
        }
    }
    // 3. Partial substring match
    for (const city of BIHAR_CITIES){
        if (clean.includes(city.name.toLowerCase()) || city.name.toLowerCase().includes(clean)) {
            return city;
        }
    }
    return null;
}
function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
const EVENT_VENUES = [
    {
        id: "usha-nand-palace",
        name: "Hotel Usha Nand Palace",
        location: "Jamui, Bihar",
        city: "Jamui",
        address: "Jamui, Bihar — Near Town Centre",
        phone: "+91 98765 00001",
        priceRange: "₹1,500–₹4,000/night",
        description: "Premium rooms & grand banquet — ideal for weddings, corporate events, and family functions.",
        images: [
            "/partners/events/usha_nand/usha_nand_1.png",
            "/partners/events/usha_nand/usha_nand_2.jpg",
            "/partners/events/usha_nand/usha_nand_3.jpg",
            "/partners/events/usha_nand/usha_nand_4.jpg",
            "/partners/events/usha_nand/usha_nand_5.jpg"
        ],
        googleRating: 4.7,
        reviewCount: 57,
        safetyFeatures: [
            "CCTV Surveillance",
            "Fire Safety"
        ],
        services: [
            "Room Booking",
            "Banquet Hall",
            "Restaurant & Dining",
            "Conference Room"
        ]
    },
    {
        id: "genx-brij",
        name: "GenX Brij",
        location: "Jamui, Bihar",
        city: "Jamui",
        address: "Jamui, Bihar — Main Road",
        phone: "+91 98765 00002",
        priceRange: "₹1,200–₹3,500/night",
        description: "Luxury stay with modern interiors, Punjabi Junction restaurant, and Bake & Chill café.",
        images: [
            "/partners/events/genx_brij/genx_brij_1.png",
            "/partners/events/genx_brij/genx_brij_2.png",
            "/partners/events/genx_brij/genx_brij_3.png",
            "/partners/events/genx_brij/genx_brij_4.png",
            "/partners/events/genx_brij/genx_brij_5.png"
        ],
        googleRating: 4.5,
        reviewCount: 42,
        safetyFeatures: [
            "CCTV Surveillance",
            "Fire Safety",
            "24/7 Security"
        ],
        services: [
            "Room Booking",
            "Banquet Hall Booking",
            "Restaurant & Café",
            "Event Catering"
        ]
    },
    {
        id: "hotel-jp-grand",
        name: "Hotel JP Grand",
        location: "Jamui, Bihar",
        city: "Jamui",
        address: "Jamui, Bihar — JP Grand Road",
        phone: "+91 98765 00003",
        priceRange: "₹1,000–₹3,000/night",
        description: "Elegant property with serene garden lounge, fine dining, and well-equipped banquet facilities.",
        images: [
            "/partners/events/jp_grand/jp_grand_1.png",
            "/partners/events/jp_grand/jp_grand_2.png",
            "/partners/events/jp_grand/jp_grand_3.png",
            "/partners/events/jp_grand/jp_grand_4.png",
            "/partners/events/jp_grand/jp_grand_5.png"
        ],
        googleRating: 4.6,
        reviewCount: 38,
        safetyFeatures: [
            "CCTV Surveillance",
            "Fire Safety",
            "24/7 Security"
        ],
        services: [
            "Room Booking",
            "Banquet Hall Booking",
            "Fine Dining",
            "Outdoor Catering"
        ]
    },
    {
        id: "hotel-nirmala-inn",
        name: "Hotel Nirmala Inn",
        location: "Jamui, Bihar",
        city: "Jamui",
        address: "Jamui, Bihar — Station Road",
        phone: "+91 98765 00004",
        priceRange: "₹800–₹2,500/night",
        description: "Fully A/C banquet hall, multi-cuisine restaurant, family suites and conference facilities.",
        images: [
            "/partners/events/nirmala_inn/nirmala_inn_1.png",
            "/partners/events/nirmala_inn/nirmala_inn_2.png",
            "/partners/events/nirmala_inn/nirmala_inn_3.png",
            "/partners/events/nirmala_inn/nirmala_inn_4.png",
            "/partners/events/nirmala_inn/nirmala_inn_5.png"
        ],
        googleRating: 4.4,
        reviewCount: 29,
        safetyFeatures: [
            "CCTV Surveillance",
            "Fire Safety",
            "24/7 Security"
        ],
        services: [
            "Room Booking",
            "Banquet Hall Booking",
            "Restaurant",
            "Conference Room",
            "Event Catering"
        ]
    }
];
const TOURISM_DISTRICTS = [
    {
        id: "Jamui",
        name: "Jamui",
        available: true,
        count: 8,
        tagline: "Hills, Jain Pilgrimage & Ancient Heritage"
    },
    {
        id: "Patna",
        name: "Patna",
        available: false,
        count: 0,
        tagline: "Ancient Pataliputra & Ganges Ghats"
    },
    {
        id: "Gaya",
        name: "Gaya & Bodh Gaya",
        available: false,
        count: 0,
        tagline: "Mahabodhi Temple & Spiritual Trails"
    },
    {
        id: "Rajgir",
        name: "Nalanda & Rajgir",
        available: false,
        count: 0,
        tagline: "Ancient University & Hot Springs"
    },
    {
        id: "Vaishali",
        name: "Vaishali",
        available: false,
        count: 0,
        tagline: "Ashokan Pillar & Buddhist Stupa"
    },
    {
        id: "Bhagalpur",
        name: "Bhagalpur",
        available: false,
        count: 0,
        tagline: "Silk City & Dolphin Sanctuary"
    },
    {
        id: "Munger",
        name: "Munger",
        available: false,
        count: 0,
        tagline: "Historic Fort & Yoga Capital"
    },
    {
        id: "Darbhanga",
        name: "Darbhanga",
        available: false,
        count: 0,
        tagline: "Royal Palaces & Mithila Culture"
    }
];
const TOURISM_PLACES = [
    {
        id: "simultala-hill-station",
        name: "Simultala Hill Station",
        district: "Jamui",
        category: "Nature / Hill station",
        description: "Scenic hill station known for pleasant climate, greenery, and as a meditation site (Tapobhumi) linked to Sri Ramakrishna Paramahamsa",
        image: "/tourism/jamui/simultala.png",
        // Verified: Simultala Railway Station area, Jamui district
        lat: 24.71407,
        lng: 86.54201,
        featured: true
    },
    {
        id: "kshatriya-kund-gram",
        name: "Kshatriya Kund Gram",
        district: "Jamui",
        category: "Religious / Jain pilgrimage",
        description: "Traditionally regarded as the birthplace of Lord Mahavira — major Jain pilgrimage site nestled in lush green valley",
        image: "/tourism/jamui/kund_gram.png",
        // Verified: ~20km west of Jamui HQ, near Lachhuar in Sikandra block
        // Source: Bihar govt records — 24°55'N, 85°50'E
        lat: 24.9167,
        lng: 85.8333,
        featured: true
    },
    {
        id: "lachhuar-jain-mandir",
        name: "Lachhuar Jain Mandir",
        district: "Jamui",
        category: "Religious / Jain temple",
        description: "Large Jain temple and dharamshala, key pilgrim stop near Kshatriya Kund Gram offering peaceful spiritual retreats",
        image: "/tourism/jamui/lachhuar.png",
        // Verified: Wikipedia coords — 24° 54′ 52.34″ N, 86° 0′ 52″ E
        lat: 24.9145,
        lng: 86.0144,
        featured: true
    },
    {
        id: "kali-mandir-malaypur",
        name: "Kali Mandir, Malaypur",
        district: "Jamui",
        category: "Religious / Temple",
        description: "Temple of Goddess Kali near Jamui Railway Station, known for its grand annual festival and spiritual devotion",
        image: "/tourism/jamui/kali_mandir.png",
        // Verified: Malaypur area near Jamui town; will use name search fallback for accuracy
        lat: 24.9265,
        lng: 86.2241
    },
    {
        id: "minto-tower-gidhaur",
        name: "Minto Tower (Gidhaur)",
        district: "Jamui",
        category: "Historical / Monument",
        description: "Colonial-era tower built by the Maharaja of Gidhaur in 1909 to commemorate Lord Minto's visit, marking the centre of Gidhaur town",
        image: "/tourism/jamui/minto_tower.png",
        // Verified: Gidhaur (Patsanda) town centre — Wikipedia: 24°51′29″N 86°18′01″E
        lat: 24.8581,
        lng: 86.3003,
        featured: true
    },
    {
        id: "giddheshwar-mandir",
        name: "Giddheshwar/Gidheshwar Mandir",
        district: "Jamui",
        category: "Religious / Shiva temple",
        description: "Ancient Shiva temple in Gidhaur situated amidst picturesque rocky hills, near Minto Tower",
        image: "/tourism/jamui/giddheshwar.png",
        // Verified: Kasbagidhaur/Harni area, Gidhaur — Plus Code R58H+2RM area
        lat: 24.8579,
        lng: 86.3004
    },
    {
        id: "patneshwar-mandir",
        name: "Patneshwar Mandir",
        district: "Jamui",
        category: "Religious / Temple",
        description: "Medieval-era Shiva temple known for its ancient stone architecture and religious reverence, situated atop Patneshwar Hill near the Kiul River",
        image: "/tourism/jamui/patneshwar.png",
        // Verified: Mallehpur (Malaypur), Jamui — temple on hill near Kiul River
        lat: 24.9208,
        lng: 86.1754
    },
    {
        id: "nagi-dam-bhimbandh",
        name: "Nagi Dam / Bhimbandh Wildlife Sanctuary",
        district: "Jamui",
        category: "Nature / Wildlife",
        description: "Renowned bird sanctuary and reservoir area surrounded by dense forests, popular for birdwatching and eco-tourism",
        image: "/tourism/jamui/nagi_dam.png",
        // Verified: Nagi Dam Bird Sanctuary — Wikipedia: 24°49′03″N 86°24′00″E
        lat: 24.8175,
        lng: 86.4000,
        featured: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Evigo/src/components/NearbyHotelsV2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NearbyHotelsV2",
    ()=>NearbyHotelsV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * NearbyHotelsV2 — Zero-cost "Find Hotels Near You"
 *
 * Cost: ₹0. No API keys needed.
 *
 * How it works:
 *   1. User shares GPS OR searches any Bihar city (text search or dropdown).
 *   2. Instant local resolution using resolveBiharCity / Haversine distance.
 *   3. Displays verified partners within radius on Leaflet map + card grid.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/lib/constants.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// LeafletMap dynamically imported with ssr:false to prevent Next.js SSR window errors
const LeafletMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Evigo/src/components/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Evigo/src/components/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full rounded-2xl animate-pulse",
            style: {
                height: 320,
                background: "rgba(255,255,255,0.05)"
            }
        }, void 0, false, {
            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = LeafletMap;
const RADIUS_OPTIONS = [
    {
        label: "5 km",
        value: 5
    },
    {
        label: "8 km",
        value: 8
    },
    {
        label: "15 km",
        value: 15
    },
    {
        label: "30 km",
        value: 30
    }
];
const CATEGORY_EMOJI = {
    hotel: "🏨",
    restaurant: "🍽️",
    homestay: "🏡",
    resort: "🏖️"
};
function PartnerCard({ partner, onViewPhotos }) {
    const thumb = partner.photos[0];
    const emoji = CATEGORY_EMOJI[partner.category] || "🏨";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col",
        style: {
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                style: {
                    height: 160
                },
                children: [
                    thumb ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: thumb,
                        alt: partner.name,
                        fill: true,
                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
                        sizes: "(max-width:640px) 100vw, 300px"
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center text-5xl",
                        style: {
                            background: "rgba(139,92,246,0.08)"
                        },
                        children: emoji
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[11px] font-bold text-white",
                        style: {
                            background: "rgba(6,182,212,0.9)",
                            backdropFilter: "blur(6px)"
                        },
                        children: partner.distanceKm < 1 ? "< 1 km" : `${partner.distanceKm.toFixed(1)} km`
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white",
                        style: {
                            background: "rgba(139,92,246,0.9)",
                            backdropFilter: "blur(6px)"
                        },
                        children: "✓ Evigo Partner"
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-1.5 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-black text-white text-sm leading-tight line-clamp-1",
                        children: [
                            emoji,
                            " ",
                            partner.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400 font-medium line-clamp-1",
                        children: [
                            "📍 ",
                            partner.address,
                            ", ",
                            partner.city
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    partner.priceRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold text-cyan-400 mt-0.5",
                        children: partner.priceRange
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    partner.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-gray-400 leading-relaxed line-clamp-2 mt-1",
                        children: partner.description
                    }, void 0, false, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-auto pt-3",
                        children: [
                            partner.photos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onViewPhotos(partner),
                                className: "flex-1 py-2 px-3 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 cursor-pointer border-none",
                                style: {
                                    background: "linear-gradient(135deg,#8b5cf6,#06b6d4)"
                                },
                                children: [
                                    "🖼️ Photos (",
                                    partner.photos.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            partner.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${partner.phone}`,
                                className: "flex-1 py-2 px-3 rounded-xl text-xs font-bold text-gray-200 text-center no-underline transition-colors hover:bg-white/10",
                                style: {
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    background: "rgba(255,255,255,0.05)"
                                },
                                children: "📞 Call"
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c1 = PartnerCard;
function PhotoLightbox({ partner, onClose }) {
    _s();
    const [photoIdx, setPhotoIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const photos = partner.photos;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center p-4",
        style: {
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(8px)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-2xl rounded-2xl overflow-hidden",
            style: {
                border: "1px solid rgba(255,255,255,0.15)",
                background: "#09090b"
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5 py-4 border-b",
                    style: {
                        borderColor: "rgba(255,255,255,0.1)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-black text-base",
                                    children: [
                                        CATEGORY_EMOJI[partner.category] || "🏨",
                                        " ",
                                        partner.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-xs mt-0.5",
                                    children: [
                                        partner.address,
                                        ", ",
                                        partner.city
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition border-none cursor-pointer",
                            style: {
                                background: "rgba(255,255,255,0.05)"
                            },
                            "aria-label": "Close photo viewer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        height: 380
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: photos[photoIdx],
                            alt: `${partner.name} — photo ${photoIdx + 1}`,
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width:768px) 100vw, 672px"
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        photos.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPhotoIdx((i)=>(i - 1 + photos.length) % photos.length),
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:bg-black/60 border-none cursor-pointer",
                                    style: {
                                        background: "rgba(0,0,0,0.5)"
                                    },
                                    children: "‹"
                                }, void 0, false, {
                                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPhotoIdx((i)=>(i + 1) % photos.length),
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:bg-black/60 border-none cursor-pointer",
                                    style: {
                                        background: "rgba(0,0,0,0.5)"
                                    },
                                    children: "›"
                                }, void 0, false, {
                                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        photos.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold text-white",
                            style: {
                                background: "rgba(0,0,0,0.6)",
                                backdropFilter: "blur(4px)"
                            },
                            children: [
                                photoIdx + 1,
                                " / ",
                                photos.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                photos.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 p-3 overflow-x-auto",
                    style: {
                        borderTop: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: photos.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPhotoIdx(i),
                            className: "relative shrink-0 rounded-lg overflow-hidden transition-all duration-200 border-none cursor-pointer p-0",
                            style: {
                                width: 64,
                                height: 48,
                                border: i === photoIdx ? "2px solid #8b5cf6" : "2px solid transparent"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: "",
                                fill: true,
                                className: "object-cover",
                                sizes: "64px"
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 247,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                            lineNumber: 237,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 py-3 text-center text-[11px] text-gray-500 border-t",
                    style: {
                        borderColor: "rgba(255,255,255,0.08)"
                    },
                    children: "✓ Evigo Verified Partner — verified photos from property"
                }, void 0, false, {
                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(PhotoLightbox, "fScLOpVPOPhHwBmedx10jy19Z0k=");
_c2 = PhotoLightbox;
function NearbyHotelsV2() {
    _s1();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [radiusKm, setRadiusKm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [searchMode, setSearchMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("city");
    const [cityInput, setCityInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Jamui");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [originCoords, setOriginCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lightboxPartner, setLightboxPartner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cachedGpsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Core search — pure client-side Haversine against HOTEL_PARTNERS
    const runSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NearbyHotelsV2.useCallback[runSearch]": (originLat, originLng, r, label)=>{
            setErrorMsg("");
            setOriginCoords({
                lat: originLat,
                lng: originLng,
                label
            });
            const matched = __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOTEL_PARTNERS"].map({
                "NearbyHotelsV2.useCallback[runSearch].matched": (p)=>({
                        ...p,
                        distanceKm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haversineKm"])(originLat, originLng, p.lat, p.lng)
                    })
            }["NearbyHotelsV2.useCallback[runSearch].matched"]).filter({
                "NearbyHotelsV2.useCallback[runSearch].matched": (p)=>p.distanceKm <= r
            }["NearbyHotelsV2.useCallback[runSearch].matched"]).sort({
                "NearbyHotelsV2.useCallback[runSearch].matched": (a, b)=>a.distanceKm - b.distanceKm
            }["NearbyHotelsV2.useCallback[runSearch].matched"]);
            setResults(matched);
            setStatus("success");
        }
    }["NearbyHotelsV2.useCallback[runSearch]"], []);
    // Execute search by text or city name
    const executeCitySearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NearbyHotelsV2.useCallback[executeCitySearch]": (query, r = radiusKm)=>{
            if (!query.trim()) {
                setErrorMsg("Please enter a city or district name.");
                setStatus("error");
                return;
            }
            const cityMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveBiharCity"])(query);
            if (cityMatch) {
                runSearch(cityMatch.lat, cityMatch.lng, r, cityMatch.name);
            } else {
                setErrorMsg(`Could not find "${query}" in our Bihar directory. Try searching for Jamui, Patna, Gaya, Rajgir, or Munger.`);
                setStatus("error");
            }
        }
    }["NearbyHotelsV2.useCallback[executeCitySearch]"], [
        radiusKm,
        runSearch
    ]);
    const handleUseLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NearbyHotelsV2.useCallback[handleUseLocation]": ()=>{
            if (cachedGpsRef.current) {
                runSearch(cachedGpsRef.current.lat, cachedGpsRef.current.lng, radiusKm, "Current Location");
                return;
            }
            if (!navigator.geolocation) {
                setErrorMsg("Geolocation is not supported by your browser. Please search by city name.");
                setStatus("error");
                return;
            }
            setStatus("requesting");
            navigator.geolocation.getCurrentPosition({
                "NearbyHotelsV2.useCallback[handleUseLocation]": (pos)=>{
                    cachedGpsRef.current = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    };
                    runSearch(pos.coords.latitude, pos.coords.longitude, radiusKm, "Current Location");
                }
            }["NearbyHotelsV2.useCallback[handleUseLocation]"], {
                "NearbyHotelsV2.useCallback[handleUseLocation]": (err)=>{
                    if (err.code === err.PERMISSION_DENIED) {
                        setStatus("denied");
                    } else {
                        setErrorMsg(err.message || "Failed to retrieve GPS location.");
                        setStatus("error");
                    }
                }
            }["NearbyHotelsV2.useCallback[handleUseLocation]"], {
                timeout: 10000
            });
        }
    }["NearbyHotelsV2.useCallback[handleUseLocation]"], [
        runSearch,
        radiusKm
    ]);
    // handleReset resets back to idle — no auto-search on mount so the map
    // and result cards only appear after the user actively triggers a search.
    const handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NearbyHotelsV2.useCallback[handleReset]": ()=>{
            setStatus("idle");
            setResults([]);
            setOriginCoords(null);
        }
    }["NearbyHotelsV2.useCallback[handleReset]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl p-6 sm:p-8 md:p-10 w-full",
                style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-[13px] font-bold text-cyan-400",
                                        style: {
                                            background: "rgba(6,182,212,0.12)",
                                            border: "1px solid rgba(6,182,212,0.3)"
                                        },
                                        children: "📍 Evigo Verified Hotels & Stays"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-3xl font-black text-white leading-tight",
                                        children: "Find Hotels Near You"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-2 font-medium max-w-md",
                                        children: "Search verified partner hotels in Jamui and across Bihar using city name or live GPS."
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 shrink-0",
                                children: RADIUS_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setRadiusKm(opt.value);
                                            if (originCoords) {
                                                runSearch(originCoords.lat, originCoords.lng, opt.value, originCoords.label);
                                            }
                                        },
                                        className: "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border-none cursor-pointer",
                                        style: {
                                            background: radiusKm === opt.value ? "linear-gradient(135deg,#8b5cf6,#06b6d4)" : "rgba(255,255,255,0.08)",
                                            color: radiusKm === opt.value ? "#fff" : "rgba(255,255,255,0.7)"
                                        },
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex rounded-xl overflow-hidden p-1",
                                        style: {
                                            background: "rgba(255,255,255,0.06)",
                                            border: "1px solid rgba(255,255,255,0.12)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSearchMode("city"),
                                                className: "px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border-none cursor-pointer",
                                                style: {
                                                    background: searchMode === "city" ? "linear-gradient(135deg,#8b5cf6,#06b6d4)" : "transparent",
                                                    color: searchMode === "city" ? "#fff" : "rgba(255,255,255,0.6)"
                                                },
                                                children: "🏙️ Search City"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSearchMode("gps");
                                                    handleUseLocation();
                                                },
                                                className: "px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border-none cursor-pointer",
                                                style: {
                                                    background: searchMode === "gps" ? "linear-gradient(135deg,#8b5cf6,#06b6d4)" : "transparent",
                                                    color: searchMode === "gps" ? "#fff" : "rgba(255,255,255,0.6)"
                                                },
                                                children: "📍 Use My GPS"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                                lineNumber: 412,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setCityInput("Jamui");
                                            executeCitySearch("Jamui");
                                        },
                                        className: "px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-300 transition hover:bg-cyan-500/20 cursor-pointer border",
                                        style: {
                                            background: "rgba(6,182,212,0.1)",
                                            borderColor: "rgba(6,182,212,0.25)"
                                        },
                                        children: [
                                            "🎯 Show Jamui (",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOTEL_PARTNERS"].length,
                                            " Hotels)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            searchMode === "city" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    executeCitySearch(cityInput);
                                },
                                className: "flex flex-col sm:flex-row gap-2.5 w-full max-w-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: cityInput,
                                            onChange: (e)=>setCityInput(e.target.value),
                                            placeholder: "Type city or district (e.g. Jamui, Patna, Gaya)...",
                                            className: "w-full px-4 py-3 rounded-xl text-sm font-medium text-white outline-none focus:ring-2 focus:ring-violet-500",
                                            style: {
                                                background: "rgba(255,255,255,0.08)",
                                                border: "1px solid rgba(255,255,255,0.18)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                            lineNumber: 450,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIHAR_CITIES"].some((c)=>c.name.toLowerCase() === cityInput.toLowerCase()) ? cityInput : "",
                                        onChange: (e)=>{
                                            if (e.target.value) {
                                                setCityInput(e.target.value);
                                                executeCitySearch(e.target.value);
                                            }
                                        },
                                        className: "px-3 py-3 rounded-xl text-sm font-medium text-white outline-none cursor-pointer",
                                        style: {
                                            background: "rgba(255,255,255,0.08)",
                                            border: "1px solid rgba(255,255,255,0.18)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                style: {
                                                    background: "#18181b"
                                                },
                                                children: "Select City..."
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIHAR_CITIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.name,
                                                    style: {
                                                        background: "#18181b"
                                                    },
                                                    children: c.name
                                                }, c.name, false, {
                                                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 cursor-pointer border-none",
                                        style: {
                                            background: "linear-gradient(135deg,#8b5cf6,#06b6d4)",
                                            boxShadow: "0 2px 12px rgba(139,92,246,0.3)"
                                        },
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this),
                            status === "requesting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-cyan-400 font-semibold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-spin",
                                        children: "🌀"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    " Requesting GPS position from your browser..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this),
                            status === "denied" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-amber-400 font-semibold",
                                children: 'Location access denied by browser. Type "Jamui" or select a city from the list above.'
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this),
                            status === "error" && errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-400 font-semibold",
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-4 py-14 px-6 rounded-2xl text-center",
                        style: {
                            background: "rgba(255,255,255,0.02)",
                            border: "1px dashed rgba(255,255,255,0.12)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl",
                                style: {
                                    background: "rgba(6,182,212,0.1)",
                                    border: "1px solid rgba(6,182,212,0.2)"
                                },
                                children: "🗺️"
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-bold text-base mb-1",
                                        children: "Find Verified Hotels Near You"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 max-w-sm leading-relaxed",
                                        children: "Select a city or use your GPS location to discover verified partner hotels nearby."
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCityInput("Jamui");
                                    executeCitySearch("Jamui");
                                },
                                className: "px-5 py-2.5 rounded-xl text-xs font-bold text-white border-none cursor-pointer transition-all hover:opacity-90",
                                style: {
                                    background: "linear-gradient(135deg,#8b5cf6,#06b6d4)",
                                    boxShadow: "0 2px 12px rgba(139,92,246,0.3)"
                                },
                                children: "🎯 Quick Start: Show Jamui Hotels"
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 514,
                        columnNumber: 11
                    }, this),
                    status === "success" && originCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-gray-300",
                                        children: [
                                            "Found ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-400 font-black",
                                                children: [
                                                    results.length,
                                                    " verified partner",
                                                    results.length !== 1 ? "s" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                                lineNumber: 546,
                                                columnNumber: 23
                                            }, this),
                                            " within ",
                                            radiusKm,
                                            " km of ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-black",
                                                children: originCoords.label || "selected location"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                                lineNumber: 546,
                                                columnNumber: 164
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 545,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "text-xs text-gray-400 hover:text-white transition cursor-pointer border-none bg-transparent",
                                        children: "Clear Search ✕"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 548,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 544,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden border border-white/10",
                                style: {
                                    height: 320
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeafletMap, {
                                    userLat: originCoords.lat,
                                    userLng: originCoords.lng,
                                    partners: results,
                                    onMarkerClick: (p)=>setLightboxPartner(p)
                                }, void 0, false, {
                                    fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                    lineNumber: 558,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            results.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: results.map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PartnerCard, {
                                        partner: partner,
                                        onViewPhotos: (p)=>setLightboxPartner(p),
                                        onFocus: ()=>{}
                                    }, partner.id, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 570,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 568,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 bg-white/[0.02] rounded-2xl border border-white/5 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl mb-2",
                                        children: "🏨"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 580,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white font-bold text-base",
                                        children: [
                                            "No verified partners within ",
                                            radiusKm,
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-xs max-w-sm mx-auto mt-1 leading-relaxed",
                                        children: 'We currently have verified partner hotels in Jamui. Increase your search radius to 30 km or search for "Jamui".'
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 582,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setCityInput("Jamui");
                                            executeCitySearch("Jamui", 30);
                                        },
                                        className: "mt-4 px-5 py-2 rounded-xl text-xs font-bold text-white border-none cursor-pointer",
                                        style: {
                                            background: "linear-gradient(135deg,#8b5cf6,#06b6d4)"
                                        },
                                        children: "View Jamui Hotels →"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                                lineNumber: 579,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                        lineNumber: 543,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            lightboxPartner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoLightbox, {
                partner: lightboxPartner,
                onClose: ()=>setLightboxPartner(null)
            }, void 0, false, {
                fileName: "[project]/Evigo/src/components/NearbyHotelsV2.tsx",
                lineNumber: 603,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(NearbyHotelsV2, "8+YLamHq/Xzt80hW+ViNRFV98uc=");
_c3 = NearbyHotelsV2;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LeafletMap");
__turbopack_context__.k.register(_c1, "PartnerCard");
__turbopack_context__.k.register(_c2, "PhotoLightbox");
__turbopack_context__.k.register(_c3, "NearbyHotelsV2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Evigo/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Evigo/src/components/Container.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/components/PageContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/components/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$NearbyHotelsV2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/components/NearbyHotelsV2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/src/lib/constants.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const CATEGORY_ICON = {
    Catering: "🍽️",
    Photography: "📸",
    DJ: "🎧",
    "Mehendi & Makeup": "💅",
    Restaurant: "🏨"
};
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex-1 w-full overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-b from-zinc-50 to-white py-8 sm:py-14 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center gap-8 sm:gap-10 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                animation: "fade-right",
                                duration: 800,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700",
                                            children: "✦ OTP Login • Real-time Bookings • 5 Services"
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight",
                                            children: "Book trusted event services in minutes."
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-7 text-zinc-600",
                                            children: [
                                                "Evigo connects you to verified providers across",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black text-zinc-900",
                                                    children: "Catering, Photography, DJ, Mehendi & Makeup, Restaurant"
                                                }, void 0, false, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this),
                                                ". No fake listings — providers appear only after registration."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/explore",
                                                    className: "w-full sm:w-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full",
                                                        children: "Explore Providers →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partner",
                                                    className: "w-full sm:w-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "secondary",
                                                        className: "w-full",
                                                        children: "Become a Partner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3",
                                            children: [
                                                "OTP Login",
                                                "No Fake Vendors",
                                                "Bihar Network",
                                                "24×7 Support"
                                            ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-zinc-200 bg-white px-2.5 sm:px-3 py-1 text-xs font-semibold text-zinc-600",
                                                    children: [
                                                        "✓ ",
                                                        b
                                                    ]
                                                }, b, true, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                animation: "fade-left",
                                duration: 800,
                                delay: 200,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/50 bg-zinc-900 shadow-2xl",
                                            style: {
                                                aspectRatio: "16/10"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/evigo-hero.png",
                                                    alt: "Evigo — Premium Event Services",
                                                    fill: true,
                                                    className: "object-cover opacity-80",
                                                    priority: true,
                                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0",
                                                    style: {
                                                        background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 right-0 p-4 sm:p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-base sm:text-lg font-black text-white leading-tight",
                                                            style: {
                                                                textShadow: "0 2px 12px rgba(0,0,0,0.6)"
                                                            },
                                                            children: "All Event Services in One Place"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1.5 flex flex-wrap gap-1.5 sm:gap-2",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_CATEGORIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-white",
                                                                    style: {
                                                                        background: "rgba(255,255,255,0.15)",
                                                                        backdropFilter: "blur(8px)",
                                                                        border: "1px solid rgba(255,255,255,0.25)"
                                                                    },
                                                                    children: [
                                                                        CATEGORY_ICON[c] || "✨",
                                                                        " ",
                                                                        c
                                                                    ]
                                                                }, c, true, {
                                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4 hover:border-violet-200 hover:bg-violet-50 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-black text-zinc-900",
                                                            children: "Real-time bookings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[11px] sm:text-xs font-semibold text-zinc-500",
                                                            children: "Providers accept/reject in dashboard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4 hover:border-cyan-200 hover:bg-cyan-50 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-black text-zinc-900",
                                                            children: "Call instantly"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[11px] sm:text-xs font-semibold text-zinc-500",
                                                            children: "One tap “Call Now” via tel link"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Evigo/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Evigo/src/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Evigo/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "travel-tourism",
                className: "py-12 sm:py-16 md:py-20 bg-zinc-50 border-y border-zinc-200 w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 mb-3 sm:mb-4 text-xs sm:text-[13px] font-bold text-amber-700",
                                            style: {
                                                background: "rgba(245, 158, 11, 0.1)",
                                                border: "1px solid rgba(245, 158, 11, 0.2)"
                                            },
                                            children: "🧭 Discover Bihar"
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl md:text-[34px] font-black text-zinc-900 leading-tight",
                                            children: "Travel & Tourism"
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-zinc-500 mt-2 font-semibold",
                                            children: "Explore Bihar's heritage and culture through verified local hosts."
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            staggerChildren: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4",
                                children: [
                                    {
                                        name: "Patna",
                                        tag: "Ganges Ghats",
                                        img: "/patna_ganges.png"
                                    },
                                    {
                                        name: "Gaya",
                                        tag: "Buddhist Circuit",
                                        img: "/gaya_buddhist.png"
                                    },
                                    {
                                        name: "Rajgir",
                                        tag: "Hot Springs & Hills",
                                        img: "/rajgir_hills.png"
                                    },
                                    {
                                        name: "Vaishali",
                                        tag: "Ancient Ruins",
                                        img: "/vaishali_ruins.png"
                                    },
                                    {
                                        name: "Jamui",
                                        tag: "Wildlife & Nature",
                                        img: "/jamui_nature.png"
                                    }
                                ].map((dest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl overflow-hidden group border border-zinc-200 bg-white relative aspect-[4/5] shadow-sm hover:shadow-lg transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: dest.img,
                                                alt: dest.name,
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                                sizes: "(max-width: 600px) 50vw, 240px"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base sm:text-lg font-black text-white",
                                                        children: dest.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] sm:text-xs font-semibold text-white/80 mt-0.5",
                                                        children: dest.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, dest.name, true, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            delay: 200,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 sm:mt-12 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden",
                                style: {
                                    background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                                    border: "1px solid rgba(255,255,255,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 max-w-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-[11px] font-bold mb-3 border border-amber-500/30",
                                                children: "🔥 Special Offer"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl sm:text-2xl font-black text-white mb-2",
                                                children: "Travel Pack Combo"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/70 leading-relaxed font-medium",
                                                children: "Book a complete travel experience — local guide, homestay, and transport — in one combo, at one transparent price."
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 shrink-0 w-full sm:w-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services/tourism",
                                            className: "w-full sm:w-auto block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full whitespace-nowrap bg-white text-indigo-950 hover:bg-zinc-100 hover:text-indigo-950 shadow-xl border-none",
                                                children: "Explore Jamui Tourism →"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Evigo/src/app/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Evigo/src/app/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 sm:py-16 md:py-20 bg-white w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 mb-3 sm:mb-4 text-xs sm:text-[13px] font-bold text-violet-700",
                                                style: {
                                                    background: "rgba(139,92,246,0.07)",
                                                    border: "1px solid rgba(139,92,246,0.18)"
                                                },
                                                children: "🎯 5 Verified Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl md:text-[34px] font-black text-zinc-900 leading-tight",
                                                children: "Core Services"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-zinc-500 mt-2 font-semibold",
                                                children: "Curated for Bihar's event market — only the services that matter."
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/explore",
                                        className: "text-sm font-extrabold text-violet-600 hover:text-violet-700 whitespace-nowrap shrink-0",
                                        children: "View All Providers →"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            staggerChildren: 120,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "evigo-services-grid",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_CATEGORIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: c === "Restaurant" ? "/hotels" : `/explore?category=${encodeURIComponent(c)}`,
                                        style: {
                                            textDecoration: "none",
                                            display: "block"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl sm:rounded-[20px] border border-zinc-200 overflow-hidden bg-white h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_0_2px_#8b5cf6,0_20px_48px_rgba(139,92,246,0.18)] hover:border-violet-500",
                                            style: {
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                                cursor: "pointer"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "evigo-svc-img-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_IMAGE"][c],
                                                            alt: c,
                                                            fill: true,
                                                            className: "svc-img object-cover transition-transform duration-500",
                                                            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw",
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0",
                                                            style: {
                                                                background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-2.5 left-2.5 w-8 h-8 rounded-[10px] bg-white/90 backdrop-blur-sm flex items-center justify-center text-lg shadow-md",
                                                            children: CATEGORY_ICON[c] || "✨"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 sm:p-4 flex flex-col flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-black text-zinc-900",
                                                            children: c
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-zinc-500 mt-1 leading-relaxed font-semibold",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_TAGLINE"][c]
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-auto pt-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex items-center gap-1 text-xs font-extrabold grad-text",
                                                                children: c === "Restaurant" ? "Browse verified hotels & banquets →" : "Top verified professionals near you →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Evigo/src/app/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this)
                                    }, c, false, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Evigo/src/app/page.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Evigo/src/app/page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-14 sm:py-20 w-full",
                style: {
                    background: "linear-gradient(180deg,#09090b 0%,#0f0a1e 100%)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-10 sm:mb-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 sm:mb-5",
                                        style: {
                                            background: "rgba(6,182,212,0.12)",
                                            border: "1px solid rgba(6,182,212,0.3)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base",
                                                children: "🤝"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-[13px] font-bold text-cyan-400 tracking-wide",
                                                children: "Verified Partners"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight",
                                        children: "Our Trusted Partners"
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm sm:text-[15px] text-gray-400 max-w-md mx-auto mt-3 sm:mt-4 leading-relaxed",
                                        children: "Hotels and restaurants we've personally verified across Bihar."
                                    }, void 0, false, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            staggerChildren: 150,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "evigo-partners-grid",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRUSTED_PARTNERS"].map((partner, i)=>{
                                    const accents = [
                                        "#06b6d4",
                                        "#8b5cf6",
                                        "#f59e0b",
                                        "#10b981",
                                        "#ec4899"
                                    ];
                                    const accent = accents[i % accents.length];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]",
                                        style: {
                                            aspectRatio: "3/4",
                                            border: `1px solid ${accent}22`,
                                            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                                            background: "#0f0a1e"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: partner.image,
                                                alt: `${partner.name}, ${partner.location}`,
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 hover:scale-105",
                                                sizes: "(max-width: 480px) 100vw, (max-width: 720px) 50vw, (max-width: 1200px) 25vw, 25vw",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex flex-col justify-end p-4",
                                                style: {
                                                    background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white font-bold text-sm sm:text-base mb-0.5",
                                                        children: partner.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-300 text-xs font-semibold mb-0.5",
                                                        children: partner.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-xs font-medium",
                                                        children: partner.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 right-0 h-[3px]",
                                                style: {
                                                    background: `linear-gradient(90deg, ${accent}, ${accent}55)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white",
                                                style: {
                                                    background: "rgba(6,182,212,0.85)",
                                                    backdropFilter: "blur(6px)"
                                                },
                                                children: "✓ Verified"
                                            }, void 0, false, {
                                                fileName: "[project]/Evigo/src/app/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, partner.name, true, {
                                        fileName: "[project]/Evigo/src/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            animation: "fade-up",
                            delay: 200,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 sm:mt-14 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$src$2f$components$2f$NearbyHotelsV2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearbyHotelsV2"], {}, void 0, false, {
                                    fileName: "[project]/Evigo/src/app/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Evigo/src/app/page.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Evigo/src/app/page.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Evigo/src/app/page.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Evigo/src/app/page.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Evigo/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Evigo_src_0yx011f._.js.map