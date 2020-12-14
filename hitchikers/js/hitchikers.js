
		$(".p1").click(function(){
			$(this).fadeOut(1)
			$(".p2").addClass("clicked1")
		})

		$(".p2").click(function(){
			$(this).fadeOut(1)
			$(".p3").addClass("clicked1")
		})

		$(".p3").click(function(){
			$(this).fadeOut(1)
			$(".p4").addClass("clicked1")
		})
		



		$(".p3").hover(function(){
			$(this).addClass("clicked2")
				
		},function(){
			$(this).addClass("clicked3")

			$(".p4").addClass("clicked1")
		

		});





		$(".p4").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(25)
			$(".p5").addClass("clicked1")
		});





		$(".p5").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(30)
			$(".p6").addClass("clicked1")
		});




		$(".p6").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(35)
			$(".p7").addClass("clicked1")
		});




		$(".p7").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(40)
			$(".p8").addClass("clicked1")
		});





		$(".p8").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(45)
			$(".p9").addClass("clicked1")
		});




		$(".p9").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(50)
			$(".p10").addClass("clicked1")
		});



		$(".p10").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(55)
			$(".p11").addClass("clicked1")
		});



		$(".p11").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(60)
			$(".p12").addClass("clicked1")
		});




		$(".p12").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(65)
			$(".p13").addClass("clicked1")
		});



		$(".p13").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(70)
			$(".p14").addClass("clicked1")
		});



		$(".p14").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(75)
			$(".p15").addClass("clicked1")
		});



		$(".p15").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(80)
			$(".p16").addClass("clicked1")
		});




		$(".p16").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(85)
			$(".p17").addClass("clicked1")
		});



		$(".p17").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(90)
			$(".p18").addClass("clicked1")
		});



		$(".p18").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(95)
			$(".p19").addClass("clicked1")
		});




		$(".p19").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(100)
			$(".p20").addClass("clicked1")
		});




		$(".p20").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(105)
			$(".p21").addClass("clicked1")
		});
		



		$(".p21").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(250)
			$(".p22").addClass("clicked1")
		});



		$(".p22").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(250)
			$(".p23").addClass("clicked1")
		});


		$(".p23").hover(function(){
			$(this).addClass("clicked2")

		},function(){
			$(this).addClass("clicked3")
			embiggenPlanet(250)
			$(".p24").addClass("clicked1")
		});



		$(".p24").click(function(){
			$(this).fadeOut(500)
			

		});





		function embiggenPlanet(num){
			var planetSize = $(".planet").width()+num;
			setTimeout(function(){
				$(".planet").css({
					"width":planetSize,
					"height":planetSize
				});
			},150)

}
