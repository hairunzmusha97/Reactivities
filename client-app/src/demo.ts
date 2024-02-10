let data : number | string = 42; //constant always will be 42 else will use let
data = '42';
console.log(data);

export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound:string) => void;
    makeQuack: () => void;
}

const duck1 : Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound:string) => console.log(sound),
    makeQuack:() => console.log()
}

const duck2 :Duck = {
    name: 'duey',
    numLegs: 2,
    makeSound: (sound:string) => console.log(sound),
    makeQuack: () => console.log('quack')
}
duck1.makeSound('sound');
duck2.makeQuack();


export const ducks = [duck1,duck2]
