import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddaddressComponent } from './components/addaddress/addaddress.component';
import { AddcontactComponent } from './components/addcontact/addcontact.component';

const routes: Routes = [
 
  {path:'',redirectTo:'customer/home',pathMatch:'full'},
  {path:'customer/home', component:Page1Component},
  {path:'customer/add',component:AddComponent},
  {path:'customer/edit/:customerId',component:EditComponent},
  {path:'customer/view/:customerId', component:ViewComponent},
  // {path: 'customer/add/address', component: AddaddressComponent},
  {path:'customer/add/contact',component:AddcontactComponent},
  {path: 'customer/addresses/:customerId', component:AddaddressComponent},
  {path:'**',component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
