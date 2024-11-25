import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserUpdateService } from '../Services/user-update.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserUpdateService) {}

  ngOnInit(): void {
    // this.updateForm = this.fb.group(
    //   {
    //     FirstName: ['', [Validators.required]],
    //     LastName: ['', [Validators.required]],
    //     Email: [{ value: '', disabled: true }], // Email is read-only
    //     MobileNumber: ['', [Validators.required, Validators.pattern(/^07[0-9]{8}$/)]],
    //     NIC: [{ value: '', disabled: true }], // NIC is read-only
    //     LicenseNumber: ['', [Validators.required]],
    //     // Password: ['', [Validators.required]],
    //     // NewPassword: ['', [Validators.required, Validators.minLength(8)]],
    //     // ConfirmPassword: ['', [Validators.required]],
    //   },
    //   { validators: this.passwordMatchValidator },
   
    // );
    this.updateForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      MobileNumber: ['', [Validators.required, Validators.pattern(/^07[0-9]{8}$/)]],
      NIC: [{ value: '', disabled: true }, [Validators.required]],
      LicenseNumber: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      Role: [{ value: '', disabled: true }],
      Status: [{ value: '', disabled: true }],
      LicenseImage: [null],
      CameraCapture: [null],

    });

    
    const userId = 1; // Replace with dynamic user ID
    this.userService.getUserById(userId).subscribe(
      (user) => {
        console.log(user);
        this.updateForm.patchValue(user);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );

    this.loadUserData();
  }

  // Password match validator
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('NewPassword')?.value;
    const confirmPassword = group.get('ConfirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  // Load user data
  loadUserData(): void {
    const userId = 1; // Replace with dynamic user ID
    this.userService.getUserById(userId).subscribe(
      (user) => {
        console.log(user);

        const mappedUser = {
          FirstName: user.first_name,
          LastName: user.last_name,
          Email: user.email,
          MobileNumber: user.mobile_number,
          NIC: user.nic,
          LicenseNumber: user.license_number,
          Password: '', // Leave blank if not returned by the API
        };
  
        // Temporarily enable disabled fields to update their values
        this.updateForm.get('Email')?.enable();
        this.updateForm.get('NIC')?.enable();
  
        // Patch the form with user data
        this.updateForm.patchValue(mappedUser);
  
        // Disable the fields again
        this.updateForm.get('Email')?.disable();
        this.updateForm.get('NIC')?.disable();
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  UpdateUser(): void {
    if (this.updateForm.valid) {
      const updatedData = {
        userId: 1, // Replace dynamically as needed
        firstName: this.updateForm.get('FirstName')?.value,
        lastName: this.updateForm.get('LastName')?.value,
        email: this.updateForm.get('Email')?.value,
        mobileNumber: this.updateForm.get('MobileNumber')?.value,
        nic: this.updateForm.get('NIC')?.value,
        licenseNumber: this.updateForm.get('LicenseNumber')?.value,
        password: this.updateForm.get('Password')?.value || null, // Send null if no password provided
      };
  
      console.log('Sending updated data to API:', updatedData);
  
      this.userService.updateUser(updatedData.userId, updatedData).subscribe(
        (response) => {
          // Success callback
          console.log('Response from API:', response); // Log response if needed
          alert('User information updated successfully!');
        },
        (error) => {
          // Error callback
          console.error('Error updating user data:', error.error?.errors || error);
          alert('Failed to update user information. Please check your input.');
        }
      );
    } else {
      alert('Please fix the errors in the form.');
    }
  }
  
  
  
}
