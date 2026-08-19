"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-7CGX9VPTV3";
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "mirroraffirmations.online";
const plausibleScriptSrc =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC || "https://plausible.shipsolo.io/js/script.js";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", { path: pathname });
  }, [pathname]);

  return (
    <>
      {plausibleScriptSrc ? (
        <>
          <Script
            id="plausible-queue"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.plausible = window.plausible || function() {
                  (window.plausible.q = window.plausible.q || []).push(arguments);
                };
                window.plausible.init = window.plausible.init || function(options) {
                  window.plausible.o = options || {};
                };
                window.plausible.init();
              `
            }}
          />
          <Script
            id="plausible-analytics"
            src={plausibleScriptSrc}
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        </>
      ) : null}
      {cloudflareToken ? (
        <Script
          id="cloudflare-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({ token: cloudflareToken })}
        />
      ) : null}
      {clarityProjectId ? (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", ${JSON.stringify(clarityProjectId)});
            `
          }}
        />
      ) : null}
      {gaMeasurementId ? (
        <>
          <Script
            id="google-analytics-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());
                gtag("config", ${JSON.stringify(gaMeasurementId)});
              `
            }}
          />
        </>
      ) : null}
    </>
  );
}
