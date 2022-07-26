// Função que recebe 2 números e retorna o maior
/* 
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
*/

/*
function max(x,y) {
    if (x > y) return x;
    return y;
}
*/

/*
function max(x, y) {
    return x > y ? x : y;
} 
*/

/*
const max = (x, y) => {
    return x > y ? x : y;
}
*/

const max = (x, y) => x > y ? x : y;

console.log(max(100, 45));