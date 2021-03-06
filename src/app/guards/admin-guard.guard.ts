import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is not login
    let access = localStorage.getItem('access_token');
    if (!access) {
      this.router.navigate(['/login']);
      return true;
    } else if (access) {
      if (!Object.keys(access).length) {
        this.router.navigate(['/login']);
        return true;
      }
    }
    return true;
  }
}
