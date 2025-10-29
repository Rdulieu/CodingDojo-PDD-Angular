import { Menu } from '../../model/Menu';

/**
 * Secondary port for providing menu data.
 */
export interface MenuProvider {
  /**
   * Gets the menu with all available menu items.
   */
  getMenu(): Menu;
}
