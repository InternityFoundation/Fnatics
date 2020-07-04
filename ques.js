function create_json()
{
	var q1 = document.getElementById("q1").value;
	var q2 = document.getElementById("q2").value;
	var q3 = document.getElementById("q3").value;
	var q4 = document.getElementById("q4").value;
	var q5 = document.getElementById("q5").value;
         
     
        var a1 = "The autonomous acquisition of knowledge through the use of computer programs";
        var a2 = "It discovers causal relationships";
        var a3 = "All of the above" ;
        var a4 = "JDB";
        var a5 = "[11,15,19]";

        console.log(q1);
        console.log(q2);
        console.log(q3);
        console.log(q4);
        console.log(q5);

        var i;

        
        if (a1==q1){
        i++;
        }
        

        if (a2==q2){
        i++;
        }
        

        if (a3==q3){
        i++;
        }
        

        if (a4==q4){
        i++;
        }
       

        if (a5==q5){
        i++;
        }
        
       console.log(i);


          
}
