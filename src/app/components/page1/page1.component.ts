import { Component, OnInit } from '@angular/core';
import { Icontactinfo } from 'src/app/models/icontactinfo';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit{

  public customers:Icontactinfo[]=[] as Icontactinfo[];
  public errorMessage: string | null = null;
  public loading: boolean = false;
  public customerId:string|null=null;
  public sortBy: string = 'name';
  public sortDirection: 'asc' | 'desc' = 'asc';
  public filteredCustomers:Icontactinfo[]=[];

  constructor(
    private customerServive: ContactinfoService,
  ){}


  ngOnInit(): void {
    this.loadDataFromServices();
  }
  loadDataFromServices() {
    this.loading = true;
    this.customerServive.getCustomer().subscribe((data)=>{
      this.customers=data;
      this.filteredCustomers=this.customers;
      this.loading=false;

   
    },
    (err) => {
      this.errorMessage = err;
      this.loading = false;
    }
    )
    
    
  }

  onDelete(customerId:any):void{
    if(customerId !== undefined){
      this.customerServive.deleteContactById(customerId).subscribe((data)=>{
        this.loadDataFromServices();
      })
    }else {
      console.error('Invalid studentId: Student ID is undefined');
    }
  }
  onSearch(searchName: string) {
    if (!searchName) {
      this.filteredCustomers = this.customers;
    } 
      this.filteredCustomers = this.customers.filter(
        customer => JSON.stringify(customer).toLowerCase().includes(searchName.toLowerCase())
      );
    
    console.log(searchName);
    console.log(this.filteredCustomers);
    
  }

  performSearch(searchName: string) {
    this.onSearch(searchName); 
  }

  onSort(column: string): void {
    if (this.sortBy === column) {
      
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      
      this.sortBy = column;
      this.sortDirection = 'asc';
    }
  
    
    this.sortCustomer();
  }
  
  sortCustomer(): void {
    this.customers.sort((a, b) => {
      
      if (this.sortBy === 'name') {
        return (
          a.name.localeCompare(b.name) * (this.sortDirection === 'asc' ? 1 : -1)
        );
      } 
      
      return 0; 
    });
  }

}
