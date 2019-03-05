import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-view',
  templateUrl: './container-view.component.html',
  styleUrls: ['./container-view.component.scss']
})
export class ContainerViewComponent implements OnInit {

  posts: any;

  constructor() { }

  ngOnInit() {
  }

}