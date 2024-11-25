import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registerForm: FormGroup;
  licenseImage: File | null = null;
  cameraCapture: File | null = null;
  private stream: MediaStream | null = null;
  isCameraOpen = false;


  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;
  @ViewChild('capturedImageElement') capturedImageElement!: ElementRef<HTMLImageElement>;


  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.registerForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      MobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      NIC: ['', [Validators.required]],
      LicenseNumber: ['', [Validators.required]],
      Role: ['2', [Validators.required]],
      LicenseImage: [null],
      CameraCapture: [null],
    });
  }
  
  async openCamera(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = this.videoElement.nativeElement;
      video.srcObject = this.stream;
      video.play();
      this.isCameraOpen = true;
    } catch (error) {
      console.error('Error accessing the camera:', error);
      alert('Unable to access the camera.');
    }
  }
  
  closeCamera(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop()); // Stop all tracks of the media stream
      this.stream = null;
      this.isCameraOpen = false;
      const video = this.videoElement.nativeElement;
      video.srcObject = null; // Reset the video element's source object
    }
  }


  // Function to take a photo
  takePhoto(): any {
    if (!this.stream) {
      alert("Camera not open!");
      return;
    } else {

    }



    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    //  canvas.width = video.videoWidth;
    // canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // const imageData = canvas.toDataURL("image/png"); // Convert canvas to image data
      // const capturedImage = this.capturedImageElement.nativeElement;
      // capturedImage.src = imageData; // Set the image data to the img element
      // capturedImage.style.display = "block";
      // console.log(imageData);
      // return imageData;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (blob) {
          // Create a File object from the Blob
          this.cameraCapture = new File([blob], 'camera_capture.png', { type: blob.type });
          this.registerForm.patchValue({ CameraCapture: this.cameraCapture });

          const capturedImage = this.capturedImageElement.nativeElement;
          capturedImage.src = URL.createObjectURL(blob); // Show the captured image
          capturedImage.style.display = 'block';
          console.log('Captured Image File:', this.cameraCapture);
        }
      }, 'image/png');
    }
  }

  // Clean up when the component is destroyed
  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
    }
  }


  onFileChange(event: Event, field: string): void {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    if (field === 'LicenseImage') {
      this.licenseImage = file;
    } else if (field === 'CameraCapture') {
      this.cameraCapture = file;
    }
  }

  RegisterMember(): void {
    if (this.registerForm.invalid) {
      console.error('Form is invalid.');
      return;
    }

    const formData = new FormData();
    Object.keys(this.registerForm.controls).forEach(key => {
      if (key !== 'LicenseImage' && key !== 'CameraCapture') {
        formData.append(key, this.registerForm.get(key)?.value);
      }
    });

    if (this.licenseImage) {
      formData.append('LicenseImage', this.licenseImage, this.licenseImage.name);
    }
    if (this.cameraCapture) {
      formData.append('CameraCapture', this.cameraCapture, this.cameraCapture.name);
    }

    this.http.post('https://localhost:7000/api/User/CreateUser', formData).subscribe({
      next: response => {
        console.log('User registered successfully:', response);
      },
      error: error => {
        console.error('Error registering user:', error);
      }
    });
  }
}
