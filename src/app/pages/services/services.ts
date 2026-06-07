import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {

  services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Enterprise-grade applications tailored to your business needs.'
    },
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Modern responsive applications using Angular and .NET.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Azure cloud migration, architecture and optimization.'
    },
    {
      icon: '🔗',
      title: 'API Integration',
      description: 'Secure integration across business systems and platforms.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize legacy applications and business processes.'
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Intelligent automation solutions for improved productivity.'
    }
  ];

  process = [
    'Discover',
    'Plan',
    'Design',
    'Build',
    'Deploy',
    'Support'
  ];

}