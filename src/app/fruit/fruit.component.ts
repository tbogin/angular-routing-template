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
    private route: ActivatedRoute,
    private fruitService: FruitService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFruit();
  }

  getFruit(): void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.fruitService.getFruitById(id)
      .subscribe(fruit => this.fruit = fruit);
  }

  goBack(){
    this.location.back();
  }

}
