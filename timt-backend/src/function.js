function addnumber(a,b) {
    return a+b;
}
//arrow function
const multi = (a,b) =>a*b;

function showfunction() {
    console.log("Add:",addnumber(4,6));
    console.log("multi:",multi(4,6));
}
module.exports = {addnumber,multi,showfunction}