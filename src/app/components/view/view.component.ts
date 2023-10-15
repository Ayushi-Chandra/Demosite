import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Icontactinfo} from 'src/app/models/icontactinfo'
import { ContactinfoService } from 'src/app/service/contactinfo.service';
import { AddressService } from 'src/app/service/address.service';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public customerId:string | null=null;
  public customer:Icontactinfo={} as Icontactinfo;
  public errorMessage:string|null=null;
  public loading: boolean=false;
  public addresses: any[] = [];
  public newConatctData: any ={};

  public newAddressData: any = {};
  public showAddAddressForm: boolean = false;
  public showContactForm: boolean = false;


  

  constructor(
    private activatedRoute : ActivatedRoute,
    private contactService : ContactinfoService,
    private router:Router,
    private addressService: AddressService, 
  private mobileService: ContactService 
  ){}



  ngOnInit(): void {
    this.newAddressData = {
      addressLine1: '',
 
    };
    this.newConatctData={
      addContact2: '',
    }
    
    this.loading=true;
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.customerId=param.get('customerId');
      if(this.customerId!=null){
        this.contactService.getCustomerById(this.customerId).subscribe((data)=>{
          this.customer=data;
          this.loading=false;
        },(err)=>{
          this.errorMessage=err+": Could not fetch data";
          this.loading=false;
        });
      }
    })
  }
  toggleAddAddressForm() {
    
    this.showAddAddressForm = !this.showAddAddressForm;
  }
  submitAddressForm() {
    
    console.log(this.newAddressData); 
    
  }
  addAddress() {
    if (this.customerId) {
      const newAddressData = this.newAddressData;
      
      this.addressService.addAddress(this.customerId, newAddressData).subscribe(
        (response) => {
          console.log('Address added successfully', response);
  
          
          this.addresses.push(newAddressData);

          console.log(this.addresses);
          
  
          console.log("hi");
        },
        (error) => {
          console.error('Failed to add address', error);
          console.log('Error status:', error.status);
          console.log('Error message:', error.message);
        }
      );
    } else {
      console.error('Invalid customerId');
    }
  }
  
  toggleContactForm() {
    
    this.showContactForm = !this.showContactForm;
  }
  submitContactForm() {
    
    console.log(this.newAddressData); 
    
  }
  
  
  addContact() {
    if (this.customerId) {
      const newContactData = {
       contact:'',
      };
  
      this.mobileService.addContact(this.customerId, newContactData).subscribe(
        (response) => {
         console.log(newContactData);
         
        },
        (error) => {
          
        }
      );
    } 
  }
  
  
}
