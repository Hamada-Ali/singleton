// singleton design pattern

// class must extract the same instance everytime

class Singleton {
    constructor() {
        if(Singleton.instance instanceof Singleton) {
            return Singleton.instance;
        }
        this.data = {
            key: Math.floor(Math.random() * 1000)
        }

        Object.freeze(this.data)
        Singleton.instance = this
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1)

console.log(singleton2)