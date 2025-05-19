import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userRole = getUserRole();
  const router = inject(Router);

  if(userRole !== "admin") {
    router.navigate(['access-denied']);
  }
  return true;
};

function getUserRole(): string {
  return "admin";
}