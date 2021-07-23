import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ItemDTO } from '../ItemDTO'
// import * as $ from 'jquery';


@Component({
  selector: 'app-high-alchemy',
  templateUrl: './high-alchemy.component.html',
  styleUrls: ['./high-alchemy.component.css']
})
export class HighAlchemyComponent implements OnInit {
  headers: string[] = ['Name', 'Low price', 'Low price time', 'High price', 'High price time', 'Margin', 'Percentage margin'];
  items: ItemDTO[];

  constructor(private service: ItemService) {
  }



  ngOnInit() {
    this.getData();
  }

  getData(): any {
    this.service.getHighAlchemyItems()
      .subscribe(data => {
        this.items = data;
      })
  }
}