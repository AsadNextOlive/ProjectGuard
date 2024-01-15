import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { session } from '../Utils/session';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const router: Router = Inject(Router);
    const protectedRouts: string[] = ['/dashboard'];
    // return protectedRouts.includes(state.url) && !session ? router.navigate(['']): true;
    if (protectedRouts.includes(state.url) && !session) {
      return this.router.createUrlTree(['/login']);
    }
    return true;
    
  }


  // Modified Code
  // constructor(private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   const protectedRoutes: string[] = ['/dashboard'];

  //   if (protectedRoutes.includes(state.url) && !session) {
  //     // Redirect to login page if there is no session
  //     return this.router.createUrlTree(['/login']);
  //   }

  //   return true;
  // }
  
}
