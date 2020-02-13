function HashStorageFunc() {
    HashStorageFunc.prototype.addValue = function (key, value) {
        this[key] = value;
    };
    HashStorageFunc.prototype.getValue = function (key) {
        return (`
		Напиток: ${key}
		Алкогольный: ${this[key]}
    `);
    };
    HashStorageFunc.prototype.deleteValue = function (key) {
        return this[key] ? delete this[key] : false;
    };
    HashStorageFunc.prototype.getKeys = function () {
        return Object.keys(this);
    };
}

let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('Пина колада', 'да');
drinkStorage.addValue('Сок', 'нет');
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));

function ClassA(useful) {

}

ClassA.prototype = Object.create(HashStorageFunc.prototype);
ClassA.prototype.constructor = ClassA;

ClassA.getUseful = function () {
    HashStorageFunc.apply(this, arguments);
    return (`
        Полезный: ${useful}
	`);
};

function ClassB(drunk) {

}

ClassB.prototype = Object.create(HashStorageFunc.prototype);
ClassB.prototype.constructor = ClassB;

ClassB.apply(this, arguments);
let parentGetDrink = this.getValue;
this.getValue = function (key) {
    parentGetDrink.apply(this, arguments);
    if (this[key]) {
        console.log(`${key} это знаение есть в списке`);
    } else console.log('этого значения не сущетвует в списке');
};