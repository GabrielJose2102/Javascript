//Cortar paginas de libros
let paginasLibros = (stock, libro, pagina)=> {
    if (stock[libro] == undefined) {
       return pagina;
    }
    return paginasLibros(stock, libro+1, pagina+=stock[libro]);
}

console.log(paginasLibros([80, 93, 125, 250, 300], 0, 0));


//Secuencia fibonacci
let fibonacci = (a, b, c)=> {

     console.log(c);
    if (c >= 500) {
        return console.log(c);
    }

    return fibonacci(a=b, b=c, c=a+b)
}

fibonacci(0, 1, 0)