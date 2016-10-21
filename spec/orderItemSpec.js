describe("OrderItem", function(){

  beforeEach(function(){
    item = new OrderItem("Cafe Latte");
  });

  describe("items", function(){
    it("should store the name of the item", function(){
      expect(item.type).toEqual("Cafe Latte");
    });
    it("should check it is a valid item", function(){
      expect(item.isValidItem()).toEqual(true);
    });
  });
});
