"use strict";
let id = 5;
let company = 'Softtech bd';
let isPublished = true;
let historyLog = ['a', 'b', 'c'];
let mixBox = ['a', 'b', 1, 2, true];
//tuple
let address = ['Dhaka', 1200, true];
//tuple array
let address2 = [
    ['park avenue', 1649],
    ['dorchester', 1748],
    ['mayfair', 501],
];
//union
let uuid;
uuid = 5;
uuid = 'complex_hash';
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//Objects
const user = {
    id: 5,
    name: 'Marc',
};
const user2 = {
    id: 6,
    name: 'Lily',
};
//Type Assertion
let cid = 1;
let customerId = cid;
cid = 'string';
//functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(2, 3));
