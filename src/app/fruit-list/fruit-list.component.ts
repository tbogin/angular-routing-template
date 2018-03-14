import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Fruit} from '../fruit';
import {FruitService} from '../fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  fruits: Fruit[];

  constructor(
    private service: FruitService
  ){}

  ngOnInit() {
    this.getFruit();
  }

  getFruit(): void {
    this.service.getFruit()
      .subscribe(fruits => this.fruits = fruits)
  }

}
