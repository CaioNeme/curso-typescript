/* 
? Tipos
* num = number = 42
* tex = string = 'hello'
* bool = boolean = true or false

* void = undefined or not return
* any = any type

* enum = fornece enumerações numéricas e baseadas em string.
* unknown = O unknowntipo representa qualquer valor. Isto é semelhante ao anytipo, 
*  mas é mais seguro porque não é legal fazer nada com um unknownvalor
* never = Algumas funções nunca retornam um valor "Throw"
* undefined = undefined
* null = null

*/

function multiply(num1:number, num2: number):number {
  return num1 * num2;
}

function sum(num1:number, num2:number):number {
  return num1 * num2;
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