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

  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 1;

  allTags = [
    Tag.ANGULAR,
    Tag.TYPESCRIPT,
    Tag.PYTHON,
    Tag.JAVA,
    Tag.JAVASCRIPT,
    Tag.REACT,
    Tag.TALEND,
    Tag.POWERBI,
    Tag.DJANGO,
    Tag.ELECTRON,
    Tag.SYMFONY
  ];

  constructor(private titleService: Title, private projectService : ProjectsService ){
    this.titleService.setTitle('Khalil Askri - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
    this.filteredProjects = this.projects;
    this.updatePagination();
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
    this.currentPage = 1;
    this.updatePagination();
  }

  isTagSelected(tag: Tag): boolean {
    return this.selectedTags.includes(tag);
  }

  get pagedProjects(): Project[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredProjects.slice(startIndex, startIndex + this.pageSize);
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProjects.length / this.pageSize);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {



      this.currentPage--;
    }
  }
  
}