var aa = function() {

var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;
        };

    }

};

console.log(this);
console.log(this.name);
console.log(name);
console.log(object.getNameFunc()());
};

new aa();

/*





var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };

    }

};

console.log(object.getNameFunc()());
*/
