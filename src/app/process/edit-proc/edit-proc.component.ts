import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { from } from 'rxjs';
import { ProcessService } from 'src/app/services/process.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-proc',
  templateUrl: './edit-proc.component.html',
  styleUrls: ['./edit-proc.component.css']
})
export class EditProcComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<EditProcComponent>,
    private service:ProcessService,
    private snackBar:MatSnackBar) { }

      // listItems is for dropdown methods
      public listItems:Array<string> = [];

  ngOnInit() {
    this.dropdownRefresh();
  }

  dropdownRefresh(){
    this.service.getUsrDropDownValues().subscribe(data=>{
      console.log(data);
      data.forEach(element =>{
        this.listItems.push(element["ID"]);
      });
    })

  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  

  onSubmit(form:NgForm){
    this.service.updateProcess(form.value).subscribe(res=>{
      this.snackBar.open(res.toString(),'',{
        duration:5000,
        verticalPosition:'top'
      })
    })
  }
}
