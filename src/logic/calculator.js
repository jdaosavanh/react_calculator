class Calculator {

    add(a,b){
        return a + b;
    }

    subtract(a,b)
    {
        return a-b;
    }

    multiply(a,b)
    {
        return a*b;
    }

    divide(a,b)
    {
        if(b === 0){
            return 'NaN';
        }
        return a/b;
    }
}

class ScientificCalculator extends Calculator
{
    sin(a)
    {
        return Math.sin(a)
    }

    cos(a)
    {
        return Math.cos(a)
    }

    tan(a)
    {
        return Math.tan(a)
    }
}

let withExponents = function () {
   this.pow = (a,b) => Math.pow(a,b);
   this.multiplyExp = (a,b) => Math.pow(a[0],a[1])*Math.pow(b[0],b[1]);
   this.divideExp = (a,b) => Math.pow(a[0],a[1])/Math.pow(b[0],b[1]);
};

let delay = (delay, obj, method, args) => {
  return new Promise((resolve,reject) => {
      if (typeof obj[method] === 'function'){
          setTimeout(() => {
              resolve(console.log('obj', obj[method](args[0], args[1])));
          },delay)
      }
      reject();
  })
};