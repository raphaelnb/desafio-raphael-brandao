class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valor = 0.00;

        let codigosValidos = [
            { codigo: 'cafe', valor: 3.00, extra: false },
            { codigo: 'chantily', valor: 1.50, extra: true },
            { codigo: 'suco', valor: 6.20, extra: false },
            { codigo: 'sanduiche', valor: 6.50, extra: false },
            { codigo: 'queijo', valor: 2.00, extra: true },
            { codigo: 'salgado', valor: 7.25, extra: false },
            { codigo: 'combo1', valor: 9.50, extra: false },
            { codigo: 'combo2', valor: 7.50, extra: false },
        ]

        let itensPedidos = []

        for (let i = 0; i < itens.length; i++) {
            const itemDivido = itens[i].split(",");
            const item = {
                codigo: itemDivido[0],
                quantidade: parseFloat(itemDivido[1])
            }

            const ok = codigosValidos.find(codigo => codigo.codigo == item.codigo) 
            if (ok) {
                if (item.quantidade != 0 && item.quantidade != null && item.quantidade != undefined) {
                itensPedidos.push(item)
                } else {
                    return "Quantidade inválida!"
                }
            } else {
                return "Item inválido!"
            }        
        }

        for (let i = 0; i < itensPedidos.length; i++) {
            for (let j = 0; j < codigosValidos.length; j++) {
                if (itensPedidos[i].codigo == codigosValidos[j].codigo) {
                    valor += itensPedidos[i].quantidade * codigosValidos[j].valor
                }
            }
        }

    
        for (let i = 0; i < itensPedidos.length; i++) {
            for (let j = 0; j < codigosValidos.length; j++) {
                if (itensPedidos[i].codigo == codigosValidos[j].codigo) {
                    if (codigosValidos[j].extra == true) {
                        if (itensPedidos[i].codigo == 'chantily') {
                            if (itensPedidos.find(item => item.codigo == 'cafe')) {
                                valor += itensPedidos[i].quantidade * codigosValidos[j].valor
                            } else {
                                return "Item extra não pode ser pedido sem o principal"
                            }
                        } else if (itensPedidos[i].codigo == 'queijo') {
                            if (itensPedidos.find(item => item.codigo == 'sanduiche')) {
                                valor += itensPedidos[i].quantidade * codigosValidos[j].valor
                            } else {
                                return "Item extra não pode ser pedido sem o principal"
                            }
                        }
                    }
                }
            }  
        } 

        
        if (metodoDePagamento == 'credito') {
            valor = valor * 1.03
        } else if (metodoDePagamento == 'dinheiro') {
            valor = valor * 0.95
        } else if (metodoDePagamento != 'credito' && metodoDePagamento != 'dinheiro' && metodoDePagamento != 'debito') {
            return "Forma de pagamento inválida!"
        }   

        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!"
        }

        valor = valor.toFixed(2)
        valor = valor.toString()
        valor = valor.replace('.', ',')



        return `R$ ${valor}`;
    }

}

export { CaixaDaLanchonete };

