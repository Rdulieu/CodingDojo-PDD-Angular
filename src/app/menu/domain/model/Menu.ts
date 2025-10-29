import { MenuItem } from './MenuItem';

/**
 * Represents a collection of menu items.
 */
export class Menu {
  constructor(private readonly items: MenuItem[]) {}

  /**
   * Gets all menu items.
   */
  getItems(): MenuItem[] {
    return [...this.items];
  }

  /**
   * Gets the total number of menu items.
   */
  getItemCount(): number {
    return this.items.length;
  }
}
