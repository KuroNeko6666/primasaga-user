import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InternalServerComponent } from './pages/internal-server/internal-server.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    InternalServerComponent
  ],
  exports: [
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorModule { }
