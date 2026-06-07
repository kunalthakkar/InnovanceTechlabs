import { Component, OnInit, OnDestroy ,ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
constructor(private cdr: ChangeDetectorRef) {}

currentSlide = 0;
  intervalId: any;

  slides = [
    {
      image: 'assets/images/slides/slide1.jpg',
      title: 'Transforming Businesses Through Technology',
      description: 'Custom software, cloud and enterprise solutions.'
    },
    {
      image: 'assets/images/slides/slide2.jpg',
      title: 'Modern Web Application Development',
      description: 'Angular, .NET Core and Azure solutions.'
    },
    {
      image: 'assets/images/slides/slide3.jpg',
      title: 'Cloud & Digital Transformation',
      description: 'Helping businesses scale faster with cloud technologies.'
    },
    {
      image: 'assets/images/slides/slide4.jpg',
      title: 'Your Trusted Technology Partner',
      description: 'From idea to production and ongoing support.'
    }
  ];

  technologies = [
  {
    name: 'Angular',
    image: 'assets/images/technologies/angular.png',
    category: 'Frontend'
  },
  {
    name: '.NET Core',
    image: 'assets/images/technologies/dotnet.png',
    category: 'Backend'
  },
  {
    name: 'Azure',
    image: 'assets/images/technologies/azure.png',
    category: 'Cloud'
  },
  {
    name: 'SQL Server',
    image: 'assets/images/technologies/sqlserver.png',
    category: 'Database'
  },
  {
    name: 'React',
    image: 'assets/images/technologies/react.png',
    category: 'Frontend'
  },
  {
    name: 'Docker',
    image: 'assets/images/technologies/docker.png',
    category: 'DevOps'
  },
  {
    name: 'GitHub',
    image: 'assets/images/technologies/github.png',
    category: 'Source Control'
  }
];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {

  this.intervalId = setInterval(() => {

    this.currentSlide =
      (this.currentSlide + 1) %
      this.slides.length;

    this.cdr.detectChanges();

  }, 2000);

}

  nextSlide(): void {

    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;

      console.log('Current Slide:', this.currentSlide);

  }

  previousSlide(): void {

    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) %
      this.slides.length;

  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}