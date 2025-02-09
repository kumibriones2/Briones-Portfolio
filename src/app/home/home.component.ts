import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const textElement = document.getElementById('typing-text') as HTMLElement;
    const text = "A passionate IT student and aspiring Web Developer.";
    let index = 0;

    function typeText() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80); 
      }
    }
    typeText();
  }
}
