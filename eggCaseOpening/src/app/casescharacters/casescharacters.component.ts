import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-casescharacters',
  templateUrl: './casescharacters.component.html',
  styleUrls: ['./casescharacters.component.scss']
})
export class CasescharactersComponent implements OnInit {

  characterCollection: any = []

  count = 0

  count1 = 0

  character: any = undefined

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  getRandCar(){
    this.apiService.getRandomCaracter().subscribe(dataRE => {
      this.character = dataRE
      this.characterCollection.push(this.character)
      this.count = this.characterCollection.length
      console.log(this.characterCollection)
    });  
  }

  addCredits(){
    this.count1 += 5
  }

}