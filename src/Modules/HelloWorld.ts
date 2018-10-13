export default class HelloWorld {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public print() {
    console.log(`Hello ${this.name}`);
  }
}
