import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects: Project [] = [
    {id: 0, name: "Sample Angular App", pictures: ["assets/AngularPic/image1.png","assets/AngularPic/image2.png"], projectLink: "https://github.com/Khalyyl/FoodApp", summary: "Food Application", description: "A dynamic food application built with Angular and TypeScript that allows users to browse, search, and order food items.", tags: [Tag.ANGULAR,Tag.TYPESCRIPT]},
    {id: 1, name: "Sample Python Project", pictures: ["assets/AppManagment/AppManagment.png"], projectLink: "https://github.com/Khalyyl/ProductManagementApp", summary: "Product App Managment", description: "Python project that analyzes stock market data", tags: [Tag.PYTHON]},
    {id: 2, name: "Mobile App", pictures: ["assets/MobileApp/cap1.png","assets/MobileApp/cap2.png","assets/MobileApp/cap3.png","assets/MobileApp/cap5.png","assets/MobileApp/cap4.png"], projectLink: "", summary: "Mobile Application", description: " CarAppointment is designed to make your experience with car dealerships as smooth and pleasant as possible.", tags: [Tag.JAVA]},
    {id: 3, name: "BI Project", pictures: ["assets/BI Project/cap_Home.png","assets/BI Project/cap2.png"," assets/BI Project/cap3.png"], projectLink: "//www.github.com", summary: "BI Project", description: "●	Advanced Design and development of a business intelligence solution for production analysis and control.", tags: [Tag.TALEND,Tag.POWERBI]},
    {id: 4, name: "Employee Stepper App ", pictures: ["assets/employee_stepper_app/cap1_stepper.png","assets/employee_stepper_app/cap2.png"," assets/employee_stepper_app/cap3.png"], projectLink: "https://github.com/Khalyyl/employee_stepper_app_angular", summary: "Angular App Employee Stepper", description: "Angular App Employee Stepper", tags: [Tag.ANGULAR,Tag.TYPESCRIPT]}


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
