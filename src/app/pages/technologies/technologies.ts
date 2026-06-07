import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-technologies',
  imports: [
    CommonModule,   
    FormsModule  
  ],
  templateUrl: './technologies.html',
  styleUrls: ['./technologies.scss']
})
export class TechnologiesComponent {

  selectedCategory: 'All' | 'Frontend' | 'Backend' | 'Cloud' = 'All';
  searchText = '';

  technologies = [
    { name: 'Angular', logo: 'assets/images/technologies/angular.png', description: 'Frontend framework', category: 'Frontend' },
    { name: 'React', logo: 'assets/images/technologies/react.png', description: 'UI library', category: 'Frontend' },
    { name: 'Node.js', logo: 'assets/images/technologies/node.png', description: 'Backend runtime', category: 'Backend' },
    { name: '.NET Core', logo: 'assets/images/technologies/dotnet.png', description: 'Backend framework', category: 'Backend' },
    { name: 'SQL Server', logo: 'assets/images/technologies/sqlserver.png', description: 'Database system', category: 'Backend' },
    { name: 'Azure', logo: 'assets/images/technologies/azure.png', description: 'Cloud platform', category: 'Cloud' },
    { name: 'AWS', logo: 'assets/images/technologies/aws.png', description: 'Cloud services', category: 'Cloud' }
  ];

  setCategory(category: any) {
    this.selectedCategory = category;
  }

  get filteredTechnologies() {
    return this.technologies.filter(t => {

      const matchCategory =
        this.selectedCategory === 'All' ||
        t.category === this.selectedCategory;

      const matchSearch =
        t.name.toLowerCase().includes(this.searchText.toLowerCase());

      return matchCategory && matchSearch;
    });
  }
}