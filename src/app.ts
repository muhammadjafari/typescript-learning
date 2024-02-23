interface Person {
  name?: string;
}

class Person implements Person {
  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }
}
