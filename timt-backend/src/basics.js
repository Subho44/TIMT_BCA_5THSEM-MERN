function showbasic() {
    console.log("Basic example of javascript");
    //variable & datatypes
    var name = "node js";
    var  name = "react js";
    let username = "subhojit santra";
        username = "raj santra";
    let age = 10;
    let active = true;
    const skills = ["react","next js","reactnative","laravel","mongodb"];
    const player = {
        name:"virat kohli",
        age:36,
        team:"india"
    };

    //conditional statement
    if(age>18){
        console.log("adult...");
    } else {
        console.log("minor...");
    }
    //loops
    for(let i =1; i<=10; i++){
        console.log("Number:",i);
    }
    console.log("name: ",typeof name,name);
    console.log("username: ",username);
    console.log("age: ",age);
    console.log("active: ",active);
    console.log("skills: ",skills[3]);
    console.log("player: ",player.name +" => "+player.team);

}
module.exports = {showbasic}