import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { from } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<EditProComponent>,
    private service:ProductService,
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
      this.service.updateProduct(form.value).subscribe(res=>{
        this.snackBar.open(res.toString(),'',{
          duration:5000,
          verticalPosition:'top'
        })
      })
    }

}
