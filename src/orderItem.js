function OrderItem(type) {
    this.type = type;
    this.cost = null;
}

OrderItem.prototype = {
  itemCost: function(){
    if(this._isValidItem) this.cost = menu[0].prices[0][this.type];
    return this.cost;
  },
  _isValidItem: function(){
    if(menu[0].prices[0][this.type] !== undefined){
      return true;
    } else {
      return false;
    }
  }
};
