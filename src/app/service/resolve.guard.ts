import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataService } from './data.service';

export const resolveGuard: ResolveFn<any> = (route, state) => {
  const dataService = inject(DataService);
  return dataService.getData();
};