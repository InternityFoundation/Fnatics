function create_json()
{
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var mail = document.getElementById("mail").value;
	var mobile = document.getElementById("mobile").value;
	var whatsapp = document.getElementById("whatsapp").value;
	var gender = document.getElementById("gender").value;
	var mstatus = document.getElementById("mstatus").value;

	var lang = document.getElementById("lang").value;
	var native = document.getElementById("native").value;

	var jsondata = {"name":name,"email":mail,"phone":mobile,"wa_num":whatsapp,"gender":gender,"marital_status":mstatus,"lang_known":lang,"native_location":native}
	var myJSON = JSON.stringify(jsondata);
	console.log(myJSON);

	$.ajax({
          url: "http://bugswriter.pythonanywhere.com/user",
          type: "POST",
          data: myJSON,
          dataType: "json",
          beforeSend: function(x) {
            if (x && x.overrideMimeType) {
              x.overrideMimeType("application/j-son;charset=UTF-8");
            }
          },
          success: function(result) {
          	alert("yes sent");


          }
	});



}

