import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { 


  
  }


  
//   postData(data:any){
//     return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
//      return res;
//   }))

// }
postData(data:any):Observable<any>{
  return this.http.post<any>("http://localhost:3000/posts",data);
}



// addEmployee(emp : Employee): Observable<Employee> {
//   return this.http.post<Employee>(this.addEmpURL,emp);
// }


//   getData(){
//     return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
//      return res;
//   }))
  
// }
getData(): Observable<any>{
return this.http.get<any>("http://localhost:3000/posts");
}


// getTasks(): Observable<Task[]>{
//   return this.http.get<Task[]>(this.apiUrl)
// }
// getAllEmployee(): Observable<Employee[]>{
//   return this.http.get<Employee[]>(this.getEmpURL);
// }
// updateData(data:any,id:number){
//   return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
//    return res;
// }))
// }

updateData(data:any,id:number): Observable<any>{
  return this.http.put<any>("http://localhost:3000/posts/"+id,data);
}

// updateEmployee(emp :Employee) : Observable<Employee>{
//   return this.http.put<Employee>(this.updateEmpUrl, emp);
// }

// deleteData(id:number){
//   return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
//    return res;
// }))
// }
// }
deleteData(id:number): Observable<any>{
  return this.http.delete<any>("http://localhost:3000/posts/"+id);
}

}
// deleteEmployee(emp : Employee) : Observable<Employee> {
//   return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.id);
// }
