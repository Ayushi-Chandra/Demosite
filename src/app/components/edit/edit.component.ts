import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontactinfo } from 'src/app/models/icontactinfo';
import { ContactinfoService } from 'src/app/service/contactinfo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  public customer: Icontactinfo={} as Icontactinfo;
  public customerId:string|null=null;
  public loading: boolean=false;
  public errorMessage: string|null=null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private contactService : ContactinfoService,
    private router: Router 

  ){}

  ngOnInit(): void {
    this.loading=true;
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.customerId=param.get('customerId');
      console.log(this.customerId);

      if(this.customerId!=null){
        this.contactService.getCustomerById(this.customerId).subscribe((data)=>{
          this.customer=data;
        },(err)=>{
          this.errorMessage=err+": Could not fetch data";
        this.loading=false;
        })
      }
      
    })
  }

  onSubmit(){
    if(this.customerId){
      this.contactService
      .updateContact(this.customerId,this.customer)
      .subscribe((data)=>{
        this.router.navigate(['/']).then();
      }
      )
    }
  }


}
