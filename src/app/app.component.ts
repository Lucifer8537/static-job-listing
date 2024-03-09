import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
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
    {
      img: '../assets/myhome.svg',
      company: 'MyHome',
      new: false,
      featured: false,
      title: 'Junior Frontend Developer',
      postedOn: '5d ago',
      time: 'Contract',
      location: 'USA only',
      tags: ['Frontend', 'Junior', 'CSS', 'JavaScript'],
    },
    {
      img: '../assets/loop-studios.svg',
      company: 'Loop Studios',
      new: false,
      featured: false,
      title: 'Software Engineer',
      postedOn: '1w ago',
      time: 'Full Time',
      location: 'Worldwide',
      tags: ['Fullstack', 'Midweight', 'JavaScript', 'Sass', 'Ruby'],
    },
    {
      img: '../assets/faceit.svg',
      company: 'FaceIt',
      new: false,
      featured: false,
      title: 'Junior Backend Developer',
      postedOn: '2w ago',
      time: 'Full Time',
      location: 'UK only',
      tags: ['Backend', 'Junior', 'Ruby', 'RoR'],
    },
    {
      img: '../assets/shortly.svg',
      company: 'Shortly',
      new: false,
      featured: false,
      title: 'Junior Developer',
      postedOn: '2w ago',
      time: 'Full Time',
      location: 'Worldwide',
      tags: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
    },
    {
      img: '../assets/insure.svg',
      company: 'Insure',
      new: false,
      featured: false,
      title: 'Junior Frontend Developer',
      postedOn: '2w ago',
      time: 'Full Time',
      location: 'USA only',
      tags: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
    },
    {
      img: '../assets/eyecam-co.svg',
      company: 'Eyecam Co.',
      new: false,
      featured: false,
      title: 'Full Stack Engineer',
      postedOn: '3w ago',
      time: 'Full Time',
      location: 'Worldwide',
      tags: ['Fullstack', 'Midweight', 'JavaScript', 'Django', 'Python'],
    },
    {
      img: '../assets/the-air-filter-company.svg',
      company: 'The Air Filter Company',
      new: false,
      featured: false,
      title: 'Front-end Dev',
      postedOn: '1mo ago',
      time: 'Part Time',
      location: 'Worldwide',
      tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
    },
  ];
  filteredList: jobs[] = [];
  filterTags: string[] = [];

  ngOnInit(): void {
    this.onClickClear();
  }

  onClickClear = () => {
    this.filteredList = this.jobslist;
    this.filterTags = [];
  };

  onAddedTagsFilter = (t: string) => {
    if (this.filterTags.includes(t)) return;
    this.filterTags.push(t);
    this.filteredList = this.filteredList.filter(
      (job) => job && job.tags.includes(t)
    );
  };

  onClickCross = (filter: string) => {
    if (this.filterTags.includes(filter)) {
      this.filterTags = this.filterTags.filter(
        (fill) => fill && fill !== filter
      );

      if (this.filterTags.length === 0) this.filteredList = this.jobslist;
      else
        this.filteredList = this.jobslist.filter(
          (fill) => fill && this.isFill(fill)
        );
    }
  };

  isFill = (fill: jobs): boolean =>
    fill.tags.filter((tag) => tag && this.filterTags.includes(tag)).length > 0;
}
