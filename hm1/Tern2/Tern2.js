// function manyChecks() {
//   let a = Math.floor(Math.random() * 20) + 1;
//   console.log(`a = ${a}`);
  
//   return (
//     a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) 
//     + (a === 15 ? 'but a is not 15' : '')
//     + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') 
//     + (a % 2 ? ' and a is odd' : ' and a is even ');
// }

// console.log(manyChecks());

function manyChecksNative(){
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let res = "";
  if (a > 10){
      res += 'a is bigger than 10';
  }else{
    res += 'a is less than or equal to 10';
    if (a === 5){
      res +=' an example of a special case';
    }else{
      res += '';
    }
  }
  if(a === 15){
    res += ' but a is not 15';
  }else{
    res+='';
  }
  if(a > 5){
    res += ' and a is greater than 5';
  }else{
    res += ' and a is less than equal to 5';
  }
  if(a % 2){
    res += ' and a is odd';
  }else{
    res += ' and a is even';
  }
  return(
    res
  )
}
console.log(manyChecksNative());
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()