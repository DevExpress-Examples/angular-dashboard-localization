import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DxButtonModule } from 'devextreme-angular';
import { ResourceManager } from 'devexpress-dashboard';
import { locale } from "devextreme/localization";
import dashboardDE from '../../json resources/dx-dashboard.de.json';
import analyticsDE from '../../json resources/dx-analytics-core.de.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DxDashboardControlModule, DxButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    // Localize the Web Dashboard UI for the German market (the 'de' culture):
    ResourceManager.setLocalizationMessages(dashboardDE);
    ResourceManager.setLocalizationMessages(analyticsDE);
    
    // Apply culture-specific formatting:
    locale('de');

    // Localize the specified string at runtime (the "Export To" button's caption in the dashboard title):
    ResourceManager.setLocalizationMessages({ "DashboardStringId.ActionExportTo": "Custom Text for Export Button" });
  }
}
