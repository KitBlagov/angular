import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {
  // @Input() name: string = 'Nikita';

  colspan: number = 2;

  @Input() user!: IUser;
  @Input() filterByName: string = '';
  @Input() filterByEmail: string = '';

  @Output() userEvent = new EventEmitter<any>();

  sendUserData(){
    const userData =  {id: 1, name: 'Jane', email: 'jane.google.com'};
    this.userEvent.emit(userData);
    console.log('child handler:', userData)
  }

}

const user =  {
  name: 'Nikita',
  email:  'nikita.blagoff@yandex.ru'
};

interface IUser {
  name: string;
  email: string;
}
