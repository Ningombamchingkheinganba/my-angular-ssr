import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpCacheComponent } from './http-cache/http-cache.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ RouterOutlet,CommonModule, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-ssr-app';
  @ViewChild("element") element!: ElementRef;
  number = 26;
  isClicked = false;

  onClick() {
    this.isClicked = true
  }
}
