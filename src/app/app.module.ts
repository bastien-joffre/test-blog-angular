import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostService } from './services/post.service';
import { ContainerViewComponent } from './container-view/container-view.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';

const appRoutes: Routes = [
  { path: 'blog', component: ContainerViewComponent },
  { path: 'new-post', component: NewPostFormComponent },
  { path: '', component: ContainerViewComponent },
  { path: '**', redirectTo: 'blog' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    ContainerViewComponent,
    NewPostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
