import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './private-routing.module';
import { BaseComponent } from './base/base.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TopProfileComponent } from './components/top-profile/top-profile.component';


@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent,
    JobsComponent,
    ProjectComponent,
    ProjectsComponent,
    TopProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class PrivateModule { }
