import { Component, OnInit, OnDestroy, InjectionToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuPresenter } from '../../domain/port/primary/MenuPresenter';
import { MenuService } from '../../application/MenuService';
import { StaticMenuProvider } from '../secondary/StaticMenuProvider';
import { MenuItem } from '../../domain/model/MenuItem';

// Create an injection token for the MenuPresenter interface
export const MENU_PRESENTER = new InjectionToken<MenuPresenter>('MenuPresenter');

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [
    StaticMenuProvider,
    { provide: MenuService, useFactory: (provider: StaticMenuProvider) => new MenuService(provider), deps: [StaticMenuProvider] },
    { provide: MENU_PRESENTER, useExisting: MenuService }
  ]
})
export class MenuComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  private routerSubscription: Subscription | undefined;

  constructor(
    private readonly router: Router,
    @Inject(MENU_PRESENTER) private readonly menuPresenter: MenuPresenter
  ) {}

  ngOnInit(): void {
    // Load menu items
    this.menuItems = this.menuPresenter.getMenuItems();

    // Set initial active link based on current URL
    this.menuPresenter.setActiveMenuItemPath(this.router.url);

    // Subscribe to router events to update active link when navigation occurs
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.menuPresenter.setActiveMenuItemPath(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Determines if a menu item is active based on its path.
   */
  isActive(path: string): boolean {
    return this.menuPresenter.getActiveMenuItemPath() === path;
  }
}
