import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  implements OnInit{
logout() {
throw new Error('Method not implemented.');
}
user: any =null;
constructor(private sessionService: SessionService) {}
ngOnInit(): void {
    // Get logged-in user from localStorage
    this.user = this.sessionService.getUser();

    // Optional: Redirect to login if user is not logged in
    if (!this.user) {
      // window.location.href = '/login'; // Or use Router navigate
    }
  }
}
