
// BUSINESS _________________________________________

function Order() {
  this.orderItems = [];
  this.orderTotal = 0;
  this.orderName;
  this.orderAddress;
}

function Pizza(size, crust) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.pizzaCrust = crust;
}











// FRONT-END ---------------------------------------

var currentOrder = new Order();

$("document").ready(function() {
    $("a#order-start").click(function(event) {
      event.preventDefault();

      $(".header").slideToggle();
      $("#landing-div").slideToggle();
      $("#order-div").slideToggle(function() {
        $("#order-row").fadeIn(250);
      });

      $("#addpizza").click(function () {
        $(".addtoppings").show();
      });

      $("button#add2order").click(function() {
        var pizzasize = $("select#pizzasize").val();
        var pizzacrust = $("select#pizzacrust").val();
        var newpizza = new Pizza(pizzasize, pizzacrust);

        $("input:checkbox[name=pizza-toppings]:checked").each(function() {
          var newtoppings = $(this).val();
          newpizza.pizzaToppings.push(newtoppings);
        });

        currentOrder.orderItems.push(newpizza);
        console.log(currentOrder);
      });
    })
});

function animateStuff(){
  $('body').hide();
}
