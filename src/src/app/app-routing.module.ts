import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './nav-pages/home/home.component';
import { ContactComponent } from './nav-pages/contact/contact.component';
import { ResumeComponent } from './nav-pages/resume/resume.component';
import { PortfolioComponent } from './nav-pages/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'resume', component:ResumeComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: '**', component:HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
