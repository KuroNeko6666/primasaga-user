import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MENU } from 'src/app/config/menu.config';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  private menuSource = new Subject<any>()
  public menu = this.menuSource.asObservable()

  constructor(
    private router: Router
  ) { }

  initMenu(){
    let url = this.router.url
    this.setMenu(url)
  }

  setMenu(url: string){
    let data = MENU
    data.map((res) => {
      if (res.path == url || (url.includes(res.path) && res.children.length > 0)){
        res.active = true
        if(res.children.length > 0){
          res.children.map((sub) => {
            if (sub.path == url) {
              sub.active = true
            }
          })
        }
      }
    })
    this.menuSource.next(data)
  }

  navigateTo(url : string): void {
    this.router.navigateByUrl(url).then((res) => {
      if(res){
        this.setMenu(url)
      }
    })
  }

}
