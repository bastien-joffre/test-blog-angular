import { Subject } from 'rxjs';

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: '0',
      created_at: new Date()
    },
    {
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: '0',
      created_at: new Date()
    },
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: '0',
      created_at: new Date()
    }
  ]
  
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  deletePost(i: number) {
    this.posts[i].title = 'deleted';
    this.emitPostSubject();
  }

  addPost (title: string, content: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: '0',
      created_at: new Date()
    }
    postObject.title = title;
    postObject.content = content;
    
    this.posts.push(postObject);
    this.emitPostSubject();
  }
}