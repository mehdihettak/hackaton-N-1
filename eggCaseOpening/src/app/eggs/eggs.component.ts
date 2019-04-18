import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})
export class EggsComponent implements OnInit {
  
  public eggs : any = []

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getEgg().subscribe(data => this.eggs = data);
  }

  getRandEgg(){
    this.apiService.getRandomEgg().subscribe(dataRE => this.eggs = dataRE);
  }

}
