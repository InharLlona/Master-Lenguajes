const { isInterfaceDeclaration } = require("typescript");


1111111111111111111111111
1111111111111111111111111
1111111111111111111111111


let arrayt: number[] =[11,2,3,4,5];

const head = (first,...otros) => first; 
console.log(head (arrayt));

const tail = (first,...otros) => otros; 
console.log(tail (arrayt));

const init = (data) => {
    data.pop();
    return data
}; 
console.log(init (arrayt));

const last = (data) => data.pop() 
console.log(last (arrayt));


2222222222222222222222222
2222222222222222222222222
2222222222222222222222222


let a = [1,2,3,4]
let b = ["a","b","c","d"]
let c = ["z","w","y"]


const concat =(a,b) => a.concat(...b) 
console.log(concat(a,b))


const concat2 = (...args) => {
    let v = []
    args.forEach(element =>v.push(...element))
    return v
}
console.log(concat2(c,b,c,a))


3333333333333333333333333
3333333333333333333333333
3333333333333333333333333


const m = { name: "Maria", surname: "Ibañez", country: "SPA" };


function clone(a) {
    return b = {...a}
  }
  console.log(m)


const r = { name: "Maria", surname: "Ibañez", country: "SPA" };
const s = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    const merged = {...target,...source}
    return merged;
  }
  console.log(merge(r,s))


  //444444444444444444444444
  //444444444444444444444444
  //444444444444444444444444


  interface book {
    title:String;
    isRead:Boolean;
  }
  
  const books: book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  function isBookRead(books : book[], titleToSearch : string):Boolean {
   return ((books.find(element => element.title === titleToSearch))?(books.find(element => element.title === titleToSearch)).isRead:false)
  }
  console.log(isBookRead(books,"Devastación"))

 
  //555555555555555555555555
  //555555555555555555555555
  //555555555555555555555555

  
  class SlothMachine {
    private counter: number;
    constructor(){
      this.counter = 0;
    }
    play = () => {
      let val : number[] = [0,0,0];
      this.counter++
      if((val.map (()=>{return Math.round(Math.random())} )).every(ele => ele===1)){
        console.log('\x1b[32m%s\x1b[0m' ,`Congratulations!!!. You won ${this.counter} coins!!`)
        console.log(`Push play to continue playing`)
        this.counter = 0;
      }else{
        console.log('\x1b[31m%s\x1b[0m' , 'Good luck next time!!')
        console.log(`Push play to continue playing`)
      }
    }
  }
  
  const machine1 = new SlothMachine();
  document.getElementById("play").addEventListener("click", machine1.play); 
 