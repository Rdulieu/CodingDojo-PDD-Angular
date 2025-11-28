import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit } from '@angular/core';
import { AccountCardComponent } from './account-card.component';
import { TransactionsTableComponent } from './transactions-table.component';
import { InMemoryTransactionRepository } from '../secondary/repositories/InMemoryTransactionRepository';
import { Account } from '../../domain/models/Account';
import { Transaction } from '../../domain/models/Transaction';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrl: './transactions-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccountCardComponent, TransactionsTableComponent],
})
export class TransactionsPageComponent implements OnInit {
  private repository = inject(InMemoryTransactionRepository);

  accounts = signal<Account[]>([]);
  transactions = signal<Transaction[]>([]);

  currentAccount = computed(() => this.accounts().find(account => account.type === 'courant'));
  savingsAccount = computed(() => this.accounts().find(account => account.type === 'epargne'));

  async ngOnInit(): Promise<void> {
    try {
      const [accountsData, transactionsData] = await Promise.all([
        this.repository.getAccounts(),
        this.repository.getRecentTransactions(10),
      ]);

      this.accounts.set(accountsData);
      this.transactions.set(transactionsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
}
