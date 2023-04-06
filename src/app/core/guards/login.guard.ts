import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BaseModel } from 'src/app/shared/models/base.model';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(
    private auth: AuthService,
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.check()){
        return true
      } else {
        this.router.navigateByUrl("/login")
        return false
      }
    // return this.auth.check().pipe(
    //   map((res: BaseModel<string>) => {


    //     if(res.message != "unauthorized") {
    //       return true;
    //     } else {
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //   })
    // )
  }

}
