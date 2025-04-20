import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  menuOpen = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scroller: ViewportScroller
  ) {}

  scrollTo(fragment: string) {
    this.menuOpen = false;
    this.router.navigate([], { fragment }).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor(fragment), 0);
    });
  }

}
