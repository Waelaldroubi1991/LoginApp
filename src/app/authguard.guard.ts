import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
//service import
import { UserService } from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService, private router:Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //  this.router.navigate(['/']); 
     // alert("You are not Authenticated");
    return this.user.getUserLoggedIn();
  }
} 
