import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularEditorModule, HttpClientModule],
  declarations: [AppComponent, WeatherComponent, WeatherDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
