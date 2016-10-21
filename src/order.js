function Order(orderItemClass) {
    this.orderItemClass = OrderItem;
}

Order.prototype = {
  orderAnItem: function(){
    return new this.orderItemClass();
  }
};
