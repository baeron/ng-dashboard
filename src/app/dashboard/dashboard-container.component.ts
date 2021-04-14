import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router } from '@angular/router'

import { filter, first, map } from 'rxjs/operators';

interface Link {
  label: string
  link: string
  index: number
}
@Component({
  selector: 'app-dashboard-container',
  template: `<main class="wrapper">
    <nav class="main-nav">
      <nav mat-tab-nav-bar>
        <a
          mat-tab-link
          *ngFor="let link of navLinks"
          [routerLink]="link.link"
          routerLinkActive
          #rla="routerLinkActive"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          {{ link.label }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </nav>
  </main>`,
  styles: [
    `
      .wrapper {
        display: grid;
        grid-gap: 20px;
        grid-template-areas: 'nav';
      }
      .main-nav {
        grid-area: nav;
      }
    `,
  ],
})
export class DashboardContainer implements OnInit {
  navLinks: Link[] | any
  activeLinkIndex = -1
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: '/home',
        index: 0,
      },
      {
        label: 'Mainline-health',
        link: '/health',
        index: 1,
      },
      {
        label: 'Build details',
        link: '/details',
        index: 2,
      },
    ]
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map(() => this.router.routerState.root),
      first()
    ).subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(
          (tab: { link: string }) => tab.link === '.' + this.router.url
        )
      )
    })
  }
}
