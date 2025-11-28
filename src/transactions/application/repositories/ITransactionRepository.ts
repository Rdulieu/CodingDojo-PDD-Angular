import { Account } from '../../domain/models/Account';
import { Transaction } from '../../domain/models/Transaction';

export interface ITransactionRepository {
  getAccounts(): Promise<Account[]>;
  getRecentTransactions(limit: number): Promise<Transaction[]>;
}
