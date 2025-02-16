import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class AppStore {
    public forecasts = signal<WeatherForecast[]>([]);
  }

export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
  }