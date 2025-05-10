class Pedido{
    constructor(){
        this.itens = []
        this.status = "Pendente"
        this.taxaEntrega = 5.0
        this.desconto = 0.0
    }

    adicionarItem(nome, preco, quantidade){
        if(!nome || preco <= 0 || quantidade <= 0){
            throw new Error("Item inválido. Verifique os dados");
        }

        this.itens.push({nome, preco, quantidade});
    }

    calcularTotal(){
        const subtotal = this.itens.reduce(
            (total, item) => total + item.preco * item.quantidade, 0
        );
        const desconto = subtotal * (this.desconto / 100);
        return subtotal - desconto + this.taxaEntrega;
    }

    aplicarDesconto(codigoPromocional){
        const descontos = {
            PROMO10: 10,
            PROMO20: 20
        }
        if(descontos[codigoPromocional]){
            this.desconto = descontos[codigoPromocional]
        }else{
            throw new Error("Código promocional inválido")
        }
    }
    confirmar(){
        if(this.itens.length === 0){
            throw new Error("Pedido vazio. Adicione itens!")
        }
        this.status = "Confirmado";
    }
    cancelar(){
        this.status = "Cancelado";
    }
}
module.exports = Pedido;