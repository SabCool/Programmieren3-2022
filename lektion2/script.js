let obj = {
    //first_name, last_name ...
    sayHello() {
        console.log("Hello", this.first_name);
    }
 }
 
 console.log(obj);
 console.log(obj.first_name);
 obj.sayHello();