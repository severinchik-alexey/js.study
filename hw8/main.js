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

let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('Пина колада', {'Алкогль' : 'да'});
drinkStorage.addValue('Сок', {'Алкоголь':'нет'});
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));
