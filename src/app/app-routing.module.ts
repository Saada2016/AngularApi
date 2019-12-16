import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProcessComponent } from './process/process.component';
import { ProductlinkprocessComponent } from './productlinkprocess/productlinkprocess.component';


const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'product',component:ProductComponent},
  {path:'process',component:ProcessComponent},
  {path:'productlinkprocess',component:ProductlinkprocessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
