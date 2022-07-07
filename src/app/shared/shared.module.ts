export enum Type{
  SERVER = 'Server',
  BLUEPRINT = "Blueprint"
}

export interface Element{
    type:Type,
    name:string,
    content:string
  }