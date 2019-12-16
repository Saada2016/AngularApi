import { Component, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource,MatSort} from '@angular/material';

import { Process } from 'src/app/models/process-model';
import { ProcessService } from 'src/app/services/process.service';

import {MatDialog,MatDialogConfig} from '@angular/material';
import {AddProcComponent} from 'src/app/process/add-proc/add-proc.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { EditProcComponent } from 'src/app/process/edit-proc/edit-proc.component';

@Component({
  selector: 'app-show-proc',
  templateUrl: './show-proc.component.html',
  styleUrls: ['./show-proc.component.css']
})
export class ShowProcComponent implements OnInit {

  constructor(private service:ProcessService,
    private dialog:MatDialog,
    private snackBar:MatSnackBar){
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshProcList();

      })
     }

    listData : MatTableDataSource<any>;
    displayedColumns : string[] = ['Options','ID','TITLE','DISCRIPTION','USER_ID','CREATED_DATE'];

    @ViewChild(MatSort,null) sort: MatSort;

  ngOnInit() {
    this.refreshProcList();
  }

  refreshProcList(){
    this.service.getProcList().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filtervalue: string){
    this.listData.filter= filtervalue.trim().toLocaleLowerCase();
  }

  onEdit(proc:Process){
    this.service.formData = proc;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="70%";
    this.dialog.open(EditProcComponent, dialogConfig);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete??')){
      this.service.deleteProcess(id).subscribe(res=>{
        this.refreshProcList();
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
    this.dialog.open(AddProcComponent, dialogConfig);
  }

}
