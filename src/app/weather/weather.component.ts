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
    this.chosenCity = city;
    this.cities = this.cities.map((mCity) => {
      return { ...mCity, selected: false };
    });
    let resCity = this.cities.find(
      (fCity) => fCity.name.toLowerCase() === city.name.toLowerCase()
    );
    resCity.selected = true;
  }
}
