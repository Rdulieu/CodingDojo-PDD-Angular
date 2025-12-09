import { Routes } from '@angular/router';
import { HomeComponent } from './home/infrastructure/primary/home.component';
import { TransactionsComponent } from '../transactions/infrastructure/primary/transactions.component';
import { ProfileComponent } from '../profile/infrastructure/primary/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'profil', component: ProfileComponent },
];
