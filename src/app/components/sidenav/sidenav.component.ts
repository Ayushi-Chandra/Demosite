import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit  {
  @Input() sideNavStatus: boolean =false;
  list=[
    {
      number:'1',
      name:'home',
      icon:'fa-solid fa-house',
      link: 'customer/home',

    },
    {
      number:'2',
      name:'Add Customer',
      icon:'fa-solid fa-user',
      link: 'customer/add'

    },
    {
      number:'3',
      name:'Page 2',
      icon:'fa-solid fa-file',
      link: 'customer/'

    },
  ];
  ngOnInit(): void {
    
  }

}
