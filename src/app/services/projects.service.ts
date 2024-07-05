import { Injectable } from '@angular/core';
import { Project } from '../models/interface';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {



  projects: Project[]=[
    {id:0,name: 'Sample Html Css App',pictures: ["./../assets/htmlCssProject/1.jpg", "../assets/htmlCssProject/2.jpg", "../assets/htmlCssProject/3.jpg"],summary: 'test description',description:'',projectLink:'',tags:[Tag.HTML, Tag.CSS ]},
    {id:1,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.HTML, Tag.CSS,Tag.JAVASCRIPT  ],pictures:[]},
    {id:2,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.PHP, ],pictures:[]},
    {id:3,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.REACT, Tag.TYPESCRIPT ],pictures:[]},
    {id:4,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},
    {id:5,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},


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
