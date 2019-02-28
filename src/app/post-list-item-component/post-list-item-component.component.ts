import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: any;
  @Input() loveIts: number;
  @Input() index: number;

  constructor(private postService: PostService) { }

  onILike() {
    this.post.loveIts ++;
  }

  onIDontLike () {
    this.post.loveIts --;
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }

  ngOnInit() {
  }

}
