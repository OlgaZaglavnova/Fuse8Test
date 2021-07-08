import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'details/:id',
    component: ProjectDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
