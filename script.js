/*
Реализуйте класс Employee (сотрудник), который имеет 
следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике 
(имя).
Реализуйте класс Manager (менеджер), который 
наследует класс Employee и имеет дополнительное 
свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и 
выводит информацию о менеджере (имя и отдел).

*/

class Employee {
  name = "Name";
  displayInfo() {
    console.log("Name");
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super();
    this.name = name;
    this.department = department;
  }
  displayInfo() {
    console.log(`Manager ${this.name} works is the ${this.department}`);
  }
}

const Manager = new Manager("Oleg", "finance");
Manager.displayInfo();
delete Manager.name;
Manager.displayInfo();


/*
Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный 
номер заказа.
Свойство products (продукты) - массив, содержащий список 
продуктов в заказе.
Метод addProduct(product) - принимает объект product и
 добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость 
заказа, основанную на ценах продуктов.
*/

class Order {
  orderNumber = 'Number';
  product = 'product';
  addProduct(product) {
    this.product +=product;
  }
  getTotalPrice(product){

  }
}
/*
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
}

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
*/
