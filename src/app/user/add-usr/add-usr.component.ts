import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-usr',
  templateUrl: './add-usr.component.html',
  styleUrls: ['./add-usr.component.css']
})
export class AddUsrComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddUsrComponent>,
    private service:UserService,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData = {
      id:null,
      email:''
    }
  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.addUser(form.value).subscribe(res=>
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
