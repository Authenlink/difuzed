"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function Meeting() {
  const { theme } = useTheme();

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });

    (window as any).Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: {
        layout: "month_view",
        theme: theme === "dark" ? "dark" : "light",
      },
      calLink: "hugo-z0p1vw/30min",
    });

    (window as any).Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      theme: theme === "dark" ? "dark" : "light",
    });
  }, [theme]);

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 bg-background">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-10 max-w-4xl px-4">
        Réservez votre appel pour booster votre{" "}
        <span className="text-primary">référencement</span> grâce aux{" "}
        <span className="text-primary">meilleures pratiques</span>.
      </h2>
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "600px",
          overflow: "scroll",
        }}
        id="my-cal-inline-30min"
      ></div>
    </div>
  );
}
