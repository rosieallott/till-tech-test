function Order(orderItemClass) {
    this.orderItemClass = orderItemClass || OrderItem;
}

Order.prototype = {
  orderAnItem: function(){
    return new this.orderItemClass();
  }
};
