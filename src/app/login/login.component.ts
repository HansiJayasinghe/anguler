// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginDetails } from '../model/login';
// import { LoginService } from '../services/login.service';
// import { HttpClientModule } from '@angular/common/http';
// import { ErrorResponse } from '../model/error';
// import { SessionService } from '../services/SessionService';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
//   providers: [LoginService],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   permission!: boolean;
//   isValid!: boolean;
//   submitted!: boolean;
//   constructor(private router: Router,private loginservice:LoginService, private sessionService: SessionService) {}

//   usernameControl = new FormControl('');
//   password = new FormControl('');
//   errorMessage: string = '';


  
//   login(): void {

//     if (this.usernameControl.value == '' || this.password.value == '') {
//       this.submitted = false;
//     } else {
//       if(this.usernameControl.value!=null && this.usernameControl.value!='' && this.password.value!=null && this.password.value!=''){
//         const loginDetails: LoginDetails = new LoginDetails(this.usernameControl.value, 0,this.password.value, '', '', 0, '', 0, 0,  0, '', '', 1, '', 1);
//         this.submitted = true;
//         this.attemptAuth(loginDetails);
//       }
//     }
//     this.sessionService.setUser(user);
//     this.router.navigate(['/dashboard']);
//     const user = this.sessionService.getUser();

//   }

//   attemptAuth(loginDetails: LoginDetails): void {
    
//     this.loginservice.attemptAuth(loginDetails).subscribe(
//       (response: LoginDetails) => {
//         if (response != null) {
          
//           if (response.activeStatus == 1) {
            
//             this.router.navigate(['/dashboard']);
            
//           }
//           else {
            
//           }
//         } else {
//          this.errorMessage = 'Please enter correct Email';
//         }
//       },
//       (error: ErrorResponse) => {
//         if (error.status = 403) { //no login permision
//           this.permission = false;
//         } else  if (error.status = 406){ //password invalide
//           this.isValid = false;
//         } else {
//           this.isValid = false;
//         }
//         console.log(error);
//         this.errorMessage = 'Please enter correct Email';
//       }
//     );
//   }

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetails } from '../model/login';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorResponse } from '../model/error';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  permission!: boolean;
  isValid!: boolean;
  submitted!: boolean;
  errorMessage: string = '';

  usernameControl = new FormControl('');
  password = new FormControl('');

  constructor(
    private router: Router,
    private loginservice: LoginService,
    private sessionService: SessionService
  ) {}

  login(): void {
    // Basic form validation
    if (!this.usernameControl.value || !this.password.value) {
      this.submitted = false;
      this.errorMessage = 'Username and password are required';
      return;
    }

    // Create login request object
    const loginDetails: LoginDetails = new LoginDetails(
      this.usernameControl.value,
      0,
      this.password.value,
      '',
      '',
      0,
      '',
      0,
      0,
      0,
      '',
      '',
      1,
      '',
      1
    );

    this.submitted = true;
    this.attemptAuth(loginDetails);
  }

  attemptAuth(loginDetails: LoginDetails): void {
    this.loginservice.attemptAuth(loginDetails).subscribe(
      (response: LoginDetails) => {
        if (response && response.activeStatus === 1) {
          // Prepare user object based on API response
          const user = {
            name: response.userName || 'Unknown User', // adjust field names to match your API
            email: response['email'] || '',
            role: response['role'] || 'User'
          };

          // Save user in localStorage
          this.sessionService.setUser(user);

          // Navigate to dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Your account is inactive or invalid credentials';
        }
      },
      (error: ErrorResponse) => {
        if (error.status === 403) {
          this.permission = false;
          this.errorMessage = 'No login permission';
        } else if (error.status === 406) {
          this.isValid = false;
          this.errorMessage = 'Invalid password';
        } else {
          this.isValid = false;
          this.errorMessage = 'An unexpected error occurred';
        }
        console.error(error);
      }
    );
  }
}
