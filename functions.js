var sections;
let currentSectionIndex = 0;

function scrollToNextSection() {
    //console.log(sections[currentSectionIndex].id);
    //sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    location.hash = "#" + sections[currentSectionIndex].id;
}


function open_screen(){
    document.getElementById("s1.5").style.display = "block";
    const element = document.getElementById("s1.5");
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    
}


var a1 = ["broken_", "fixed_", "new_"]
function change_teeth(num){
    
    for(var i = 1; i<4; i++)
     document.getElementById("tooth" + i).src = "images/" + a1[i-1] + "1.png";
    document.getElementById("tooth" + num).src = "images/" + a1[num-1] + "2.png";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    if(entry.target.id == "logo_img"){
        change_teeth(1);
    }
    else if(entry.target.id == "fiksna_img"){
        change_teeth(2);
    }
    else if(entry.target.id == "info_img"){
        change_teeth(3);
    }
  }
});

});

function init(){
    sections = document.getElementsByClassName('screen_page');
    // Tell the observer which elements to track
    document.querySelectorAll('img').forEach(element => {
         observer.observe(element);
    });
   
}


function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


function jumpto(sender){
    if(sender.id == "usluge_click")
    {   
        const element = document.getElementById("s2");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    else if(sender.id == "info_click")
    {   
        const element = document.getElementById("s2");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    else if(sender.id == "kontakt_click")
    {   
        const element = document.getElementById("s3");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
}
