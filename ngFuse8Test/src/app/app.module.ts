import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
