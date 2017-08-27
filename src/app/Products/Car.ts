export class Car<T>
{
    GetMilage(val1: T, val2: T): T {
        return val1;
    }
}

export class Bus {
    GetMilage<T>(val1: T, Val2: T):T {
        return val1;
    }
}

export class Vehicale {
    constructor() {
        let car: Car<string> = new Car<string>();
        //car.GetMilage()

        let bus: Bus = new Bus();
        //bus.GetMilage<number>(25, 26);
        //bus.GetMilage(25, 26);
    }
}