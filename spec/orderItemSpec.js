describe("OrderItem", function(){

  describe("properties of items", function(){
    beforeEach(function(){
      item = new OrderItem("Cafe Latte");
    });
    it("should store the name of the item", function(){
      expect(item.type).toEqual("Cafe Latte");
    });
    it("should have a null cost property initially", function(){
      expect(item.cost).toEqual(null);
    });
  });

  describe("#isValidItem function", function(){
    it("should check it is a valid item", function(){
      item = new OrderItem("Cafe Latte");
      expect(item.isValidItem()).toEqual(true);
    });
    it("should check it is a valid item", function(){
      item = new OrderItem("not an item");
      expect(item.isValidItem()).toEqual(false);
    });
  });
});
