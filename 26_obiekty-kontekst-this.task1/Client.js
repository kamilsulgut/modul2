

let Client = function (name){
    this.name = name;
    this.orders = [];

    this.addOrder = function(order){
        this.orders.push(order);
    }
}