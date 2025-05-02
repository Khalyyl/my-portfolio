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

  projects = [] as Project[];
  filteredProjects = [] as Project[];
  selectedTags = [] as Tag[];
  // Une variable qui permettre de savoir si notre section de filtrage est reduite ou non
  isCollapsed: boolean = true;

  allTags = [
    Tag.ANGULAR,
    Tag.TYPESCRIPT,
    Tag.PYTHON,
    Tag.JAVA,
    Tag.JAVASCRIPT,
    Tag.REACT,
    Tag.TALEND,
    Tag.POWERBI
  ];

  constructor(private titleService: Title, private projectService : ProjectsService ){
    this.titleService.setTitle('Khalil Askri - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
    this.filteredProjects = this.projects;
  }

  toggleTagSelection(tag: Tag): void {
    const index = this.selectedTags.indexOf(tag);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.filterProjects();
  }

  filterProjects(): void {
    if (this.selectedTags.length === 0) {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.tags.some(tag => this.selectedTags.includes(tag))
      );
    }
  }

  isTagSelected(tag: Tag): boolean {
    return this.selectedTags.includes(tag);
  }



  
}