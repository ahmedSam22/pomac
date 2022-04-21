import { Card } from './../components/card/card';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LogicalService {

  constructor(public fb: FormBuilder) { }

addTask(img:string,title:string,desc:string,date:string,users:[]){
  const task = new Card;
  task.image = img
  task.title = title
  task.desc = desc
  task.date = date
  task.users = users

}

}
