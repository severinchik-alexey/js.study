function HashStorageFunc() {
    this._hash = {};
}
HashStorageFunc.prototype.addValue = function (key, value) {
    this._hash[key] = value;
};
HashStorageFunc.prototype.getValue = function (key) {
    return this._hash[key];
};
HashStorageFunc.prototype.deleteKey = function (key) {
    return this._hash[key] ? delete this._hash[key] : false;
};
HashStorageFunc.prototype.getKeys = function () {
    return Object.keys(this._hash);
};

let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('Пина колада', 'алкогольный' );
drinkStorage.addValue('Сок',  'безалкогольный' );
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));

function ClassA() {
    HashStorageFunc.apply(this, arguments);
}
ClassA.prototype = Object.create(HashStorageFunc.prototype);
ClassA.prototype.constructor = ClassA;
ClassA.prototype.countDrinks = function () {
    return Object.keys(this._hash).length;
};
ClassA.prototype.addValue = function (key) {
    HashStorageFunc.prototype.addValue.apply(this, arguments);
    alert(`${key} добавлено в список`);
    return true;
};

function ClassB() {
    HashStorageFunc.apply(this, arguments);
}
ClassB.prototype = Object.create(HashStorageFunc.prototype);
ClassB.prototype.constructor = ClassB;
ClassB.prototype.deleteAll = function () {
    for (let key in this._hash) {
        delete this._hash[key];
    }
};
ClassB.prototype.getValue = function (key) {
    HashStorageFunc.prototype.getValue.apply(this, arguments);
    if (this._hash[key]) {
        alert(`${key} знаение есть в списке`);
    } else alert('этого значения не сущетвует в списке');
};

let classA = new ClassA();
let classB = new ClassB();