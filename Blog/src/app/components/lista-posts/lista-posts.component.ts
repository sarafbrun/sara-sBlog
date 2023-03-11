import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  posts: Post[];

  constructor(private postsService: PostsService) {
    this.posts = [];
    if (localStorage.getItem('arrPosts')) {
      this.posts = JSON.parse(localStorage.getItem('arrPosts')!);
    }
  }

  ngOnInit() {
    this.posts = this.postsService.getAll()
  }

  onChange($event: any) {
    if ($event.target.value === '') {
      this.posts = this.postsService.getAll()
    } else {
      this.posts = this.postsService.getCategoria($event.target.value);
    }
  }

}
