import { MenuComponent } from './menu.component';
import { MENU_PRESENTER } from './menu.component';
import { StaticMenuProvider } from '../secondary/StaticMenuProvider';
import { MenuService } from '../../application/MenuService';
import { mount } from 'cypress/angular';

describe('MenuComponent', () => {
  it('should mount', () => {
    mount(MenuComponent, {
      providers: [
        StaticMenuProvider,
        { provide: MenuService, useFactory: (provider: StaticMenuProvider) => new MenuService(provider), deps: [StaticMenuProvider] },
        { provide: MENU_PRESENTER, useExisting: MenuService }
      ]
    });

    // Check if the component was created and rendered
    cy.get('.sidebar').should('exist');
    cy.get('.logo-text').should('contain.text', 'BankDash');

    // Verify menu items are rendered
    cy.get('.nav-menu li').should('have.length.at.least', 8);
    cy.get('.nav-menu li').first().should('contain.text', 'Dashboard');
  });
});
