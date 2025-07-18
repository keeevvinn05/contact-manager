import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    ContactListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'frontend';

  @ViewChild(ContactListComponent) listCmp!: ContactListComponent;
}
// onCreated({
// this.listCmp.load();
// })
// ontimeupdate(){
//   this.listCmp.load();
// }
