import { Injectable } from '@angular/core';
import { FRUITS } from './mocks';
import { Fruit } from './fruit';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FruitService {

  getFruit(): Observable<Fruit[]>{
    return of(FRUITS);
  }

  getFruitById(id: number): Observable<any> {
    return of(FRUITS.find(fruit => fruit.id === id))
  }

}
