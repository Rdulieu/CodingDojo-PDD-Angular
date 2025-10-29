import { Injectable } from '@angular/core';
import { Menu } from '../../domain/model/Menu';
import { MenuItem } from '../../domain/model/MenuItem';
import { MenuProvider } from '../../domain/port/secondary/MenuProvider';

/**
 * Secondary adapter that provides static menu items.
 */
@Injectable({
  providedIn: 'root'
})
export class StaticMenuProvider implements MenuProvider {
  /**
   * Gets the menu with all available menu items.
   */
  getMenu(): Menu {
    const menuItems = [
      new MenuItem('/dashboard', 'dashboard', 'Dashboard'),
      new MenuItem('/accounts', 'person', 'Accounts'),
      new MenuItem('/transactions', 'swap_horiz', 'Transactions'),
      new MenuItem('/investments', 'trending_up', 'Investments'),
      new MenuItem('/credit-cards', 'credit_card', 'Credit Cards'),
      new MenuItem('/loans', 'account_balance', 'Loans'),
      new MenuItem('/services', 'handyman', 'Services'),
      new MenuItem('/privileges', 'star', 'My Privileges'),
      new MenuItem('/settings', 'settings', 'Setting')
    ];

    return new Menu(menuItems);
  }
}
