// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
var splitted;
splitted = cardNumber.slice(0,2);

if(splitted === '38' || splitted === '39' && cardNumber.length === 14){
  return "Diner's Club";
}
if(splitted === '34' || splitted === '37' && cardNumber.length === 15){
  return "American Express";
}
splitted = cardNumber.slice(0,1);
if(splitted === "4"){
  if(cardNumber[1] !== '9'){
    if(cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
      return 'Visa';
    }
  }
  }

splitted = cardNumber.slice(0,2);
if(splitted === '51' || splitted === '52' || splitted === '53' || splitted === '54' || splitted === '55' && cardNumber.length === 16){
  return "MasterCard";
}

splitted = cardNumber.slice(0,4);
if(splitted === '6011' && cardNumber.length === 16 || cardNumber.length === 19){
  if(splitted === '6011'){
    return 'Discover';
  }

}


splitted = cardNumber.slice(0,3);
if(splitted === '644' || splitted === '645' || splitted === '646' || splitted === '647' || splitted === '648' || splitted === '649'){
    if(cardNumber.length === 16 || cardNumber.length === 19){
          return 'Discover';
    }
}

splitted = cardNumber.slice(0,2);
if(splitted === '65' && cardNumber.length === 16 || cardNumber.length === 19){
  if(splitted === '65'){
    return 'Discover';
  }
}

splitted = cardNumber.slice(0,4);
if(splitted === '5018' || splitted === '5020' || splitted === '5038' || splitted === '6304'){
  if(cardNumber.length >= 12 && cardNumber.length <= 19){
      return 'Maestro';
  }
}

splitted = cardNumber.slice(0,3);
if(splitted === '622'){
  splitted = cardNumber.slice(0,6);
  splitted = Number(splitted);
  if(splitted >= 622126 && splitted <= 622925){
    if(cardNumber.length >= 16 && cardNumber.length <= 19){
      return "China UnionPay";
    }
  }
}
splitted = Number(splitted);
if(splitted >= 624 && splitted <=626){
  if(cardNumber[0] === '6' && cardNumber[1] !== '3' && cardNumber[1] !== '7'){
    if(cardNumber.length >= 16 && cardNumber.length <= 19){
      return "China UnionPay";
    }
  }
  }

splitted = cardNumber.slice(0,4);
// splitted = Number(splitted);
  if(splitted === '6282' ||splitted === '6283' || splitted === '6284' || splitted === '6285' || splitted === '6286' || splitted === '6287' || splitted === '6288'){
    if(cardNumber[0] === '6' && cardNumber[1] !== '3' || cardNumber[1] !== '7'){
      if(cardNumber.length >= 16 && cardNumber.length <= 19){
        return "China UnionPay";
      }
    }
    }

  splitted = cardNumber.slice(0,4);
  if(splitted === '4903' || splitted === '4905' || splitted === '4911' || splitted === '4936'){
    if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
      return 'Switch';
    }
  }
  splitted = cardNumber.slice(0,6);
  if(splitted === '564182'){
    if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
      return 'Switch';
    }
  }

  splitted = cardNumber.slice(0,4);
  if(splitted === '6333'){
    if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
      console.log('sfd');
      return 'Switch';
    }
  }

  splitted = cardNumber.slice(0,6);
  if(splitted === '633110'){
    if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
      return 'Switch';
    }
  }

  splitted = cardNumber.slice(0,4);
  if(splitted === '6759'){
    if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
      return 'Switch';
    }
  }

};

console.log(detectNetwork('628212345676689098'));
console.log(detectNetwork('4123456789012'));
console.log(detectNetwork('4123456789012345'));
console.log(detectNetwork('4123456789012345678'));
console.log(detectNetwork('5112345678901234'));
console.log(detectNetwork('5212345678901234'));
console.log(detectNetwork('5312345678901234'));
console.log(detectNetwork('5412345678901234'));
console.log(detectNetwork('85123456345356345378901234'));
