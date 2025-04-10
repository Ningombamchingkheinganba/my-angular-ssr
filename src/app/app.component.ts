import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpCacheComponent } from './http-cache/http-cache.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-angular-ssr-app';
  @ViewChild("element") element!: ElementRef;

  ngOnInit(): void {
    console.log(this.element);
    
  }
}
