const shopper = {
    name:  "Isaac",
    age: 24,
    groceryCart: ["soup", "chicken", "ice cream", "french bread", "beer"],
    isAlive: true,
    favoriteDrink: "Any good brewed beer",
    getGroceryCart: function(){
        return shopper.groceryCart[2];
    }
}
    console.log(shopper.getGroceryCart())
