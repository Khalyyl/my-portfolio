import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  // Une variable qui permettre de savoir si notre section de filtrage est reduite ou non
  isCollapsed: boolean = true;


    

    constructor(private titleService: Title, private projectService : ProjectsService ){
    this.titleService.setTitle('Khalil Askri - Portfolio');
    }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }



  
}