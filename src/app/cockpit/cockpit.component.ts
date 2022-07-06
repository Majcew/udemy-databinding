import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Element} from '../shared/element.module'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('server') serverCreated = new EventEmitter<Element>();
  @Output('blueprint') blueprintCreated = new EventEmitter<Element>();
  newServerName:string;
  newServerContent:string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddElement(type:'Server' | 'Blueprint'){
    if(type === 'Server'){
      this.serverCreated.emit({
        type: 'Server',
        name: this.newServerName,
        content: this.newServerContent
      })
    }
    else{
      this.blueprintCreated.emit({
        type: 'Blueprint',
        name: this.newServerName,
        content: this.newServerContent
      })
    }
  }
}
