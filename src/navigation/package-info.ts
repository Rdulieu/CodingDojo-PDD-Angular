import { SharedKernel } from '../SharedKernel';

// This file marks the navigation package as a bounded context (SharedKernel for cross-cutting UI concerns)
export class NavigationContext extends SharedKernel {}
