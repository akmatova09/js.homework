// №1 Проверка синтаксиса
/*
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  };
  
  (user.go)() 

// №2
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               
(obj.go)();             
(method = obj.go)();    
(obj.go || obj.stop)(); 
*/

// №3 Использование "this" в литерале объекта

function makeUser() {
    return {
      name: "Джон",
      ref() {
        return this;
      }
    };
  };
  
let user = makeUser();
  
console.log( user.ref().name );

// №4 