import { Injectable } from '@angular/core';
import { Project } from '../models/interface';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {



  projects: Project[]=[
    {id:0,name: 'Sample Html Css Project',summary: 'test description',description:'',projectLink:'https://ketnanuashvili.github.io/final-project/',tags:[Tag.HTML, Tag.CSS ], pictures: ["./../assets/htmlCssProject/1.jpg", "../assets/htmlCssProject/2.jpg", "../assets/htmlCssProject/3.jpg"]},
    {id:1,name: 'Sample Javascript Project',summary: 'test description',description:'',projectLink:'https://ketnanuashvili.github.io/js-project/',tags:[Tag.HTML, Tag.CSS,Tag.JAVASCRIPT  ],pictures:["./../assets/javascritCoffe/1.jpg", "../assets/javascritCoffe/2.jpg", "../assets/javascritCoffe/3.jpg"]},
    {id:2,name: 'Sample PHP App',summary: 'test description',description:'',projectLink:'https://github.com/KetNanuashvili/phpNumbers',tags:[Tag.PHP, ],pictures:["./../assets/phpNumbers/1.jpg", "../assets/phpNumbers/2.jpg", "../assets/phpNumbers/3.jpg"]},
    {id:3,name: 'Sample React App',summary: 'test description',description:'',projectLink:'https://github.com/KetNanuashvili/reactor2',tags:[Tag.REACT, Tag.TYPESCRIPT ],pictures:["./../assets/react/1.jpg", "../assets/react/2.jpg", "../assets/react/3.jpg"]},
    {id:4,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'https://github.com/KetNanuashvili/angular-project-1',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:["./../assets/angular/1.jpg", "../assets/angular/2.jpg", "../assets/angular/3.jpg"]},
    {id:5,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'https://github.com/KetNanuashvili/portfolio-angular',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:["./../assets/portfolio/1.webp", "../assets/portfolio/2.jpg", "../assets/portfolio/3.jpg"]},


  ];
  constructor() { }

  getProjects(){
    return this.projects;
  }
  getProjectById(id: number): Project{
    let project= this.projects.find(project => project.id===id);

    if(project===undefined){
      throw new TypeError ('error')
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filterProjects: Project[]=[];

    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag) ==false){
          foundAll = false
        }
      });
      if(foundAll){
        filterProjects.push(project)
      }
    });
    return filterProjects
  }
}
