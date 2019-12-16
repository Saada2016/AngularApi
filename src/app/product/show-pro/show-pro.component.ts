import { Component, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource,MatSort} from '@angular/material';

import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

import {MatDialog,MatDialogConfig} from '@angular/material';
import {AddProComponent} from 'src/app/product/add-pro/add-pro.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { EditProComponent } from 'src/app/product/edit-pro/edit-pro.component';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

  constructor(private service:ProductService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshProList();

      })
     }

  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options','ID','TITLE','DISCRIPTION','USER_ID','CREATED_DATE'];
  

  @ViewChild(MatSort,null) sort: MatSort;
     
  ngOnInit() {
    this.refreshProList();
  }

  refreshProList(){
    this.service.getProList().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filtervalue: string){
    this.listData.filter= filtervalue.trim().toLocaleLowerCase();
  }

  onEdit(pro:Product){
    this.service.formData = pro;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="70%";
    this.dialog.open(EditProComponent, dialogConfig);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete??')){
      this.service.deleteProduct(id).subscribe(res=>{
        this.refreshProList();
        this.snackBar.open('Deleted Sucessfully', '', {
          duration:5000,
          verticalPosition:'top'
        });
      });
    }
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="70%";
    this.dialog.open(AddProComponent, dialogConfig);
  }
  
}
