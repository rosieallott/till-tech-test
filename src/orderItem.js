function OrderItem(type) {
    this.type = type;

}

OrderItem.prototype = {
  isValidItem: function(){
    return true;
  }
};
