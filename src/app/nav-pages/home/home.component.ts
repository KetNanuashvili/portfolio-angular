import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featureProject={} as Project;
constructor(private titleService:Title, private projectsService: ProjectsService){
  this.titleService.setTitle('Ketevan Nanuashvili- Home');
}
  ngOnInit(): void {
    this.featureProject=this.projectsService.getProjectById(0);
  }
}
