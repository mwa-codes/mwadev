type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
    if (typeof window === 'undefined') {
        return;
    }

    const win = window as Window & {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    };

    if (typeof win.gtag === 'function') {
        win.gtag('event', eventName, params);
        return;
    }

    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({ event: eventName, ...params });
}
