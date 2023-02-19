import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/property.service';
import { Property } from './properties.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
allProperty:any;
formValue!:FormGroup;

propertyModelObj:Property = new Property();

  constructor(private fb:FormBuilder, private api:PropertyService){}

  ngOnInit():void{
    this.formValue= this.fb.group({
      ptitle: [''],
      pprice: [''],
      plocation: [''],
      pdetails: ['']
     
    })
    this.api.getAllProperty()
  }
  //get All Data 
  getAllProperty(){
    this.api.getAllProperty().subscribe((res: any)=>{
      this.allProperty = res;
      console.warn(this.allProperty)
    })
  }

  addProp(){
    this.propertyModelObj.ptitle= this.formValue.value.ptitle;
    this.propertyModelObj.pprice= this.formValue.value.pprice;
    this.propertyModelObj.plocation= this.formValue.value.plocation;
    this.propertyModelObj.pdetails= this.formValue.value.pdetails;
  }

}
