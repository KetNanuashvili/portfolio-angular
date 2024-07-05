import { Component, Input } from '@angular/core';
import { Project } from '../../../models/interface';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../../../modals/project/project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService:BsModalService){

  }
  OenProjectModal(){
    const modalOptions: ModalOptions={
      class: 'modal-lg',
      initialState:{
        project: this.project
      }
    }
    this.bsModalRef=this.modalService.show(ProjectModalComponent, modalOptions)
  }

}
