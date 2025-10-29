import { MenuItem } from '../../model/MenuItem';

/**
 * Primary port for presenting menu items to the UI.
 */
export interface MenuPresenter {
  /**
   * Gets all menu items for presentation.
   */
  getMenuItems(): MenuItem[];

  /**
   * Gets the active menu item path.
   */
  getActiveMenuItemPath(): string;

  /**
   * Sets the active menu item path.
   */
  setActiveMenuItemPath(path: string): void;
}
