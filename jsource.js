var sc=document.getElementById("scroll");
sc.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (sc.scrollTop > 100) {
	document.getElementById("navbar").style.padding = "32px 10px";
	document.getElementById("navbar").style.background="url('viram.png') no-repeat center/cover";
	}
	 else {
	document.getElementById("navbar").style.padding = "90px 10px";
	document.getElementById("navbar").style.background="url('poster.jpg') no-repeat center/cover";
	}

    if(document.getElementById("navbar").style.padding === "90px 10px"){
		document.getElementById("home").style.margin = "228px 0px 0px 0px";
	}
	
}