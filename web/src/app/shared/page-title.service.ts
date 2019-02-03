import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable()
export class PageTitleService {
  private readonly base = '2choix.com';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  /**
   * Subscribe to NavigationEnd Routing event
   * and fetch the title from the data object, if it was set.
   * Works with child routes
   */
  public init() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          // Go through tree and find last used route
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(data => {
        this.setTitle(data['title']);
      });
  }

  /**
   * Change current page title
   * @param newTitle the new title to set
   */
  public setTitle(newTitle: string) {
    this.titleService.setTitle(this.base + (newTitle ? ' | ' + newTitle : ''));
  }
}
