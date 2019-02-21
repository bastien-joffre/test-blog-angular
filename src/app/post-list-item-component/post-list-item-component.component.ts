import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() article: any;
  @Input() loveIts: number;

  date = new Date();

  constructor() { }

  onILike() {
    this.article.loveIts ++;
  }

  onIDontLike () {
    this.article.loveIts --;
  }

  ngOnInit() {
  }

}
