import { Component, effect, inject } from '@angular/core';
import { AppStore } from './app-store.service';
import { AppService } from './app.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    DatePipe
  ]
})
export class AppComponent {
  public store = inject(AppStore);
  private appService = inject(AppService);

  
  constructor() {
    effect(async () => {
      await this.appService.getWeatherForecasts();
    });
  }
}
