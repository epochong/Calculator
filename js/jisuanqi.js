var anV1 = "";
			var anV2 = "";
			var ysf = "";
			var p1 = document.getElementById("p");
			var bfh1 = document.getElementById("bfh");
			var kai1 = document.getElementById("kai");
			var guan1 = document.getElementById("guan");
			var show = document.getElementById("wenben");
			var num = document.getElementsByClassName("an");
			var ysf1 = document.getElementsByClassName("ysf");
			var denghao1 = document.getElementById("denghao");
			var tuige1 = document.getElementById("tuige");
			var qk1 = document.getElementById("qk");

			//用for循环给数字添加点击事件
			for (i = 0; i < num.length; i++) {
				num[i].onclick = function() {

					if (this.innerHTML == ".") {
						if (anV1.indexOf(".") == -1 && anV1.length >0) {
							anV1 += this.innerHTML;

						}

					} else {

						anV1 += this.innerHTML;
					}

					//拿到点击的数字显示到文本框
					show.value = anV1;

				}

			}

			//用for循环给运算符添加点击事件
			for (i = 0; i < ysf1.length; i++) {
				ysf1[i].onclick = function() {
					if (anV2 == "") {
						//把第一个数字给第二个变量，把第一个数字变量清空用来保存第二次的数字
						anV2 = anV1;
						anV1 = "";
						//保存点击的运算符
						ysf = this.innerHTML;
					} else {
						deng();
						ysf = this.innerHTML;
					}
				}
			}

			//给等号添加点击事件
			denghao1.onclick = function() {
					deng();
				}
				//给退格添加点击事件
			tuige1.onclick = function() {
					if (anV1.length > 0) {
						var tui = anV1.substring(0, anV1.length - 1);
						anV1 = tui;
						show.value = anV1;
					}
				}
				//给清空添加点击事件
			qk1.onclick = function() {
					anV1 = "";
					anV2 = "";
					ysf = "";
					show.value = "0";
				}
				//给π添加点击事件
			p1.onclick = function() {
					var i = 3.1415926;
					show.value = i;
					anV1 = i;

				}
				//给百分号添加点击事件
			bfh1.onclick = function() {
					var i = anV1 / 100;
					show.value = i;
					anV1 = i;
				}
				//给关添加点击事件
			guan1.onclick = function() {

					show.value = "";
					anV1 = "";
					anV2 = "";
					ysf = "";
					jg = "";

					for (i = 0; i < num.length; i++) {
						num[i].onclick = ! function() {
							if (this.innerHTML == ".") {
								if (anV1.indexOf(".") == -1 && anV1.length > 0) {
									anV1 += this.innerHTML;

								}

							} else {

								anV1 += this.innerHTML;
							}

							show.value = anV1;
						}
					}

					for (i = 0; i < ysf1.length; i++) {
						ysf1[i].onclick = ! function() {
							if (anV2 == "") {
								//把第一个数字给第二个变量，把第一个数字变量清空用来保存第二次的数字
								anV2 = anV1;
								anV1 = "";
								//保存点击的运算符
								ysf = this.innerHTML;
							} else {
								deng();
								ysf = this.innerHTML;
							}
						}
					}

					denghao1.onclick = ! function() {
						deng();
					}

					tuige1.onclick = ! function() {
						if (anV1.length > 0) {
							var tui = anV1.substring(0, anV1.length - 1);
							anV1 = tui;
							show.value = anV1;
						}
					}

					qk1.onclick = ! function() {
						anV1 = "";
						anV2 = "";
						ysf = "";
						show.value = "0";
					}
					p1.onclick = ! function() {
						var i = 3.1415926;
						show.value = i;
						anV1 = i;

					}

					bfh1.onclick = ! function() {
						var i = anV1 / 100;
						show.value = i;
						anV1 = i;
					}

				}
				//给开添加点击事件
			kai1.onclick = function() {
				show.value = "0";

				for (i = 0; i < num.length; i++) {
					num[i].onclick = function() {
						if (this.innerHTML == ".") {
							if (anV1.indexOf(".") ==-1 && anV1.length > 0) {
								anV1 += this.innerHTML;

							}

						} else {

							anV1 += this.innerHTML;
						}

						show.value = anV1;
					}

				}

				for (i = 0; i < ysf1.length; i++) {
					ysf1[i].onclick = function() {
						if (anV2 == "") {
							//把第一个数字给第二个变量，把第一个数字变量清空用来保存第二次的数字
							anV2 = anV1;
							anV1 = "";
							//保存点击的运算符
							ysf = this.innerHTML;
						} else {
							deng();
							ysf = this.innerHTML;
						}
					}
				}

				denghao1.onclick = function() {
					deng();
				}

				tuige1.onclick = function() {
					if (anV1.length < 0) {
						var tui = anV1.substring(0, anV1.length - 1);
						anV1 = tui;
						show.value = anV1;
					}
				}

				qk1.onclick = function() {
					anV1 = "";
					anV2 = "";
					ysf = "";
					show.value = "0";
				}

				p1.onclick = function() {
					var i = 3.1415926;
					show.value = i;
					anV1 = i;

				}

				bfh1.onclick = function() {
					var i = anV1 / 100;
					show.value = i;
					anV1 = i;
				}

			}

			function deng() {
				//把两个字符串转成数字
				var one = new Number(anV2);
				var two = new Number(anV1);
				//定义一个变量保存结果
				var jg = 0;
				switch (ysf) {
					case "+":
						jg = one + two;
						break;
					case "-":
						jg = one - two;
						break;
					case "*":
						jg = one * two;
						break;
					case "/":
						if (two == 0) {
							alert("不对");
							anV1 = "";
							anV2 = "";
							ysf = "";
							show.value = "0";
						} else {
							jg = one / two;
						}

						break;

				}

				anV2 = jg;
				anV1 = "";
				show.value = jg;
				//显示计算的结果
			}