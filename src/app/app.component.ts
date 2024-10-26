import { Component } from '@angular/core';
import { GoogleAnalyticsService } from './google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.googleAnalyticsService.loadGoogleAnalytics();
    }
  
    trackEvent(event: string) {
      this.googleAnalyticsService.trackEvent(event, event);
      this.googleAnalyticsService.setPropertyDomain();
    }
    
}
