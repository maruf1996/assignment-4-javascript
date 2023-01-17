// problem:1
function radianToDegree(radian){
   if(typeof(radian)==='number'){
    const converted=radian*180.0/Math.PI;
    const finalResult=parseFloat(converted.toFixed(2));
    return finalResult;
   }else{
    console.log('Please.. Provide a number')
   }
}
const radian=10;
const convertRadian=radianToDegree(radian);
console.log(convertRadian);

// problem:2
function isJavaScriptFile(str){
  if(typeof(str)==='string'){
    const lastCharWord= str.slice(-3);
    if(lastCharWord === '.js'){
        return true
    }
    else{
        return false;
    }
  }
  else{
    console.log('Please.. Provide a string')
  }
}
const fileName='app.js';
const jsFileCheck=isJavaScriptFile(fileName);
console.log(jsFileCheck);

// problem:3
function oilPrice(diesel,petrol,octen){
    if(typeof(diesel,petrol,octen)==='number'){
    const dieselPrice=114*diesel;
    const petrolPrice=130*petrol;
    const octenPrice=135*octen;
    const sum=dieselPrice+petrolPrice+octenPrice;
    return sum;
    }
    else{
        console.log('Please.. Provide a number')
    }
}
const TotalOilPrice=oilPrice(1,1,1);
// console.log(TotalOilPrice);

// problem:4
function publicBusFare(mans){
   if(typeof(mans)==='number'){
    const busQuantity=Math.floor((mans/50));
    const busesMan=busQuantity*50;
    const microBusQuantity=Math.floor((mans-busesMan)/11);
    const microBusesMan=microBusQuantity*11;
    const localBusesMan=mans-(busesMan+microBusesMan);
    const sumLocalBusesPrice=localBusesMan*250;
    return sumLocalBusesPrice;
   }
   else{
    console.log('Please.. Provide a number')
   }
}
const totalPrice=publicBusFare(365);
// console.log(totalPrice);

// problem:5
function isBestFriend(friend1,friend2){
   if(typeof(friend1,friend2) ==='object'){
    if(friend1.name===friend2.friend && friend2.name===friend1.friend){
        return true;
    }
    else{
        return false;
    }
   }
   else{
    console.log('Please.. Provide an object')
   }
}
const friend1={name:'maruf',friend:'rasel'};
const friend2={name:'rasel',friend:'maruf'};
const bestFriend=isBestFriend(friend1,friend2);
// console.log(bestFriend);

