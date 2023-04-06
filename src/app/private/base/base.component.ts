import { Component } from '@angular/core';
import { MENU } from 'src/app/config/menu.config';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  public sidebar: boolean = false
  public menu = MENU

  constructor(
    private auth: AuthService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.auth.logout()
  }

  openSidebar(){
    this.sidebar = !this.sidebar
  }

  collapseToggler(index: number, active: boolean){
    this.menu[index].active = active
  }
}
