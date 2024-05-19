import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent {
  slides = [
    { image: 'assets/img/Slide1.jpg' },
    { image: 'assets/img/Slide2.png' },
    { image: 'assets/img/Slide3.jpg' }
  ];
}