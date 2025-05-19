import { CanActivateChildFn } from '@angular/router';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
  const userRole = getUserRole();
  if (userRole !=="admin") {
    alert("You dont't have access!");
    return false;
  }
  return true;
};

function getUserRole(): string {
  return "user";
}