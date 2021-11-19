import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { feedback } from './model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  feed:feedback;
  feeds:feedback[];


  constructor() {
    this.feed=new feedback();
    this.feeds=[];
  }

  ngOnInit(): void {
  }

  addmessage(form:NgForm){
    alert("added");
  }
}
