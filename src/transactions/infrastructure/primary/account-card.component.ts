import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Account } from '../../domain/models/Account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCardComponent {
  account = input.required<Account>();
}
