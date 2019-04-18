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

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  getRandEgg(){
    this.apiService.getRandomEgg().subscribe(dataRE => {
      this.egg = dataRE
      this.collection.push(this.egg)
      this.count = this.collection.length
      console.log(this.collection)
    });  
  }

  addCredits(){
    this.count1 += 5
  }

}
