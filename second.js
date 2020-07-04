function create_json()
{
	
	var skills = [];
	var k = 0;
	for(var i=1;i<=3;i++) //3 is the total number of skills options given
	{
		var skill = "skill" + i + "checkbox"       //var name is skill2checkbox
		//console.log(skill)
		if(document.getElementById(skill).checked == true)
		{
			var level = document.getElementById("level"+i).value; //level2
			var name = document.getElementById("name"+i).innerHTML;  //name2
			json = { "name":name,"level":level};
			//console.log(json);
			skills[k++] = json;
			//console.log(skills);

		}
	}


	var workHistory = [];

	var org_name = document.getElementById("org_name").value;
	console.log(org_name);
	var startDate = document.getElementById("startDate").value;
	var endDate = document.getElementById("endDate").value;

	startDate = startDate.split("-");
	var start_month = startDate[1];
	var start_year = startDate[0];

	endDate = endDate.split("-");
	var end_month = endDate[1];
	var end_year = endDate[0];

	var is_working = true;    //update this later
	
	var tenure = {"start_month":start_month,"start_year":start_year,"end_month":end_month,"end_year":end_year,"is_working":is_working};


	var title = document.getElementById("title").value;

	console.log(tenure);
	console.log(title);

	var prname = document.getElementById("prname").value;
	var desc = document.getElementById("desc").value;
	var cont = document.getElementById("cont").value;
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;

	var duration = {"from":from,"to":to};

	var work_info = {"ProjectName":prname,"Description":desc,"Contribution":cont,"Duration":duration};

	var works = [];
	works[0] = work_info;

	var organisation1 = {"orgName":org_name,"tenure":tenure,"title":title,"Work":works};
	workHistory[0] = organisation1;


	var Education = [];

	Education[0] = {"schoolName":document.getElementById("").value,"schoolBoard":document.getElementById("").value,"duration":{"from":document.getElementById("").value,"to":document.getElementById("").value},"standard":document.getElementById("").value,"result":document.getElementById("").value};


	var jsondata = {"Skills":skills,"workHistory":workHistory};
	var myJSON = JSON.stringify(jsondata);
	console.log(myJSON);


}



