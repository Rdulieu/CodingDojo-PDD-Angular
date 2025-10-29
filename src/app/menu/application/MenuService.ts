import { MenuItem } from '../domain/model/MenuItem';
import { MenuPresenter } from '../domain/port/primary/MenuPresenter';
import { MenuProvider } from '../domain/port/secondary/MenuProvider';

/**
 * Application service that implements the MenuPresenter port
 * and coordinates between the UI and the data source.
 */
export class MenuService implements MenuPresenter {
  private activeMenuItemPath: string = '/dashboard'; // Default active path

  constructor(private readonly menuProvider: MenuProvider) {}

  /**
   * Gets all menu items for presentation.
   */
  getMenuItems(): MenuItem[] {
    const menu = this.menuProvider.getMenu();
    return menu.getItems();
  }

  /**
   * Gets the active menu item path.
   */
  getActiveMenuItemPath(): string {
    return this.activeMenuItemPath;
  }

  /**
   * Sets the active menu item path.
   */
  setActiveMenuItemPath(path: string): void {
    this.activeMenuItemPath = path;
  }
}
