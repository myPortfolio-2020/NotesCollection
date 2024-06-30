// example 1

let echo = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log("is string:", echo("anyName"));
console.log("is number:", echo(234));
console.log("is object:", echo({ name: "john" }));
console.log("is array:", echo(["ant", "monkey"]));
console.log("is false:", echo(false));
console.log("is null:", echo(null));

// is string: false
// is number: false
// is object: true
// is array: false
// is false: false
// is null: false


const gen = <T>(arg: T): T => {
  return arg;
};

console.log(gen([2, '3']));