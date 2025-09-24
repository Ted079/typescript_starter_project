const userProfile: {
  name: string;
  age: number;
  isMarried: boolean;
} = {
  name: "Tom",
  age: 22,
  isMarried: false,
};

userProfile.age = 26;

//==================/


// ==================================================================Ulbi
interface Address {
    city: string
    street?: string,
    coords?: number[],
};

type User = {
    name: string,
    surname?: string,
    age: number,
    salary?: number,
    adress: Address,
};


const user1: User = {
    name: "Rauf",
    age:24,
    adress:{
        city: "Baku",
        coords:[23, 21, 2]
    }
};

const user2: User[] = [{name: "rs", age:23, adress:{city: "Baku"}}];

function fn(user: User){
    console.log(user.name);
}

fn(user1);


//описание данных компонента, можно и через interface написать.
type ComponentsProps = {
    className: "string",
    color: "red" | "yellow",
};

//описание ответа backend
//<T> дженерики можно написать вместо unknow когда не знаем каким будет data.
//можно и через interface написать.
type ApiResponse<T> = {
    status: "succes" | "pending",
    data?: T; 
};

//описание ответа function
type onClick = (event: HTMLCollection) => void;











//arr

let array: string[];

array = ["s", "2", "22"];

let numArr: number[];
numArr = [1, 2, 3];

const numArr2: Array<number> = [1, 2, 23, 34, 5];

const numbers: ReadonlyArray<number> = [0, 1, 2, 3]; // нельзя никак не изменять, проверь пуш

//кортежи cortege

type TypeArray = [number, string, null];
const newArray: TypeArray = [1, "str", null];

const profile: [number, string, number] = [2, "str", 4];



const arr4: number[] = [3, 4, 5, 6];
const arr5: Array <number> = [5, 3, 4];

let arrStr: string[];
arrStr = ["c","ab"]; 

const arrBool: boolean[] = [true, false];





