import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

declare var gtag: any;

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
    private renderer: Renderer2;
    public setId: string;
    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    loadGoogleAnalytics() {
        const gtagScript = this.renderer.createElement('script');
        this.renderer.setAttribute(gtagScript, 'src', `https://www.googletagmanager.com/gtag/js?id=G-0N18PPV66P`);
            this.renderer.setAttribute(gtagScript, 'async', '');
        const head = this.renderer.selectRootElement('head', true);
        this.renderer.appendChild(head, gtagScript);

        const script = this.renderer.createElement('script');
        const scriptContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0N18PPV66P');
        `;
        this.renderer.setProperty(script, 'textContent', scriptContent);
        this.renderer.appendChild(head, script);
    }

    setPropertyDomain(event) {
        const email_event = `@${event}.com`;
        console.log(email_event)
        gtag('set', 'user_properties', {
            email_domain: email_event
          });

    }

    trackEvent(eventName: string, eventCategory: string) {
            gtag('event', eventName, {
                // event Type - example: 'SCROLL_TO_TOP_CLICKED'
                'event_category': eventCategory,
                // the label that will show up in the dashboard as the events name
                'event_label': eventName,
            })
    }
}