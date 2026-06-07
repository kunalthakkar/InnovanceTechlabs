import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  image: string;
  category: 'Web' | 'Mobile' | 'Cloud';
  link: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {

  searchText: string = '';
  selectedCategory: 'All' | 'Web' | 'Mobile' | 'Cloud' = 'All';

  projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack shopping platform with cart, payment gateway, and admin dashboard.',
    image: 'assets/images/projects/ecommerce.jpg',
    category: 'Web',
    link: '#'
  },
  {
    title: 'ERP Business Dashboard',
    description: 'Enterprise ERP system for managing HR, finance, and inventory modules.',
    image: 'assets/images/projects/erp.jpg',
    category: 'Web',
    link: '#'
  },
  {
    title: 'Food Delivery App',
    description: 'Mobile app with real-time tracking, orders, and restaurant management.',
    image: 'assets/images/projects/foodapp.jpg',
    category: 'Mobile',
    link: '#'
  },
  {
    title: 'Cloud Storage System',
    description: 'Secure cloud-based file storage with encryption and backup system.',
    image: 'assets/images/projects/cloud.jpg',
    category: 'Cloud',
    link: '#'
  },
  {
    title: 'HR Management System',
    description: 'Employee onboarding, payroll, attendance, and performance tracking system.',
    image: 'assets/images/projects/hr.jpg',
    category: 'Web',
    link: '#'
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app with WebSocket support and group messaging.',
    image: 'assets/images/projects/chat.jpg',
    category: 'Web',
    link: '#'
  },
  {
    title: 'Banking Admin Panel',
    description: 'Secure banking dashboard with transaction monitoring and analytics.',
    image: 'assets/images/projects/banking.jpg',
    category: 'Web',
    link: '#'
  },
  {
    title: 'IoT Monitoring System',
    description: 'Cloud-connected IoT dashboard for live sensor tracking and alerts.',
    image: 'assets/images/projects/iot.jpg',
    category: 'Cloud',
    link: '#'
  }
];

  setCategory(category: any) {
    this.selectedCategory = category;
  }

  get filteredProjects() {
    return this.projects.filter(p => {

      const matchCategory =
        this.selectedCategory === 'All' ||
        p.category === this.selectedCategory;

      const matchSearch =
        p.title.toLowerCase().includes(this.searchText.toLowerCase());

      return matchCategory && matchSearch;
    });
  }
}