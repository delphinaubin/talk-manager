export abstract class StringValueObject {
  constructor(private value: string){}

  public get(): string {
    return this.value;
  }
}