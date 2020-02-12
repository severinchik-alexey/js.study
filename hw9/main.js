function HashStorageFunc() {
    this.addValue = function (key, value) {
        this[key] = value;
    };
    this.getValue = function (key) {
        return (`
		Напиток: ${key}
		Алкогольный: ${this[key]}
    `);
    };
    this.deleteValue = function (key) {
        return this[key] ? delete this[key] : false;
    };
    this.getKeys = function () {
        return Object.keys(this);
    };
}

let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('Пина колада', 'да' );
drinkStorage.addValue('Сок',  'нет' );
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));


function ClassA(useful) {
    HashStorageFunc.call(this);
    this.getUseful = function () {
        return (`
        Полезный: ${useful}
        `);
    };
}

let drink = new ClassA('Да');

drink.addValue('Пина колада', 'да');
drink.addValue('Сок', 'да');
drink.deleteValue('Сок');
drink.getValue('Пина колада');
drink.getUseful();


function ClassB(drunk) {
    HashStorageFunc.call(this, arguments);
    let parentGetDrink = this.getValue;
    this.getValue = function (key) {
        parentGetDrink.apply(this, arguments);
        if (this[key]) {
            console.log(`${key} это знаение есть в списке`);
        } else console.log('этого значения не сущетвует в списке');
    };
}

const drunk = new ClassB('Напиток');