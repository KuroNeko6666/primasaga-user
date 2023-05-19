import { Component, Input } from '@angular/core';
import { RegisterFormService } from './services/register-form.service';
import { RegisterService } from './services/register.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() public show?: boolean
  public role?: boolean = true
  public match?: boolean = true
  public loading: boolean = false

  private loadingSub?: Subscription

  constructor(
    public form: RegisterFormService,
    private service: RegisterService
  ){}

  ngOnInit(): void {
    this.loadingSub = this.service.loading.subscribe((res) => this.loading = res)
  }

  register(role: string): void {
    if (this.form.group.valid) {
      let data = {
        name : this.form.name?.value!,
        email : this.form.email?.value!,
        username : this.form.username?.value!,
        password : this.form.password?.value!,
        role : role,
      }
      this.service.register(data)
    } else {
      this.form.markAsTouched()
    }
  }

  changeRole(role: boolean): void {
    this.role = role
  }
}
