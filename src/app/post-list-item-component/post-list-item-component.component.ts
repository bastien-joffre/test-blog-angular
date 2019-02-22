import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: any;
  @Input() loveIts: number;

  constructor() { }

  onILike() {
    this.post.loveIts ++;
  }

  onIDontLike () {
    this.post.loveIts --;
  }

  ngOnInit() {
  }

}
