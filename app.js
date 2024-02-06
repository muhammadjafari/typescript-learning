// const person = {
//   name: "Max",
//   age: 26,
// };
// console.log(person.nickname)
// const person: object = {
//   name: "Max",
//   age: 26,
// };
// const person: { name: string; age: number } = {
//   name: "Max",
//   age: 26,
// };
// const person = {
//   name: "Max",
//   age: 26,
//   hobbies: ["sports", "movies"],
// };
// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }
// let favoriteSports: string[];
// favoriteSports = ["basketball", "football"];
// for (const sport of favoriteSports) {
//   console.log(sport.toUpperCase());
// }
// let role: [number, string] = [1, "author"];
// role[1] = "admin";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    role: Role.ADMIN,
};
console.log(person);
