


let Order = function (client, number){
    //atttributes
    this.client = client;
    this.number = number;
    this.positions = [];

    //initialize
    client.addOrder(this);

    //methods
    this.addPosition = function(product, quantity){
        let orderItem = new OrderItem(this, product, quantity);
        this.positions.push(orderItem);
    }

}