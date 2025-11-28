import { Injectable } from '@angular/core';
import { ITransactionRepository } from '../../../application/repositories/ITransactionRepository';
import { Account } from '../../../domain/models/Account';
import { Transaction } from '../../../domain/models/Transaction';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTransactionRepository implements ITransactionRepository {
  private accounts: Account[] = [
    new Account('1', 'courant', 'Compte courant', 5756),
    new Account('2', 'epargne', 'Compte épargne', 5756),
  ];

  private transactions: Transaction[] = [
    new Transaction('1', 'Cloth&Co', '#12548796', 'Shopping', 'courant', new Date('2025-03-28'), -2500),
    new Transaction('2', 'Freepik Sales', '#12548796', 'Virement', 'courant', new Date('2025-02-25'), 750),
    new Transaction('3', 'Mobile Service', '#12548796', 'Service', 'courant', new Date('2025-01-20'), -150),
    new Transaction('4', 'Wilson', '#12548796', 'Virement', 'courant', new Date('2025-01-15'), -1050),
    new Transaction('5', 'Emilly', '#12548796', 'Virement', 'courant', new Date('2025-01-14'), 840),
    new Transaction('6', 'Emilly', '#12548796', 'Virement', 'epargne', new Date('2025-01-14'), 840),
  ];

  async getAccounts(): Promise<Account[]> {
    return Promise.resolve([...this.accounts]);
  }

  async getRecentTransactions(limit: number = 10): Promise<Transaction[]> {
    return Promise.resolve([...this.transactions].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, limit));
  }
}
