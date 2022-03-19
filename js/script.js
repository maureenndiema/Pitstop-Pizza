//Business Logic
function Order(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
Order.prototype.newOrder 

//user Interface Logic
$(document).ready(function(){
  $("form#new-order").submit(function (event){
    event.preventDefault();

    var inputtedName = $("select#name").val();
    var inputtedSize = $("select#size").val();
    var inputtedCrust = $("select#crust").val();
    var inputtedTopping = $("select#topping").val();
    var inputtedTotal = $("select#total").val();

    var newOrder = new Order(
      inputtedName, inputtedSize, inputtedCrust, inputtedTopping, inputtedTotal
    );

    console.log(new0rder);
    $("tbody#ordermade").append("<tr>"+
"<td>"+newOrder.name+"</td>"+
"<td>"+newOrder.size+"</td>"+
"<td>"+newOrder.crust+"</td>"+
"<td>"+newOrder.topping+"</td>"+
"<td>"+newOrder.total+"</td>"+
+"</tr>")

   
});
});


// append("<tr>"+
// "<td>"+newOrder.name+"</td>"+
// "<td>"+newOrder.size+"</td>"+
// "<td>"+newOrder.crust+"</td>"+
// "<td>"+newOrder.topping+"</td>"+
// "<td>"+newOrder.total+"</td>"+
// +"</tr>")
