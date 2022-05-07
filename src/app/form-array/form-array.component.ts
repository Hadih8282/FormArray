import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'formArray',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic:HTMLInputElement,e:any){
    
    e.preventDefault();
    this.topics.push( new FormControl(topic.value));
    topic.value ='';
    
  }


  get topics() {
    return this.form.get('topics') as FormArray;
  }


  removeTopice(topic: FormControl | any){

    let index =this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  
}
