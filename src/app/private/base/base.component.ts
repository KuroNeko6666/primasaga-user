import { Component } from '@angular/core';
import { MENU } from 'src/app/config/menu.config';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigatorService } from 'src/app/shared/services/navigator.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  public sidebar: boolean = false
  public menu?: any

  constructor(
    private auth: AuthService,
    private nav: NavigatorService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.auth.logout()
    this.nav.menu.subscribe((res) => {
      console.log(res);

      this.menu = res
    })
    this.nav.initMenu()
  }

  openSidebar(){
    this.sidebar = !this.sidebar
  }

  collapseToggler(index: number, active: boolean){
    this.menu[index].active = active
  }

  logout(){
    this.auth.logout()
  }
}
