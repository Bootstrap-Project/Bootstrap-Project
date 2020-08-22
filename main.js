
function factory (name,price,size,colors,img){
	return {
		name: name,
		price:price,
		size:size,
		colors:colors,
		img:img
	}
}



var database = [{name:"GAP",price:"1600",size:["M","S","L"], colors:["blue","red"], img:"../Bootstrap-Project/pics/shoe6.jpg"},
					{name:"Leather",price:"1800",size:["M","S","L"], colors:["blue","red"], img:"../Bootstrap-Project/pics/shoe7.jpg"},
					{name:"Nike Air",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe5.jpg"},
					{name:"Asics",price:"800",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe4.jpg"},
					{name:"Basic",price:"2200",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe3.jpg"},
					{name:"Sancho",price:"1300",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe9.png"},
					{name:"Lacoste",price:"3900",size:["M","S","L"], colors:["blue","red"], img:"../Bootstrap-Project/pics/shoe1.jpg"},
					{name:"Nike Cyber",price:"2700",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoes.jpg"},
					{name:"Classic",price:"2700",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/canvas.jpg"},
					{name:"Slinger",price:"2700",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/slinger.jpg"}]








$(document).ready(function(){
	//var database = {first:{name:"Nike",price:"2000",size:["M","S","L"], colors:["blue","red"]}}
// 	console.log($('#quantity'));

// $('#quantity').change(function(){
// 	console.log("changed");
// });
	// $('#totale')[0].value=(Number($('#quantity')[0].value)*45);
var loged = "hidden"

					var createItem = function(obj,index){
			return $(`<div class="holder">
	  			<div class="pic">
	  			<img class="image" src="${obj.img}">
	  			</div>
			  	<div class="info">
			  		<button class="buyBtn" id="${index}">Buy now</button>
			  		<button class="delBtn" style="background-color:red" id="D${index}" ${loged}>DELETE</button>
			  		<p>${obj.name}</p>
			  		<p>Size: ${obj.size}</p>

			  	</div>
			  	</div>`)
	}

var showItem = function(){
			$("#rows").html("")
			for (var i = 0; i <database.length; i++) {
				createItem(database[i],i).appendTo($("#rows"))
			}
	}
showItem();




$("#logout").hide()
var createDiv = function(){
}

  $(".buyBtn").click(function(){
  	var indObj= database[$(this).attr("id")]
	var newdiv = $(`<div class="buying"><img class="image" src="${indObj.img}"><form><fieldset><legend>Purchase</legend><br><br>

		<h1><span>${indObj.name}</span>
  		<h2>   Price:<span id="punit">${indObj.price}</span> $</h2>
  		<h2>   Size:<span>${indObj.size}</span></h2>
  		<h2>   Color:<span>${indObj.colors}</span></h2>
  <label for="quantity">Quantity :</label>
  <input type="number" id="quantity" value="">
  <label for="totale">Totale:</label>
  <span  id="totale" name="totale">${indObj.price} $</span><br><br>
  <label for="name">Name:</label>
  <input type="text" id="name"><br><br>
  <label for="phone"> Phone:</label>
  <input type="tel" id="phone" placeholder="00216 99 999 999" pattern="[0-9]{5}[0-9]{2}[0-9]{3}[0-9]{3}" required><br><br>
  <label  for="creditCard"> Credit Card:</label>
  <input type="tel" id="creditCard" placeholder="0000-0000-0000-0000" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required><br><br>
  <div><button id="submito" type="submit">Buy</button></div>
  </fieldset>
</form></div>`)



  	$(".row").hide();
  	$("body").append(newdiv);


 	$('#quantity').on('change', function(){
  		console.log("changed");
  		$("#totale").html(($("#punit").html()*$('#quantity').val())+" $")

  	});


  	$('#quantity').on('keypress', function(){
  		console.log("changed");
  		$("#totale").html(($("#punit").html()*$('#quantity').val())+" $")
  	});
  //console.log()

  $('#submito').on('click',function(){
   if((typeof $('#name').val() === "string") && ($('#quantity').val() > 0)) {

   	alert('Thank you for your purchase. your order is being processed');
   }
     

})
});


$("#home").click(function(){

		$(".buying").hide();
		$(".row").show();
	});

$("#loging").click(function(){
	var logDiv = $(`<div id="myModal" class="modal">

  <div class="modal-content">
    <div class="close">&times;</div>
        <label for="admin">Admin</label>

    <input type="text" id="admin"><br><br>
    <label for="admin">PassW</label>
    <input type="password" id ="pass">
    <button id="add">login</button>
  </div>

</div>`)
  $("#myModal").css("display" , "block");
  $("body").append(logDiv);

$(".close").click(function(){
$("#myModal").css("display" , "none");
 $("body").remove(logDiv);
});

$("#add").click(function(){
if(($("#admin").val()) === "admin" && ($("#pass").val())==="admin"){	
$("#myModal").css("display" , "none");
 $("body").remove(logDiv);
	loged ="";
	showItem();
	$("#loging").hide();
	$("#logout").show();
	

	$(".delBtn").on('click',function(){
	var x = $(this).attr("id");
	loged=""
	database.splice(parseInt(x.substr(1)),1);
	showItem()
})

	
}else{
	alert("Access denied");
}
})




$("#logout").click(function(){
	loged="hidden";
	showItem();
	$("#loging").show();
	$("#logout").hide();
})


});

});

