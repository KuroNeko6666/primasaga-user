import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

const LOREM = 'Lorem dolorum soluta laudantium nesciunt nihil ducimus pariatur distinctio odio earum voluptatibus atque, quo assumenda! Quisquam corporis assumenda minima dolorum sunt harum perspiciatis. Doloremque atque ut sint architecto illo, maiores veniam unde libero facere, distinctio error, totam iusto optio perspiciatis voluptatem. Dicta veritatis debitis, vel nihil aspernatur voluptatibus ut. Impedit dolorem explicabo vero illo assumenda neque esse obcaecati veritatis, accusamus ut provident eum sequi culpa quo repellat ad fuga optio? Modi mollitia porro molestias, ad necessitatibus nam deleniti eligendi magnam laboriosam praesentium accusamus maiores optio enim, voluptates fugiat neque culpa perspiciatis in! Illo accusantium perferendis dolor, nihil aperiam esse? Nihil neque, sapiente saepe porro error laboriosam esse.'

const TOP_PROFILES = [
  {
    name: "John",
    job: "Developer",
  },
  {
    name: "John 2",
    job: "Developer",
  },
  {
    name: "John 3",
    job: "Developer",
  },
  {
    name: "John 4",
    job: "Developer",
  },
  {
    name: "John 5",
    job: "Developer",
  },
  {
    name: "John 6",
    job: "Developer",
  },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lorem: string = LOREM
  index: number = 0
  translateSource = new Subject<any>()
  modalCreatePost: boolean = false
  viewMorePost: boolean = false

  data = TOP_PROFILES

  translate = this.translateSource.asObservable()

  openModalCreatePost(): void {
    this.modalCreatePost = !this.modalCreatePost
  }

  constructor() { }

  ngOnInit(): void {
    this.autoSlide()
  }

  viewMoreToggle(): void {
    this.viewMorePost = !this.viewMorePost
  }

  changeTop() {
    this.data.push(this.data.splice(0, 1)[0]);
  }

  slide(bool: boolean) {
    if (this.index == 3) {
      this.index = 0
    } else {
      if (bool) {
        this.index += 1
      } else {
        if (this.index == 0) {
          this.index = 3
        }
        this.index -= 1
      }
    }
    // let translate = '-translate-x-[' + ( (161.5 * this.index) + 15.5 ) + '%]'
    let translate = 'translate(-' + ( (161.5 * this.index) + 15.5 ) + 'px, 0)'

    this.translateSource.next(translate)
  }

  autoSlide(){
    setInterval(() => {
      this.slide(true)
    }, 3000)
  }

}
