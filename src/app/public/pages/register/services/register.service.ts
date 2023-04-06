import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private loadingSource: Subject<boolean> = new Subject<boolean>()
  private registerSub?: Subscription

  public loading = this.loadingSource.asObservable()

  constructor(
    private api: AuthService
  ) { }

  register(data: any): void {
    this.loadingSource.next(true)
    this.registerSub = this.api.register(data).subscribe({
      next: (val) => {
        this.loadingSource.next(false)
        console.log(val);
      },
      error: (err) => {
        this.loadingSource.next(false)
        console.log(err);
        // error handler
      }
    })
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.registerSub?.unsubscribe()
  }
}
