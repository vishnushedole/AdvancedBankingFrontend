import { Router,ActivatedRouteSnapshot, CanActivateFn ,RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  
  const router:Router = inject(Router);
  var session = window.sessionStorage.getItem("token");
  

  return session!=undefined?true:router.navigate(['/']);
};
