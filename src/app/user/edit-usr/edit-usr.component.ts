import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-usr',
  templateUrl: './edit-usr.component.html',
  styleUrls: ['./edit-usr.component.css']
})
export class EditUsrComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<EditUsrComponent>,
    private service:UserService,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.updateUser(form.value).subscribe(res=>{
      this.snackBar.open(res.toString(),'',{
        duration:5000,
        verticalPosition:'top'
      })
    })
  }

}
