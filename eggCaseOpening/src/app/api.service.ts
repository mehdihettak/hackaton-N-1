import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class egg {
  id: string;
  name: string;
  color: string;
  caliber: string;
  farming: number;
  country: string;
  validity: string;
  rarity: string;
  image: string;
  power: string;
}

class caracters {
  id: string;
  name: string;
  gender: string;
  origin: string;
  image: string;
  skills: [
    string
  ];
}

class eggPrice {
  date: string;
  price: number;
  amount: number;
  unit: string;
  trend: string;
  trades: number;
}

class milkPrice {
  date: string;
  price: number;
  amount: number;
  unit: string;
  trend: string;
  trades: number;
}

class chocolatePrice {
  date: string;
  price: number;
  amount: number;
  unit: string;
  trend: string;
  trades: number;
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getEgg() : Observable<egg>{
    return this.http.get<egg>(`http://easteregg.wildcodeschool.fr/api/eggs`);
  }

  getCaracter() : Observable<caracters> {
    return this.http.get<caracters>(`http://easteregg.wildcodeschool.fr/api/characters`);
  }

  getRandomEgg() : Observable<egg>{
    return this.http.get<egg>(`http://easteregg.wildcodeschool.fr/api/eggs/random`);
  }

  getRandomCaracter() : Observable<caracters> {
    return this.http.get<caracters>(`http://easteregg.wildcodeschool.fr/api/characters/random`);
  }

  getEggPrice() : Observable<eggPrice>{
    return this.http.get<eggPrice>(`http://easteregg.wildcodeschool.fr/api/stocks/eggs?min=1555656158`);
  }

  getMilkPrice() : Observable<milkPrice> {
    return this.http.get<milkPrice>(`http://easteregg.wildcodeschool.fr/api/stocks/milks?min=1555656158`);
  }

  getChocolatePrice() : Observable<chocolatePrice> {
    let now = Date.now();
    return this.http.get<chocolatePrice>(`http://easteregg.wildcodeschool.fr/api/stocks/chocolates?min=1555656158`);
  }

}
