import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { IPerson } from '../IPerson';

@Component({
  selector: 'app-data-display2',
  templateUrl: './data-display2.component.html',
  styleUrls: ['./data-display2.component.css']
})
export class DataDisplay2Component implements OnInit {

  public persons : IPerson[] = [];
  public errorMsg = "";

  constructor(private dataService:TestServiceService) { }

  ngOnInit() {
    this.dataService.getTestStrings().subscribe(data => this.persons = data,
                                                error => this.errorMsg = error);
  }

}
