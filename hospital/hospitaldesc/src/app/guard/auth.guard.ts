import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
<<<<<<< HEAD
    if(!this.auth.isLoggedIn){
      this.route.navigate(['login'])
      return false;
    }
    return this.auth.isLoggedIn
    // return true
      
=======
    // if(!this.auth.isLoggedIn){
    //   this.route.navigate(['login'])
    //   return false;
    // }
    // return this.auth.isLoggedIn
      return true
>>>>>>> fef60b0c156c167e17fbe4c0b7059faa9a3565bd
  }
  
}
