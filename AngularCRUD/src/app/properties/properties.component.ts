import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
allProperty:any;
  constructor(private fb:FormBuilder, private api:PropertyService){}

  ngOnInit():void{
    this.api.getAllProperty()
  }

  getAllProperty(){
    this.api.getAllProp().subscribe((res: any)=>{
      this.allProperty = res;
      console.warn(this.allProperty)
    })
  }

}
