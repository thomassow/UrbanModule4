let myName="Данил";
alert(myName);
console.log("первое задание")

function greeting (Name){
    alert (`Привет, ${Name}!`)
    console.log("Привет,"+ Name)
}
greeting("Данил")

function  celsiusToFahrenheit (c){
    const a=1.8;
    const b=32;
    const d=c*a+b;
    alert(`${d}`);
    console.log (d)
}
celsiusToFahrenheit(20)

function calculateFallDistance(t){
    const g=9.8;
    const d=0.5*9.8*t**2;
    alert(`${d}`);
    console.log (d)
}
calculateFallDistance(10)


function calculateAverage(a,b,c){
   const result=[a+b+c]/3;
   console.log (result);
}
calculateAverage(1,3,6)

function concatStrings(a,b){
    let str1=[`Это первое слово= ${a}`]
    let str2=[`Это второе слово= ${b}`]
    const str3=str1.concat(str2)
    console.log(str3)
}
concatStrings ("Привет","Пока")

