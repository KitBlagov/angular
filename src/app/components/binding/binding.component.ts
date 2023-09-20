import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  phone: string = '124234232';
  user = {
    name: 'Nikita',
    surname: 'Blago'
  }
  constructor() {
  }

  get fullName(): string {
    return this.user.name + ' ' + this.user.surname;
  }

  ngOnInit(): void {
    setTimeout( () => this.updatePhone(), 0.3)
  }

  updatePhone(): void {
    this.phone = Math.round(Math.random() * 1000) + '';
  }
}
