import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  caseBasic = []

  casePremium = []

  caseLegendary = []

  collection: any = []

  count = 0

  count1 = 0

  egg: any = undefined

  chocolateStock : any = undefined

  eggStock : any = undefined

  milkStock : any = undefined

  characterCollection: any = []

  character: any = undefined


  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  getRandEgg(){
    this.apiService.getRandomEgg().subscribe(dataRE => {
      this.egg = dataRE
      this.collection.push(this.egg)
      this.count = this.collection.length * 5
      console.log(this.collection)
    });  
  }

  getChocolatePrice1(){
    this.apiService.getChocolatePrice().subscribe(dataRC => {
      this.chocolateStock = dataRC}
      );
  }

  getMilkPrice1(){
    this.apiService.getMilkPrice().subscribe(dataRC => {
      this.chocolateStock = dataRC}
      );
  }

  getEggPrice1(){
    this.apiService.getEggPrice().subscribe(dataRC => {
      this.chocolateStock = dataRC}
      );
  }

  getRandCar(){
    this.apiService.getRandomCaracter().subscribe(dataRE => {
      this.character = dataRE
      this.characterCollection.push(this.character)
      console.log(this.characterCollection)
    });  
  }

}
