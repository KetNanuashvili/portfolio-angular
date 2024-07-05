import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../models/interface';
import { Tag } from '../../models/tag';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects ={} as  Project[];

  isCollapsed: boolean=true;
  typescript: boolean=false;
  angular: boolean=false;
  html:boolean=false;
  css: boolean=false;
  javascript: boolean=false;
  react: boolean=false;
  php:boolean=false;
  filtering: boolean=false;
  
  constructor(private titleService:Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Ketevan Nanuashvili- portfolio');
  }
  ngOnInit(): void {
    this.projects= this.projectsService.getProjects();
  }

  Filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.html){
      filterTags.push(Tag.HTML)
    }
    if(this.css){
      filterTags.push(Tag.CSS)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.php){
      filterTags.push(Tag.PHP)
    }

    if(this.php || this.typescript || this.angular ||  this.html || this.css || this.react || this.javascript){
      this.filtering =true;
    }else{
      this.filtering =false;
    }

    this.projects=this.projectsService.GetProjectsByFilter(filterTags);
  }

  ResetFilter(){
  this.typescript=false;
  this.angular=false;
  this.html=false;
  this.css=false;
  this.javascript=false;
  this.react=false;
  this.php=false;
  this.filtering=false;
  this.projects=this.projectsService.getProjects();
  }
}
