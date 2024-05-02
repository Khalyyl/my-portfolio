import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects: Project [] = [
    {id: 0, name: "Sample Angular App", pictures: ["../../assets/AngularPic/image1.png","../../assets/AngularPic/image2.png"], projectLink: "https://github.com/Khalyyl/FoodApp", summary: "Food Application", description: "Lorem ipsum dolor sit amet", tags: [Tag.ANGULAR,Tag.TYPESCRIPT]},
    {id: 1, name: "Sample Python Project", pictures: ["../../assets/Image1.png"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet", tags: [Tag.PYTHON]},
    {id: 2, name: "Sample Python Project", pictures: ["../../assets/Image1.png"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet", tags: [Tag.PYTHON]}

  ];

  constructor() {}

    GetProjects(){
      return this.projects
    }

    GetProjectById(id: number): Project {
      let project = this.projects.find(project => project.id === id);
    
      if (project === undefined) {
        throw new TypeError("There is no project that matches the id:" + id);
      }
    
      return project;
    }
    
   
}
