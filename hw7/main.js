const user = {
    name: 'Alexey',
    sex: 'male'
};

function info(surname, age) {
    console.log(`Name is ${this.name}, sex is ${this.sex}, Surname is ${surname}, age is ${age}`);
}

function myBind(func, context, ...args) {
    return function (...arg) {
        return func.call(context, ...args.concat(arg))
    }
};

myBind(info, user)('Severinchik', '23');
