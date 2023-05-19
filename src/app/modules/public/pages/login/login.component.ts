import { Component, Input } from '@angular/core';
import { LoginFormService } from './services/login-form.service';
import { LoginService } from './services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() public show?: boolean
  public loading: boolean = false
  private loadingSub?: Subscription

  constructor(
    public form: LoginFormService,
    private service: LoginService
  ){}

  ngOnInit(): void {
    this.loadingSub = this.service.loading.subscribe((res) => this.loading = res)
  }

  login(): void {
    if (this.form.group.valid) {
      let data = {
        username : this.form.username?.value!,
        password : this.form.password?.value!
      }
      this.service.login(data)
    } else {
      this.form.markAsTouched()
    }
  }

  ngOnDestroy(): void {
    this.loadingSub?.unsubscribe()
  }

}
