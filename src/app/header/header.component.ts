import { Component, ElementRef, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isMenuOpen = false;
  isDark = false;

  constructor(private router: Router, private eRef: ElementRef) {}

  clickAdmin() {
      this.router.navigate(['/admin']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    if (!this.isDark) {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    } else {
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    }
  }

  // @HostListener("document:click", ["$event"])
  //   onEvent(event: MouseEvent): void {
  //     if (event.type === "click" && !this.eRef.nativeElement.contains(event.target)) {
  //           this.isMenuOpen = false;
  //     }
  //   }

}
