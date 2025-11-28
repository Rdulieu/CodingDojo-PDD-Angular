import { BusinessContext } from '../BusinessContext';

export interface TransactionsContext extends BusinessContext {
  readonly name: 'Transactions';
  readonly description: 'Transactions bounded context handling accounts and transaction management';
}
