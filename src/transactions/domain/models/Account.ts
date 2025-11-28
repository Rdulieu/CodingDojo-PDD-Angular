export type AccountType = 'courant' | 'epargne';

export class Account {
  constructor(
    public readonly id: string,
    public readonly type: AccountType,
    public readonly label: string,
    public readonly balance: number,
  ) {
    if (balance < 0) {
      throw new Error('Account balance cannot be negative');
    }
  }

  getFormattedBalance(): string {
    return `${this.balance.toLocaleString('fr-FR')}€`;
  }

  getColor(): string {
    return this.type === 'courant' ? '#4F46E5' : '#34D399';
  }

  getDisplayLabel(): string {
    return this.type === 'courant' ? 'Compte courant' : 'Compte épargne';
  }
}
