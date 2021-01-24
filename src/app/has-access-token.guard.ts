import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialsService } from './auth';

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanLoad {
  constructor(private router: Router, private credentialsService: CredentialsService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.hasAccessToken();
  }

  hasAccessToken() {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }
}
