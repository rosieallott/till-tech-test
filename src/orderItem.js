function OrderItem(type) {
    this.type = type;
    this.cost = null;
}

OrderItem.prototype = {
  isValidItem: function(){
    if(menu[0].prices[0][this.type] !== undefined){
      return true;
    } else {
      return false;
    }
  }
};
