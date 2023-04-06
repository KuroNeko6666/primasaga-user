import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginModel } from 'src/app/shared/models/login.model';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loadingSource: Subject<boolean> = new Subject<boolean>()
  public loading = this.loadingSource.asObservable()

  private loginSub?: Subscription

  constructor(
    private api: AuthService,
    private router: Router
  ) { }

  login(data: any): void {
    this.loadingSource.next(true)
    this.loginSub = this.api.login(data).subscribe({
      next: (val) => {
        console.log(val);
        this.loadingSource.next(false)
        this.setLocal(val.data!)
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        this.loadingSource.next(false)
        console.log(err);
        // error handler
      }
    })
  }

  setLocal(data: LoginModel): void {
    localStorage.setItem("token", data.token!)
    localStorage.setItem("user", JSON.stringify(data.user!))
  }

  ngOnDestroy(): void {
    this.loginSub?.unsubscribe()
  }
}
