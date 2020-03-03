
let OrderItem = function(order, product, quantity){
    this.order = order;
    this.product = product;
    this.quantity = quantity;

    this.calcValue = function(){
        return this.product.price * this.quantity;
    }
}