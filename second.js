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
			var name = document.getElementById("name"+i).value;  //name2
			json = { "name":name,"level":level};
			//console.log(json);
			skills[k++] = json;
			//console.log(skills);

		}
	}
	var jsondata = {"skills":skills};
	var myJSON = JSON.stringify(jsondata);
	//console.log(jsondata);
	console.log(myJSON);

}

