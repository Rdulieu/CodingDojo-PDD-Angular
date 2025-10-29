/**
 * Represents a menu item in the navigation menu.
 */
export class MenuItem {
  constructor(
    public readonly path: string,
    public readonly icon: string,
    public readonly label: string
  ) {}
}
