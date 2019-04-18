import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-caracters',
  templateUrl: './caracters.component.html',
  styleUrls: ['./caracters.component.scss']
})
export class CaractersComponent implements OnInit {

  public caracters : any = []
  public character : any = {}

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getCaracter().subscribe(data => this.caracters = data);
  }

  getRandCar(){
    this.apiService.getRandomCaracter().subscribe(dataRC => {
      this.caracters = [ dataRC]}
      );
  }

}
