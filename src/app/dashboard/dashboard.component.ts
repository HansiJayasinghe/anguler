import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule] // <-- Add this line
})
export class DashboardComponent implements OnInit {
  username: string = 'John Doe';

  categories = [
    { name: 'Pizza', image: 'assets/images/pizza.jpg' },
    { name: 'Burgers', image: 'assets/images/burger.jpg' },
    { name: 'Sushi', image: 'assets/images/sushi.jpg' },
    { name: 'Desserts', image: 'assets/images/dessert.jpg' }
  ];

  dishes = [
    { name: 'Cheese Pizza', price: 12.99, image: 'assets/images/cheese-pizza.jpg' },
    { name: 'Double Burger', price: 10.49, image: 'assets/images/double-burger.jpg' },
    { name: 'California Roll', price: 8.99, image: 'assets/images/california-roll.jpg' },
    { name: 'Chocolate Cake', price: 6.50, image: 'assets/images/chocolate-cake.jpg' }
  ];

  constructor() {}

  ngOnInit(): void {
    // If username is stored in localStorage after login
    const storedName = localStorage.getItem('username');
    if (storedName) {
      this.username = storedName;
    }
  }
}