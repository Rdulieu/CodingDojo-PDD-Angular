import { AccountType } from './Account';

export type TransactionType = 'Shopping' | 'Virement' | 'Service';

export class Transaction {
  constructor(
    public readonly id: string,
    public readonly description: string,
    public readonly identifier: string,
    public readonly type: TransactionType,
    public readonly accountType: AccountType,
    public readonly date: Date,
    public readonly amount: number,
  ) {
    if (amount === 0) {
      throw new Error('Transaction amount cannot be zero');
    }
  }

  isDebit(): boolean {
    return this.amount < 0;
  }

  isCredit(): boolean {
    return this.amount > 0;
  }

  getFormattedAmount(): string {
    const formattedNumber = Math.abs(this.amount).toLocaleString('fr-FR');
    return this.isCredit() ? `+${formattedNumber}€` : `-${formattedNumber}€`;
  }

  getAmountColor(): string {
    return this.isCredit() ? '#10B981' : '#EF4444';
  }

  getFormattedDate(): string {
    return this.date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  getAccountLabel(): string {
    return this.accountType === 'courant' ? 'Compte courant' : 'Compte épargne';
  }
}
