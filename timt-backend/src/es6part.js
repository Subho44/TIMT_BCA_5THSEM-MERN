function showes6part() {
    //template literals
    let name = "rahul";
    console.log(`welcome ${name}`);
    //spread oprator
    const numbers = [1,2,3];
    const newnumber = [...numbers,5,6];
    console.log("newnumbers:",newnumber);
    //arrow fun
    let squares = newnumber.map(x => x*x);
    console.log("squares:",squares);
};
module.exports = {showes6part};