import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  public mode: boolean = true

  constructor(
  ){}

  changeMode(mode: boolean): void {
    this.mode = mode
  }



}
