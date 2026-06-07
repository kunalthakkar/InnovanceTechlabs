import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {

  capabilities = [
    {
      title: 'Enterprise Applications',
      desc: 'Scalable software solutions designed for business growth.'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Azure cloud architecture, migration and modernization.'
    },
    {
      title: 'Web Development',
      desc: 'Modern Angular and .NET web applications.'
    },
    {
      title: 'API Integration',
      desc: 'Secure integrations across enterprise systems.'
    },
    {
      title: 'Digital Transformation',
      desc: 'Modernizing processes and technology platforms.'
    },
    {
      title: 'AI & Automation',
      desc: 'Intelligent business automation solutions.'
    }
  ];

}