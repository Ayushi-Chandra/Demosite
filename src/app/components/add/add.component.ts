import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontactinfo } from 'src/app/models/icontactinfo';
import { ContactinfoService } from 'src/app/service/contactinfo.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{
 
  public customer: Icontactinfo = {} as Icontactinfo;


  constructor( private contactService : ContactinfoService,private activatedRoute : ActivatedRoute,private router:Router){}
  ngOnInit(): void {
   
  }
  onSubmit(){
    
    this.contactService.addCustomer(this.customer).subscribe((data) => {
      this.router.navigate(['/']).then();
      console.log(data);
    });
    
      
      
   
  }

}
