import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { IPerson } from '../IPerson';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  public persons : IPerson[] = [];
  public errorMsg = "";
  constructor(private dataService:TestServiceService) { 
  }

  ngOnInit() {
    this.dataService.getTestStrings().subscribe(data => this.persons = data,
      error => this.errorMsg = error);
  }

}
