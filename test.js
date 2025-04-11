function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - accessible because var is function-scoped
    }

    // Block scope with let
    function testLet() {
    if (true) {
        const y = 20;     // let and const are block scoped whereas var is function scoped
    }
    console.log(y); // ReferenceError: y is not defined
}
testVar();
testLet();