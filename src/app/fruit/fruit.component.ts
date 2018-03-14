import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Fruit} from '../fruit';
import {FruitService} from '../fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  @Input() fruit: Fruit; //receive fruit instance from Fruit List Component

  constructor(
    private route: ActivatedRoute, //enable extraction of route parameters such as id
    private fruitService: FruitService, //DI of Fruit Service class
    private location: Location //Location module for easy routing
  ) { }

  ngOnInit() {
    this.getFruit(); //set this.fruit value on Fruit Component initialization
  }

  getFruit(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //get id parameter from /fruit/fruit:id route
    this.fruitService.getFruitById(id)
      .subscribe(fruit => this.fruit = fruit); //set this.fruit to the Fruit instance from fruit-list in order to view its specific data values on the Fruit show page /fruit/fruit:id
  }

  goBack(){
    this.location.back(); //return to previous page
  }

}
