function multiply(num1:number, num2:number):number {
    return num1 * num2;
}

function sum(num1:number, num2:number):number {
    return num1 + num2;
}

function isEven(num:number):boolean {
    return num % 2 === 0;
}

function showResult(result:number):void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1:string|null = prompt("First Number");
    const num2:string|null = prompt("Second Number");

    if (num1 && num2)  {
      const input1: number = Number(num1); 
      const input2: number = Number(num2); 

      let result: number = sum(input1, input2);
      result += multiply(1, 2);
      showResult(result);
  } else {
      alert("Invalid input");
  }
});
