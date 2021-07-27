windows.addEventListener("DOMContentLoaded", function(){
    var form= document.getElementById("my-form");
    //var button= document.getElementById("my-form-butt");
    var status= document.getElementById("status");
    
    function success {
        form.reset();
        status.classList.add('success')
        status.innerHTML = "Thanks !!";
    }

    function error {
        form.reset();
        status.classList.add('error')
        status.innerHTML = "Oops! There was a problem submitting your form";
    }
  
    form.addEventListener("submit", function (ev){
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
        
    });
    
});


function ajax(method, url, data, success, error){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = funtion() 
        if (xhr.readyState !== XMLHttpRequest.DONE)return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        }else{
        error(xhr.status, xhr.response, xhr.responseType);
        }
    ;
    xhr.send(data);
    
}



  function one() {
    window.alert("Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics.");
    
  }
  function two() {
    window.alert("Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its observed size.");
    
  }
  function three() {
    window.alert("Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.");
    
  }