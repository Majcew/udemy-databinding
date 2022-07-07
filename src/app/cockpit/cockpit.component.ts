import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Element, Type } from '../shared/shared.module'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serviceType:typeof Type = Type;
  Type = Type;
  
  // @Output('serviceCreated') private readonly _serverCreated = new EventEmitter<Element>();
  // @Output('bpCreated') private readonly _blueprintCreated = new EventEmitter<Element>();
  @Output('serviceCreated') private readonly _serviceCreated = new EventEmitter<Element>();
  newServiceName:string;
  newServiceContent:string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddElement(servicetype: Type):void{
    // We can change the if-else statement into switch-case if we have more params in Enum
    // Beneath is a approach using switch-case, really handy if we have more EventEmitters.
    // switch(servicetype){
    //   case Type.SERVER:{
    //     emitter = this._serverCreated
    //     break;
    //   }
    //   case Type.BLUEPRINT:{
    //     emitter = this._blueprintCreated
    //     break;
    //     // this.blueprintCreated.emit({
    //     //   type: Type.BLUEPRINT,
    //     //   name: this.newServerName,
    //     //   content: this.newServerContent
    //     // })
    //   }
    //   default:{
    //     console.warn("Something went wrong. Check your data.")
    //     break;
    //   }
    // }
    let emitter:EventEmitter<Element> = this._serviceCreated;
    const element:Element = {
      type: servicetype,
      name: this.newServiceName,
      content: this.newServiceContent
    }
    emitter.emit(element)
  }
}
