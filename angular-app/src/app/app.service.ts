import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { AppStore, WeatherForecast } from "./app-store.service";

@Injectable({
    providedIn: 'root'
  })
  export class AppService {
    private apiUrl = 'http://localhost:46655';
    private forecastUrl = 'api/weatherforecast';
  
    constructor(private http: HttpClient, private store: AppStore) { }
  
    async getWeatherForecasts(): Promise<void> {
        const response = await firstValueFrom(
            this.http.get<WeatherForecast[]>(`${this.apiUrl}/${this.forecastUrl}`)
        );

        this.store.forecasts.set(response ?? []);
    }
  }