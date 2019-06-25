import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Questions } from '../models/questions';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
@Input() name: string;
listString: string;
list: Questions[];
data: string;
  constructor() { }

  ngOnInit() {
    this.list = JSON.parse(this.listString) as Questions[];
  }

  AddNewItem(){
    let item = new Questions();
    item.name = 'PMKJ 2';
    item.age = 22;
    this.list.push(item);
  }

  SaveList(){
    this.save.emit('pmkj');
    
  }
}