import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  inventory = [];
  numberCredit = 0;
  

  constructor() { }
}
