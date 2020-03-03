


let productMouse = new Product("mouse", 20.50);
let productKeybord = new Product("keybord", 30.00);
let productPrinter = new Product("printer", 279.99);

let client = new Client("John Doe");
let order = new Order(client, "ZO/0001");
order.addPosition(productMouse, 2);
order.addPosition(productKeybord, 4);
order.addPosition(productPrinter,1);

let client = new Client("John Black");
let order = new Order(client, "ZO/0002");
order.addPosition(productMouse, 2);
order.addPosition(productKeybord, 4);
order.addPosition(productPrinter,1);

