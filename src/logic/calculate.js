
const calculate = (state,button) => {


};

const calculation = (a, b, operation) =>
{
    if (operation === "+") {
        return add(a,b);
    }
    if (operation === "-") {
        return subtract(a,b);
    }
    if (operation === "x") {
        return multiply(a,b);
    }
    if (operation === "/") {
        return divide(a,b);
    }
};

const add = (a,b) =>
{
    return a + b;
};

const subtract = (a,b) =>
{
    return a-b;
};

const multiply = (a,b) =>
{
    return a*b;
};

const divide = (a,b) =>
{
    if(b === 0){
        return 'NaN';
    }
    return a/b;
};

export default calculate