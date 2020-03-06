/* TODO

В представленном ниже коде мы намерены вызвать user.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

 let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

* */
let obj, method;
obj = {
  go: function() { console.log(this); }
};

//obj.go();               // (1) [object Object]

//(obj.go)();             // (2) [object Object]

//(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
