let id: number = 5;

let company: string = 'Softtech bd';

let isPublished: boolean = true;

let historyLog: string[] = ['a', 'b', 'c'];

let mixBox: any[] = ['a', 'b', 1, 2, true];

//tuple
let address: [string, number, boolean] = ['Dhaka', 1200, true];

//tuple array

let address2: [string, number][] = [
  ['park avenue', 1649],
  ['dorchester', 1748],
  ['mayfair', 501],
];

//union

let uuid: string | number;

uuid = 5;
uuid = 'complex_hash';

//enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

//Objects
const user: {
  id: number;
  name: string;
} = {
  id: 5,
  name: 'Marc',
};

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 6,
  name: 'Lily',
};

//Type Assertion
let cid: any = 1;

let customerId = cid as number;

cid = 'string';

//functions
function addNum(a: any, b: any): number {
  return a + b;
}

console.log(addNum(2, 3));

//Void
function display(temp: string | number): void {
  console.log(temp);
}

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  address?: string;
}

const AmazonUser: UserInterface = {
  id: 4,
  name: 'Bella',
};

//Interfaces for functions

interface MathFunc {
  (x: number, y: number): number;
}

const addition: MathFunc = (a: number, b: number): number => a + b;
const subtraction: MathFunc = (a: number, b: number): number => a - b;

//Generics

function getArr<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numberArr = getArr<number>([1, 2, 3]);
const stringArr = getArr<string>(['a', 'b', 'c', 'd']);

stringArr.push('size');
