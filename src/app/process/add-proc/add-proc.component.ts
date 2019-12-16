import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { ProcessService } from 'src/app/services/process.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { element } from 'protractor';

@Component({
  selector: 'app-add-proc',
  templateUrl: './add-proc.component.html',
  styleUrls: ['./add-proc.component.css']
})
export class AddProcComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddProcComponent>,
    private service:ProcessService,
    private snackBar:MatSnackBar) { }

    public listItems:Array<string> = [];

  ngOnInit() {
    this.resetForm();
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

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData = {
      description:'',
      title:'',
      user:null,
      createdOn:new Date
    }
  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.addProcess(form.value).subscribe(res=>
      {
        this.resetForm(form);
        this.snackBar.open(res.toString(), '',{
          duration:3000,
          verticalPosition:'top'
        });
      }
    
      )
  }

}
