import { Component } from '@angular/core';
interface jobs {
  img: string;
  company: string;
  new: boolean;
  featured: boolean;
  title: string;
  postedOn: string;
  time: string;
  location: string;
  tags: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  jobslist: jobs[] = [
    {
      img: '../assets/photosnap.svg',
      company: 'Photosnap',
      new: true,
      featured: true,
      title: 'Senior Frontend Developer',
      postedOn: '1d ago',
      time: 'Full Time',
      location: 'USA only',
      tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      img: '../assets/manage.svg',
      company: 'Manage',
      new: true,
      featured: true,
      title: 'Fullstack Developer',
      postedOn: '1d ago',
      time: 'Part Time',
      location: 'Remote',
      tags: ['Fullstack', 'Midweight', 'Python', 'React'],
    },
    {
      img: '../assets/account.svg',
      company: 'Accout',
      new: true,
      featured: false,
      title: 'Junior Frontend Developer',
      postedOn: '2d ago',
      time: 'Part Time',
      location: 'USA only',
      tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
    },
  ];
}
