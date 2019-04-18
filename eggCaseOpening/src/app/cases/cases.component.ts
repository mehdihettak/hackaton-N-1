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

  egg: any = undefined

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  getRandEgg(){
    this.apiService.getRandomEgg().subscribe(dataRE => this.egg = dataRE);
  }

}
