import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error/pages/not-found/not-found.component';
import { LoginGuard } from './core/guards/login.guard';
import { LogoutGuard } from './core/guards/logout.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
    canActivate: [LogoutGuard]
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
