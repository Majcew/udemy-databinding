import { Component } from '@angular/core';
import { Element } from './shared/element.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Element[] = [];

  onAddElement(data: Element) {
      this.serverElements.push({
        type: data.type,
        name: data.name,
        content: data.content
      });
  }
}
