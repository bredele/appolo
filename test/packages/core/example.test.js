require(["core/example"], function(Example){


	describe("Singleton test case", function(){

		it("should be an object", function(){
			//a singleton is an object (not a function)
			expect(Example).toBeInstanceOf(Object);
			expect(Example).not.toBeInstanceOf(Function);
		});

		it("should be a singleton", function(){
			//a singleton has only one instance
			require(["core/example"], function(Other){
				expect(Other).toBe(Example);
			});
		});

	});

	describe("Add util test case", function(){

		it("should have a add function", function(){
			expect(Example.add).toBeInstanceOf(Function);
		});

		it("should return the result of an addition", function(){
			expect(Example.add(1,2)).toEqual(3);
			expect(Example.add(2,5)).toEqual(7);
		});

		it("must add 1 or several parameters", function(){
			expect(Example.add(4)).toEqual(4)
			expect(Example.add(4,5)).toEqual(9);
			expect(Example.add(4,5,6)).toEqual(15);

			var parameters = [1,2,3,4,5,6,7];
			expect(Example.add.apply(null,parameters)).toEqual(28);
		});

		it("should return 0 if no parameters", function(){
			expect(Example.add()).toEqual(0);
		});

		it("should only add numbers", function(){

			expect(function(){
				Example.add(true, 2);
			}).toThrow("error!");

			expect(function(){
				Example.add(true, 2);
			}).toThrow("error!");

			expect(function(){
				Example.add(3, "2");
			}).toThrow("error!");

			expect(function(){
				Example.add(1, null);
			}).toThrow("error!");

			var parameters = [1,2,3,4,undefined,6,7];

			expect(function(){
				Example.add.apply(null, parameters);
			}).toThrow("error!");
		});



	});
});