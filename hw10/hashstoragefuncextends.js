class HashStorageFunc {
    constructor() {
        this._hash = {};
    }
    addValue(key, value) {
        this._hash[key] = value;
    }
    getValue(key) {
        return this._hash[key];
    }
    deleteKey(key) {
        return this._hash[key] ? delete this._hash[key] : false;
    }
    getKeys() {
        return Object.keys(this._hash);
    }
}

let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('Пина колада', 'алкогольный' );
drinkStorage.addValue('Сок',  'безалкогольный' );
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));

class ClassA extends HashStorageFunc {
    countDrinks() {
        return Object.keys(this._hash).length;
    }
    addValue(key, value) {
        super.addValue(key, value);
        alert(`${key} добавлено в список`);
        return true;
    }
}

class ClassB extends HashStorageFunc {
    deleteAll() {
        for (let key in this._hash) {
            delete this._hash[key];
        }
    }
    getValue(key) {
        if (this._hash[key]) {
            alert(`${key} знаение есть в списке`);
        } else alert('этого значения не сущетвует в списке');
        return super.getValue(key);
    }
}

let classA = new ClassA();
let classB = new ClassB();