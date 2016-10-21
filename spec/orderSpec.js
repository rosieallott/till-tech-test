describe("Order", function(){

  beforeEach(function(){
    orderItem = jasmine.createSpyObj('orderItem', ['isValidItem']);
    spyOn(window, "orderItem").and.returnValue(orderItem);
    // orderItem.isValidItem.and.returnValue(true);
    order = new Order({orderItem: orderItem});
  });

  describe("orderAnItem function", function(){
    it("should create a new orderItem", function(){
      order.orderAnItem();
      expect(orderItem).toHaveBeenCalled();
    });
  });
});
