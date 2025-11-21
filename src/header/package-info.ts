import { SharedKernel } from '../SharedKernel';

export interface HeaderContext extends SharedKernel {
  readonly name: 'Header';
  readonly description: 'Header bounded context handling page titles and header navigation';
}
