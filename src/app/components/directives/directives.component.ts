import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  isShow: boolean = false;
  color: string = 'gray';
  highlight: boolean = false;

}
