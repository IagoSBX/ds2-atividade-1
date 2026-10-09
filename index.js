function totalDesconto(valor, desconto ){
    if(valor > 0 && desconto > 0){
        return valor + desconto
    }
    return 0
}
console.log(totalDesconto(10,5));