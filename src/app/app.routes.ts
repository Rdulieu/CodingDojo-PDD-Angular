import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CreditCardsComponent } from './pages/credit-cards/credit-cards.component';
import { LoansComponent } from './pages/loans/loans.component';
import { ServicesComponent } from './pages/services/services.component';
import { PrivilegesComponent } from './pages/privileges/privileges.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InvestmentsComponent } from './pages/investments/investments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'credit-cards', component: CreditCardsComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'privileges', component: PrivilegesComponent },
  { path: 'settings', component: SettingsComponent },
];
