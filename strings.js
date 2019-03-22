// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		

		var instance={};
		instance.repeat=repeat;



		return instance;


		//your code is here
	}
	var repeat=function(n,s){
		var str=""
		for(var i=0;i<n;i++){
			str+=s;
		}
		return str;
	}