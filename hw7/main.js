const user = {
    name: 'Alexey',
    sex: 'male'
};

function info(surname, age) {
    console.log(`Name is ${this.name}, Surname is ${surname}, sex is ${this.sex}, age is ${age}`);
}

function myBind(func, context, ...args) {
    return function (...arg) {
        return func.call(context, ...args.concat(arg))
    }
};

myBind(info, user)('Severinchik', '23');
