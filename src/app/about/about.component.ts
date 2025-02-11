import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // Popup image
  showPopup: boolean = false; 

  openPopup(): void {
    this.showPopup = true; 
  }

  closePopup(): void {
    this.showPopup = false;
  }

//KUMI card
  services = [
    { letter: 'K', description: 'Kreative Thinker', details: ' I love finding innovative solutions and thinking outside the box. Whether it’s designing, problem-solving, or creating something new, creativity fuels my passion.', showDetails: false },
    { letter: 'U', description: 'User-Centered', details: 'I focus on making things better for people. Whether it’s a website, a product, or an experience, I believe in designing with the end user in mind.', showDetails: false },
    { letter: 'M', description: 'Multi-Talented', details: 'I have a deep passion for tech and design, always exploring new ideas and enhancing my skills to bring creative visions to life.', showDetails: false },
    { letter: 'I', description: 'Innovative', details: ' I embrace change and love experimenting with new ideas, trends, and technologies. Always looking for ways to improve and make a difference.', showDetails: false }
  ];

  toggleDropdown(index: number) {
    this.services[index].showDetails = !this.services[index].showDetails;
  }

// timeline
  journeySteps = [
    { year: 'Grade 6', description: 'First learned HTML, sparking my interest in computers.' },
    { year: 'Grade 7', description: 'Studied more HTML, hardware, and built extension cords.' },
    { year: 'Grade 8', description: 'Explored CSS and styling web pages.' },
    { year: 'Grade 9', description: 'Learned Visual Basic, disassembling, and assembling system units.' },
    { year: 'Grade 10', description: 'Dived into PHP and backend development.' },
    { year: 'Senior High', description: 'Chose cookery but got interested in game design during the pandemic.' },
    { year: 'College', description: 'Returned to IT, specializing in Web Development.' }
  ];
}
