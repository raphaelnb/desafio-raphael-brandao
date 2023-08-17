const splitStringByCommans = (string) => string.split(',');

const metodoPagamento = (pagamento) => {
    pagamento == 'dinheiro' || pagamento == 'cartao' || pagamento == 'cheque'
    ? {
        return: true
    }
    : {
        return: false
    }
}

module.exports = metodoPagamento;

module.exports = splitStringByCommans;