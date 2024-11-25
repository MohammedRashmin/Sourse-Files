import { Component } from '@angular/core';
import { UserRequestService } from '../Services/user-request.service';

@Component({
  selector: 'app-admin-user-request',
  templateUrl: './admin-user-request.component.html',
  styleUrl: './admin-user-request.component.css'
})
export class AdminUserRequestComponent {
  users: any[] = [];

  constructor(private userRequestService:UserRequestService){}

  ngOnInit(): void {
    this.loadUsers();
  }

   // Fetch user data from the service
   loadUsers(): void {
    this.userRequestService.getUser().subscribe({
      next: (data) => {
        this.users = data;
       
        
      },
      error: (err) => {
        

        
        console.error('Error fetching users:', err);
      },
    });
  }


}
