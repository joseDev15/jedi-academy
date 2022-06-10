import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  luke = {name: 'luke',isJedi:true,temple:'Coruscant'}
  leia = {name: 'leia',isJedi:false}
  han = {name: 'Han solo',isJedi:false}
}
