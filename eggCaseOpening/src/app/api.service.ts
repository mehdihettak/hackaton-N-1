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

}
