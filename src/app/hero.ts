export class Hero {


  constructor(public id: number, public name: string, public disabled: boolean = false) {
    console.warn(id)
  }
}
