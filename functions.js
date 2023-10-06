var sections;
let currentSectionIndex = 0;

function scrollToNextSection() {
    //console.log(sections[currentSectionIndex].id);
    //sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    location.hash = "#" + sections[currentSectionIndex].id;
}

function change_teeth(arr){
    for(var i = 1; i<10; i++)
     {
        if(arr.includes(i))
            document.getElementById("tooth" + i).src = "images/broken_1.png";
        else document.getElementById("tooth" + i).src = "images/broken_2.png";
     }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    if(entry.target.id == "broken_1.png"){
        change_teeth([1]);
    }
    else if(entry.target.id == "implant_1.png"){
        change_teeth([4,5]);
    }
    else if(entry.target.id == "fix_1.png"){
        change_teeth([7,8,9]);
    }
  }
});

});

function init(){
    sections = document.getElementsByClassName('screen_page');
    // Tell the observer which elements to track
    document.querySelectorAll('.tooth').forEach(element => {
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

