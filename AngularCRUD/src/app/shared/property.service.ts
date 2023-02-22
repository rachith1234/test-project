import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  getAllProp() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  //Now Add Get, Post, Put and Delete method here
  //Add property 
  addListing(data:any){
    return this.http.post('http://localhost:3000/properties', data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //get All Property using get Methods

  getAllProperty(){
    return this.http.get('http://localhost:3000/properties').pipe(map((res:any)=>{
      return res;
    }))
  }

  //Update property using put method
  updateProp(data:any, id:number){
    return this.http.put('http://localhost:3000/properties/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete property using delete method
  deleteProp(id:number){
    return this.http.delete('http://localhost:3000/properties/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}