/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/
function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }




function twoSum(array,target){
	var sum=0;
	
	return map(array,function(ele,i){
		each(array,function(elem,ii){
			sum = ele[i]+elem[i]
			if(sum<=target){
				console.log(elem,"[ ", i, "]")
			}
		})
		//we need loop to print the result 
		// insted llops to find the sum of index for this condition 
		//return element and index of it
	})
	
		
	
		 
	

}