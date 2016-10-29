
// BUSINESS _________________________________________

function Order() {
  this.orderItems = [];
  this.orderName;
  this.orderAddress;
  this.orderState;
  this.orderZip;
}

function Pizza(size, crust) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.cost = 10;
}


Order.prototype.totalOrderCost = function() {
  var totalcost = 0;
  for (var i = 0; i < this.orderItems.length; i += 1) {
    totalcost += this.orderItems[i].cost;
  }
  return totalcost;
};






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
      newpizza.cost +=1;
    });


    currentOrder.orderItems.push(newpizza);
    var total = currentOrder.totalOrderCost();

    updateOrder(total);

    $("#order-details").show();
  });

});


function updateOrder(totalcost) {
  $("#order-details").empty();
  var itemnum = 0;
  var toppings;
  $("#order-details").append("<h1> ORDER DETAILS </h1>")
  for (var itemindex = 0; itemindex < currentOrder.orderItems.length; itemindex += 1) {
    itemnum += 1;
    $("#order-details").append("<h3>" + itemnum + "." +  "Pizza: " + currentOrder.orderItems[itemindex].pizzaSize + ", " + currentOrder.orderItems[itemindex].pizzaCrust + " crust - $" + currentOrder.orderItems[itemindex].cost + "</h3><ul>");
    $("#order-details").append("<h4> Toppings: </h4>");
    for (var t = 0; t < currentOrder.orderItems[itemindex].pizzaToppings.length; t += 1) {
      $("#order-details").append("<li>" + currentOrder.orderItems[itemindex].pizzaToppings[t] + "</li>");
    };
    $("#order-details").append("</ul>");
  };

  $("#order-details").append("<h2>Order Total: $" + totalcost + "</h2>");
  $("#order-details").append("<button type='button' id='checkout'>Checkout</button>")

  $("button#checkout").click(function () {
    $(".add2div, .addtoppings, button#checkout").fadeOut(1000,function() {
      $("#address-div").fadeIn(1000);
    });
  });


};
