import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpCacheComponent } from './http-cache/http-cache.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ HttpCacheComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-ssr-app';
}
