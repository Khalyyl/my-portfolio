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
    {id: 4, name: "Employee Stepper App ", pictures: ["assets/employee_stepper_app/cap1_stepper.png","assets/employee_stepper_app/cap2.png"," assets/employee_stepper_app/cap3.png"], projectLink: "https://github.com/Khalyyl/employee_stepper_app_angular", summary: "Angular App Employee Stepper", description: "Angular App Employee Stepper", tags: [Tag.ANGULAR,Tag.TYPESCRIPT]},
    {id: 5, name: "Scheduler App ", pictures: ["assets/ProjetDjangoSchedular/cap1Projet5.png","assets/ProjetDjangoSchedular/cap2Projet5.png","assets/ProjetDjangoSchedular/cap3Projet5.png", "assets/ProjetDjangoSchedular/cap4Projet5.png", "assets/ProjetDjangoSchedular/cap5Projet5.png"],
      projectLink: "https://github.com/Khalyyl/Schedule-DjangoProject", 
      summary: "Scheduler App for teachers",
      description: "This project is a Django-based scheduling application for managing teacher assignments and session schedules. It includes features for importing teacher and session data from Excel files, running scheduling algorithms, and exporting schedules as Excel or PDF files.", 
      tags: [Tag.DJANGO,Tag.ELECTRON]},
      {
        id: 6,
        name: "Symfony Project",
        pictures: [
        "assets/SymfonyProjectArticles/project6cap1.png",
        "assets/SymfonyProjectArticles/project6cap2.png",
        "assets/SymfonyProjectArticles/project6cap3.png",
        "assets/SymfonyProjectArticles/project6cap4.png"
        ],
        projectLink: "https://github.com/Khalyyl/projet_Symfony",
        summary: "Symfony Project",
        description: "This project is a simple Symfony application that allows managing articles through a CRUD system (Create, Read, Update, Delete).",
        tags: [Tag.SYMFONY]
        }
      

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
