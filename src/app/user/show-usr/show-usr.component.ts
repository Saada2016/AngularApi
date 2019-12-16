import { Component, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource,MatSort} from '@angular/material';


import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

import {MatDialog,MatDialogConfig} from '@angular/material';
import {AddUsrComponent} from 'src/app/user/add-usr/add-usr.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { EditUsrComponent } from '../edit-usr/edit-usr.component';

@Component({
  selector: 'app-show-usr',
  templateUrl: './show-usr.component.html',
  styleUrls: ['./show-usr.component.css']
})
export class ShowUsrComponent implements OnInit {

  constructor(private service:UserService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshUsrList();

      })
     }

  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options','ID','Email'];

  @ViewChild(MatSort,null) sort: MatSort;
  ngOnInit() {
    this.refreshUsrList();
  }

  refreshUsrList(){
    this.service.getUsrList().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filtervalue: string){
    this.listData.filter= filtervalue.trim().toLocaleLowerCase();
  }

  onEdit(usr:User){
    this.service.formData = usr;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="70%";
    this.dialog.open(EditUsrComponent, dialogConfig);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete??')){
      this.service.deleteUser(id).subscribe(res=>{
        this.refreshUsrList();
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
    this.dialog.open(AddUsrComponent, dialogConfig);
  }

}
