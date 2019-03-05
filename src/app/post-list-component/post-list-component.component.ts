import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../services/post.service';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}