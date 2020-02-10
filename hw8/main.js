function HashStorageFunc () {
        this.addValue = function (key, value) {
            this[key] = value;
        };
        this.getValue = function (key) {
            return (`
                Напиток: ${key}
                Алкогольный: ${this[key]}`);
        };
        this.deleteValue = function (key) {
            return this[key]? delete this[key] :false;
        };
        this.getKeys = function () {
            return Object.keys(this);
        };
    }
let drinkStorage = new HashStorageFunc();

drinkStorage.addValue('Пина колада', 'да');
drinkStorage.addValue('Сок', 'нет');
drinkStorage.deleteValue('Сок');
console.log(drinkStorage.getValue('Пина колада'));
