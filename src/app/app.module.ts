import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule, MatButtonModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from "@angular/material";
import {FormsModule} from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { ShowUsrComponent } from './user/show-usr/show-usr.component';
import { EditUsrComponent } from './user/edit-usr/edit-usr.component';
import { AddUsrComponent } from './user/add-usr/add-usr.component';
import { ProductComponent } from './product/product.component';
import { ShowProComponent } from './product/show-pro/show-pro.component';
import { EditProComponent } from './product/edit-pro/edit-pro.component';
import { AddProComponent } from './product/add-pro/add-pro.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {UserService} from 'src/app/services/user.service';
import {ProductService} from 'src/app/services/product.service';
import {ProcessService} from 'src/app/services/process.service';

import { from } from 'rxjs';
import { ProcessComponent } from './process/process.component';
import { ShowProcComponent } from './process/show-proc/show-proc.component';
import { AddProcComponent } from './process/add-proc/add-proc.component';
import { EditProcComponent } from './process/edit-proc/edit-proc.component';
import { ShowPlpComponent } from './ProductLinkProcess/show-plp/show-plp.component';
import { EditPlpComponent } from './ProductLinkProcess/edit-plp/edit-plp.component';
import { AddPlpComponent } from './ProductLinkProcess/add-plp/add-plp.component';
import { ProductlinkprocessComponent } from './productlinkprocess/productlinkprocess.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUsrComponent,
    EditUsrComponent,
    AddUsrComponent,
    ProductComponent,
    ShowProComponent,
    EditProComponent,
    AddProComponent,
    ProcessComponent,
    ShowProcComponent,
    AddProcComponent,
    EditProcComponent,
    ShowPlpComponent,
    EditPlpComponent,
    AddPlpComponent,
    ProductlinkprocessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule, MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [UserService,ProductService,ProcessService],
  bootstrap: [AppComponent],
  entryComponents:[AddUsrComponent,EditUsrComponent,AddProComponent,EditProComponent,ShowProcComponent,AddProcComponent,EditProcComponent]
})
export class AppModule { }
