import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './nav-pages/portfolio/portfolio.component';
import { ResumeComponent } from './nav-pages/resume/resume.component';
import { ContactComponent } from './nav-pages/contact/contact.component';
import { HomeComponent } from './nav-pages/home/home.component';
import { ProjectCardComponent } from './nav-pages/portfolio/project-card/project-card.component';
import{ModalModule}from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './modals/project/project-modal/project-modal.component'
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule ,
    AccordionModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }