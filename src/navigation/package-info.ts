import { SharedKernel } from '../SharedKernel';

export interface NavigationContext extends SharedKernel {
  readonly name: 'Navigation';
  readonly description: 'Navigation bounded context handling menu and routing';
}
