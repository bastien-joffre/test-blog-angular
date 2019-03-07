import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit() {
  }

}
