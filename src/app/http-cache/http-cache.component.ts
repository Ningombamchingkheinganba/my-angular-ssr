import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-http-cache',
standalone: true,
  imports: [CommonModule],
  templateUrl: './http-cache.component.html',
  styleUrl: './http-cache.component.css'
})
export class HttpCacheComponent implements OnInit{
  

  post$: Observable<Post[]>|null = null;
  singlePost$: Observable<Post> |null = null;

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getPosts();
    this.addPost();
  }

  getPosts() {
    this.post$ =this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  }

  addPost() {
    this.singlePost$ =this.http.post<Post>(`https://jsonplaceholder.typicode.com/posts`, {title: 'test Post', body: 'test body'})
  }

  

}
