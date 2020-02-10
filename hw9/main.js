function HashStorageFunc() {
    this.addValue = function (key, value) {
        this[key] = value;
    };
    this.getValue = function (key) {
        return (`
                Напиток: ${key}
                Алкогольный: ${this[key]}`);
    };
    this.deleteValue = function (key) {
        return this[key] ? delete this[key] : false;
    };
    this.getKeys = function () {
        return Object.keys(this);
    };
}

function ClassA() {
    HashStorageFunc.apply(this, arguments);
    this.Drinks = function () {
        return Object.keys(this).length;
    };
    let parenntAddValue = this.addValue;
    this.addValue = function (key) {
        parenntAddValue.apply(this, arguments);
        console.log(`${key} added to list`);
        return true;
    };
}

function ClassB() {
    HashStorageFunc.apply(this, arguments);
    this.deleteAll = function() {
        for (let key in this) {
            delete this[key];
        }
    };
    let parentGetValue = this.getValue;
    this.getValue = function(key) {
        parentGetValue.apply(this, arguments);
        if (this[key]) {
            console.log(`${key} is on the list`)
        } else console.log(`This drink isn't on the list`)
    };
}
let drinkStorage = new HashStorageFunc();
let classA = new ClassA();
let classB = new ClassB();
drinkStorage.addValue('Пина колада', 'да');
drinkStorage.addValue('Сок', 'нет');
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));
