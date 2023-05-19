import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {



  constructor(
    private fb: FormBuilder
  ) { }

  public group: FormGroup = this.fb.group({
    "username": ["", Validators.required],
    "password": ["", Validators.required],
  })

  get username() {
    return this.group.get("username")
  }

  get password() {
    return this.group.get("password")
  }

  public markAsTouched(): void {
    this.username?.markAllAsTouched()
    this.password?.markAllAsTouched()
  }

  public reset(): void {
    this.username?.reset()
    this.password?.reset()
  }
}
