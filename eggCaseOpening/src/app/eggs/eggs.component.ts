import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})
export class EggsComponent implements OnInit {
  
  public eggs : any = []
  public collection: any = []

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  getRandEgg(){
    this.apiService.getRandomEgg().subscribe(dataRE => this.eggs = dataRE => this.collection.push(this.eggs));
    console.log(this.collection)
  }

}
