import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Khalil Askri - Resume');

  }


  DownloadFile(){
      const link = this.renderer.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href',"assets/Khalil Askri RESUME.pdf");
      link.setAttribute('download','Khalil Askri RESUME.pdf');
      link.click();
      link.remove();
  
  }
  }


