interface Person {
  readonly name: string;
  age: number;

  greet(): void;
}

let Max: Person;
Max = {
  name: "Max",
  age: 18,
  greet() {
    console.log("hello " + this.name);
  },
};
