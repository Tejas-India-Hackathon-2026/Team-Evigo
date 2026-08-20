(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Evigo/src/components/LeafletMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeafletMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * LeafletMap — client-only Leaflet map component.
 *
 * IMPORTANT: This file must NEVER be imported directly at the top level
 * of a server component or page. Always import via next/dynamic with ssr:false:
 *
 *   const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });
 *
 * This is because Leaflet uses `window` and `document` at module load time,
 * which breaks Next.js SSR.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Evigo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LeafletMap({ userLat, userLng, partners, onMarkerClick }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const leafletMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            if (!mapRef.current || leafletMapRef.current) return;
            // Dynamic import keeps Leaflet out of the server bundle entirely
            __turbopack_context__.A("[project]/Evigo/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)").then({
                "LeafletMap.useEffect": (L)=>{
                    // Fix default marker icon paths broken by webpack asset hashing
                    // (standard fix documented at https://leafletjs.com/examples/quick-start/)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    delete L.Icon.Default.prototype._getIconUrl;
                    L.Icon.Default.mergeOptions({
                        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
                    });
                    const map = L.map(mapRef.current, {
                        center: [
                            userLat,
                            userLng
                        ],
                        zoom: 13,
                        zoomControl: true,
                        scrollWheelZoom: true,
                        attributionControl: true
                    });
                    leafletMapRef.current = map;
                    // OpenStreetMap tiles — free, no API key, no billing
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
                        maxZoom: 19
                    }).addTo(map);
                    // User location marker (cyan pulsing pin)
                    const userIcon = L.divIcon({
                        className: "",
                        html: `
          <div style="
            position:relative;width:20px;height:20px;
          ">
            <div style="
              position:absolute;inset:0;border-radius:50%;
              background:rgba(6,182,212,0.25);
              animation:pulse-ring 1.6s cubic-bezier(0.215,0.61,0.355,1) infinite;
            "></div>
            <div style="
              position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
              width:10px;height:10px;border-radius:50%;
              background:#06b6d4;border:2px solid #fff;
              box-shadow:0 0 0 2px #06b6d4;
            "></div>
          </div>
          <style>
            @keyframes pulse-ring {
              0%   { transform: scale(0.8); opacity: 0.7; }
              70%  { transform: scale(2);   opacity: 0; }
              100% { transform: scale(2.4); opacity: 0; }
            }
          </style>
        `,
                        iconSize: [
                            20,
                            20
                        ],
                        iconAnchor: [
                            10,
                            10
                        ]
                    });
                    L.marker([
                        userLat,
                        userLng
                    ], {
                        icon: userIcon
                    }).addTo(map).bindPopup("<b>📍 Your location</b>").openPopup();
                    // Partner hotel markers (violet pins)
                    partners.forEach({
                        "LeafletMap.useEffect": (partner)=>{
                            const partnerIcon = L.divIcon({
                                className: "",
                                html: `
            <div style="
              background:linear-gradient(135deg,#8b5cf6,#06b6d4);
              color:#fff;font-size:14px;
              width:32px;height:32px;border-radius:50% 50% 50% 0;
              transform:rotate(-45deg);
              display:flex;align-items:center;justify-content:center;
              border:2px solid rgba(255,255,255,0.8);
              box-shadow:0 4px 12px rgba(139,92,246,0.5);
              cursor:pointer;
            ">
              <span style="transform:rotate(45deg)">🏨</span>
            </div>
          `,
                                iconSize: [
                                    32,
                                    32
                                ],
                                iconAnchor: [
                                    16,
                                    32
                                ],
                                popupAnchor: [
                                    0,
                                    -36
                                ]
                            });
                            const marker = L.marker([
                                partner.lat,
                                partner.lng
                            ], {
                                icon: partnerIcon
                            }).addTo(map);
                            marker.bindPopup(`
          <div style="min-width:160px;font-family:system-ui,sans-serif;">
            <div style="font-weight:800;font-size:13px;margin-bottom:2px;">${partner.name}</div>
            <div style="font-size:11px;color:#666;margin-bottom:4px;">${partner.address}</div>
            <div style="font-size:11px;font-weight:700;color:#8b5cf6;">${partner.distanceKm.toFixed(1)} km away</div>
            ${partner.priceRange ? `<div style="font-size:11px;color:#444;margin-top:2px;">${partner.priceRange}</div>` : ""}
          </div>
        `);
                            marker.on("click", {
                                "LeafletMap.useEffect": ()=>onMarkerClick(partner)
                            }["LeafletMap.useEffect"]);
                        }
                    }["LeafletMap.useEffect"]);
                    // Fit map to show all pins (user + partners)
                    if (partners.length > 0) {
                        const allPoints = [
                            [
                                userLat,
                                userLng
                            ],
                            ...partners.map({
                                "LeafletMap.useEffect": (p)=>[
                                        p.lat,
                                        p.lng
                                    ]
                            }["LeafletMap.useEffect"])
                        ];
                        map.fitBounds(L.latLngBounds(allPoints), {
                            padding: [
                                32,
                                32
                            ]
                        });
                    }
                }
            }["LeafletMap.useEffect"]);
            // Cleanup on unmount
            return ({
                "LeafletMap.useEffect": ()=>{
                    if (leafletMapRef.current) {
                        leafletMapRef.current.remove();
                        leafletMapRef.current = null;
                    }
                }
            })["LeafletMap.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LeafletMap.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Evigo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapRef,
        style: {
            width: "100%",
            height: "100%",
            minHeight: 300
        },
        "aria-label": "Map showing nearby Evigo partner hotels"
    }, void 0, false, {
        fileName: "[project]/Evigo/src/components/LeafletMap.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(LeafletMap, "L6wDyD8Fzx9yyv5e+9GAVEGWbuI=");
_c = LeafletMap;
var _c;
__turbopack_context__.k.register(_c, "LeafletMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Evigo/src/components/LeafletMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Evigo/src/components/LeafletMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Evigo_src_components_LeafletMap_tsx_02p0qd.._.js.map