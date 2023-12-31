import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../interfaces/city';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  @Input() city: City;
  constructor() {}

  ngOnInit() {}
}
