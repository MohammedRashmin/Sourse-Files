// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserUpdateService {
//   private apiUrl = 'http://localhost:5102/api/User'; // Base API URL

//   constructor(private http: HttpClient) {}

//   /**
//    * Fetch User Data by ID.
//    * @param userId - The ID of the user.
//    * @returns Observable containing user data.
//    */
//   getUserById(userId: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/UserById`, {
//       params: { Id: userId.toString() },
//     });
//   }


//   /**
//    * Update User Data.
//    * @param userId - The ID of the user to update.
//    * @param updatedData - The updated user data.
//    * @returns Observable of the response.
//    */
//   updateUser(id: number, userData: any): Observable<any> {
//     const url =  `http://localhost:5102/api/User/UpdateUser/${id}`;
//     return this.http.put(url, userData);
//   }
//   }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserUpdateService {
  private apiUrl = 'http://localhost:5102/api/User'; // Base API URL

  constructor(private http: HttpClient) {}

  /**
   
   * @param userId - The ID of the user.
   * @returns Observable containing user data.
   */
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/UserById`, {
      params: { Id: userId.toString() },
    });
  }

  /**
   
   * @param userId - The ID of the user to update.
   * @param updatedData - The updated user data.
   * @returns Observable of the response.
   */
  updateUser(userId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateUser/${userId}`, updatedData, { responseType: 'text' } );
  }
}

