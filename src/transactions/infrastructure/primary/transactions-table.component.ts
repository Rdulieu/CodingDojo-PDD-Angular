import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Transaction } from '../../domain/models/Transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrl: './transactions-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  transactions = input.required<Transaction[]>();
}
