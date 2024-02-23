interface Named {
  name: string;
}

interface Greetable extends Named {
  greet(): void;
}

let max: Greetable;
max = {
  name: "Max",
  greet() {
    console.log("hello");
  },
};
