define([],function(){

	return {
		add : function(){
			var result = 0;
			for(var l = arguments.length; l--;){
				var num = arguments[l];
				if(typeof num !== "number"){
					throw new Error("error!");
				}
				result = result + num;
			}
			return result;
		}
	};
});