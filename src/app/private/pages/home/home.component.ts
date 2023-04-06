import { Component } from '@angular/core';

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
  top: any[] = TOP_PROFILES
  index: number = 0
  translate?: string
  translateNum: number = 0
  modalCreatePost: boolean = false
  viewMorePost: boolean = false

  openModalCreatePost(): void {
    this.modalCreatePost = !this.modalCreatePost
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.autoChangeTranslate()
  }

  viewMoreToggle(): void {
    this.viewMorePost = !this.viewMorePost
  }

  increase() {
    this.index += 1
  }

  autoChangeTranslate() {
    setInterval(() => this.changeTranslate(), 3000)
  }

  changeTranslate() {
    if (this.index == this.top.length) {
      this.index = 0

    }
    this.index += 1

    this.translateNum = 120
    let decrease = 15
    let now
    if (this.index == 1) {
      now = this.index * this.translateNum
    } else if (this.index == 0) {
      now = 0
    } else {
      now = (this.index * this.translateNum) - (decrease * this.index) + 15
    }

    let trans = '-translate-x-[' + now + '%]'

    this.translate = trans
  }


}
