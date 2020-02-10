function HashStorageFunc() {
    this._hash = {};
    this.addValue = function (key, value) {
        this._hash[key] = value;
    };
    this.getValue = function (key) {
        return this._hash[key];
    };
    this.deleteValue = function (key) {
        return this._hash[key] ? delete this._hash[key] : false;
    };
    this.getKeys = function () {
        return Object.keys(this._hash);
    };
}

function ClassA() {
    HashStorageFunc.call(this);
    this.deleteValue = function (key) {
        if (key in this._hash) {
            delete this._hash[key];
            return 'Successfully deleted';
        }
        return 'No such value';
    };
}

function ClassB() {
    HashStorageFunc.call(this);
    this.getEntries = function() {
        return Object.entries(this._hash);
    }
}
let classA = new ClassA();
let classB = new ClassB();

drinkStorage.addValue('Пина колада', {'Алкогль' : 'да'});
drinkStorage.addValue('Сок', {'Алкоголь':'нет'});
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));
