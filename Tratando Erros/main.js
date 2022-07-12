function soma(x, y) {
    if( typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferencerError('x e y precisam ser números') 
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log('qualquer coisa amigável para o usuário');
}