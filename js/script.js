//Business Logic
function Order(name, size, crust, quantity,toppings, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.quantity = quantity;
  this.toppings = toppings;
  this.total = total;
}
Order.prototype.newOrder 
 var sumtotal = 0
//user Interface Logic
$(document).ready(function(){
  $(".delivery").hide()
  $("#checkout").click(function () {
  alert("Hello,this is your order and the total amount is ksh."+sumtotal)

   
  $(".delivery").show()   
  });
  $("#place-order").click(function () {
    locationvalidate() 
   
    // $(".delivery").show()   
    });
  
  let toppings = []
        $("#bacon-toppings").change(function () {
            if (this.checked) {
                toppings.push($("#bacon-toppings").val())
               
            }
        });
        $("#sausage-toppings").change(function () {
            if (this.checked) {
                toppings.push($("#sausage-toppings").val())
                // console.log($("#topping-1").val())
            }
        });

        $("#mushroom-toppings").change(function () {
          if (this.checked) {
              toppings.push($("#mushroom-toppings").val())
            }
          });
        
  $("form#new-order").submit(function (event){
    event.preventDefault();

    var inputtedName = $("select#pname").val();
    var inputtedSize = $("select#size").val();
    var inputtedCrust = $("select#crust").val();
    var inputtedQuantity = $("select#quantity").val();
    var inputtedToppings = toppings
    var toppingsPrice = toppings.length *70
    var sizePrice = $('#size').find('option:selected').attr('price');
    var crustPrice = $('#crust').find('option:selected').attr('price');
   
    

    
    var inputtedTotal = $("select#total").val();

    var newOrder = new Order(
      inputtedName, inputtedSize, inputtedCrust, inputtedQuantity, inputtedToppings, inputtedTotal
    );
    var sumTotal = Number(sizePrice) + Number(crustPrice) +Number(toppingsPrice)
    sumtotal = sumTotal

 
    console.log(newOrder);
    $("tbody#ordermade").append("<tr>"+
"<td>"+newOrder.name+"</td>"+
"<td>"+newOrder.size+"</td>"+
"<td>"+newOrder.crust+"</td>"+
"<td>"+newOrder.quantity+"</td>"+
"<td>"+newOrder.toppings+"</td>"+
"<td>"+sumTotal+"</td>"+
+"</tr>")

function locationvalidate () {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var location = document.getElementById("location").value;
  if (name == "" || phone  == ""|| location  == ""){
    alert("Please enter your name, phone number and location.");
     return false;
  }
  // else{
  //   alert ("Your order will be delivered to " + locateLocation + ".  Delivery charges are Ksh.100");
  //       }
  }
  
});
$("form#formsubmit").submit(function (event){
  event.preventDefault();
    var clientName = $("#formsubmit #name").val();
    var clientPhone = $("#formsubmit #phone").val();
    var clientLocation = $("#formsubmit #location").val();
  alert ("Hey,"+ clientName + " your order will be delivered to " + clientLocation + " you will be contacted on "+ clientPhone +".  Delivery charges are Ksh.100");

});
});



