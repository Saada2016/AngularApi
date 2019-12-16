import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { element } from 'protractor';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddProComponent>,
    private service:ProductService,
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
        field:'',
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
      this.service.addProduct(form.value).subscribe(res=>
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
