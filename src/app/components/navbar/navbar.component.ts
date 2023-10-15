import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Icontactinfo } from 'src/app/models/icontactinfo';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public customers: Icontactinfo[] = [] as Icontactinfo[];
  public errorMessage: string | null = null;
  public loading: boolean = false;
  public filteredCustomers:Icontactinfo[]=[];
  @Output() searchEvent = new EventEmitter<string>();
  


  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus: boolean=false;

  constructor(private customerService: ContactinfoService) { }

  
  ngOnInit(): void {
   
  }

  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  
  }
  // onSearch(searchName: string): void {
  //   if (!searchName) {
  //     this.filteredCustomers = this.customers;
  //   } else {
  //     this.filteredCustomers = this.customers.filter(
  //       customer => JSON.stringify(customer).toLowerCase().includes(searchName.toLowerCase())
  //     );
  //   }
  //   this.searchEvent.emit(searchName);

  //   console.log(searchName);
    
  // }
  // onSearch(searchName: string): void {
  //   // Example: Perform a search using the service
  //   this.customerService.searchCustomers(searchName).subscribe(
  //     (searchResults: Icontactinfo[]) => {
  //       // Handle the search results
  //       this.filteredCustomers = searchResults;
  //     },
  //     (error: any) => {
  //       // Handle any search error
  //       console.error(error);
  //     }
  //   );
  // }
  
  // performSearch(searchTerm: string): void {
  //   this.searchEvent.emit(searchTerm);
  // }
  
}
