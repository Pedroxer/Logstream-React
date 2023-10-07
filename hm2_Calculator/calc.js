function compute(){
    let doc = document.getElementById("answ");
    let docValuePost = infixToPostfix(doc.value);
    console.log(docValuePost);
    let storydiv = document.getElementById("story");
    
    const stack =[];
    const operators = {
        '+':(a,b) => a+b,
        '-':(a,b) => a-b,
        '*':(a,b) => a*b,
        '/':(a,b) => a/b
    };
    for(let tok of docValuePost.split(' ')){
        if(!isNaN(tok)){
            stack.push(+tok);
        }else if(tok in operators){
            let b = stack.pop();
            let a = stack.pop();
            let result = operators[tok](a,b);
            stack.push(result); 
        }
    }

    var p = document.createElement("p");
    p.innerText = doc.value +" = "+ stack[0];
    storydiv.append(p)
    doc.value = stack[0];
    
}

function infixToPostfix(expression) {
    const operators = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      
    };
  
    let output = '';
    let operatorStack = [];
  
    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];
  
      if (!isNaN(token) && isFinite(token)) {
        output += token + ' ';
      } else if (token in operators) {
        while (
          operatorStack.length > 0 &&
          operators[token] <= operators[operatorStack[operatorStack.length - 1]]
        ) {
          output += operatorStack.pop() + ' ';
        }
        operatorStack.push(token);
      } 
    }
  
    while (operatorStack.length > 0) {
      output += operatorStack.pop() + ' ';
    }
  
    return output.trim();
  }
