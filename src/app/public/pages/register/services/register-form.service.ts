import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public group: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "email": ["", [Validators.required, Validators.email]],
    "username": ["", Validators.required],
    "password": ["", [Validators.required, Validators.minLength(8)]],
    "allow": [false],
  })

  get name() {
    return this.group.get("name")
  }

  get email() {
    return this.group.get("email")
  }

  get username() {
    return this.group.get("username")
  }

  get password() {
    return this.group.get("password")
  }

  get allow() {
    return this.group.get("allow")
  }


  public markAsTouched(): void {
    this.name?.markAllAsTouched()
    this.email?.markAllAsTouched()
    this.username?.markAllAsTouched()
    this.password?.markAllAsTouched()
    this.allow?.markAllAsTouched()
  }

  public reset(): void {
    this.name?.reset()
    this.email?.reset()
    this.username?.reset()
    this.password?.reset()
    this.allow?.reset()
  }
}
