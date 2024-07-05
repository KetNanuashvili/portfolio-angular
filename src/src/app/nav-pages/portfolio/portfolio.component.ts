import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../models/interface';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: Project[]=[
    {id:0,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},
    {id:0,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},
    {id:0,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},
    {id:0,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},
    {id:0,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},
    {id:0,name: 'Sample Angular App',summary: 'test description',description:'',projectLink:'',tags:[Tag.ANGULAR, Tag.TYPESCRIPT ],pictures:[]},


  ];

  constructor(private titleService:Title){
    this.titleService.setTitle('Ketevan Nanuashvili- portfolio');
  }
}
