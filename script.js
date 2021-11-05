var menuList = document.getElementById('menuList');
		menuList.style.maxHeight = "0px";
		function togglemenu(){
			if(menuList.style.maxHeight === "0px")
			{
				menuList.style.maxHeight = "100px"
			}
			else
			{
				menuList.style.maxHeight = "0px";
			}
		}

		document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";

        setTimeout(visibilityToggle,3000);

        function visibilityToggle()
        {
        	document.querySelector(
                  "#loader").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
        }

		function displayNextImage() {
			x = (x === images.length - 1) ? 0 : x + 1;
			document.getElementById("image").src = images[x];
		}

		function displayPreviousImage() {
			x = (x <= 0) ? images.length - 1 : x - 1;
			document.getElementById("image").src = images[x];
		}

		function startTimer() {
			setInterval(displayNextImage, 3000);
		}

		var images = [], x = -1;
		images[0] = "resources/Frame 0.png";
		images[1] = "resources/Frame 1.png";
		images[2] = "resources/Frame 2.png";
		images[3] = "resources/Frame 3.png";