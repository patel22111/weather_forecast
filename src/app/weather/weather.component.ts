import { Component, OnInit } from '@angular/core';
import { City } from '../interfaces/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cities: Array<City> = [];
  chosenCity: City;
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cities = this.cityService.getCities();
    console.log(this.cities);
  }

  onChooseCity(city: City): void {
    this.cities = this.cities.map((city1) => {
      return { ...city1, selected: false };
    });
    const index = this.cities.findIndex(
      (city2) => city2.name.toLowerCase() === city.name.toLowerCase()
    );
    this.cities[index] = { ...city, selected: true };
    this.chosenCity = city;
  }
}
