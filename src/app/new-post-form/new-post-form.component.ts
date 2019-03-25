import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) { }
  
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const title = form.value['title'];
    const content = form.value['content'];
    this.postService.addPost(title, content);
    this.router.navigate(['/blog']);
  }

}
