
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected experiment value
    var experiment = document.getElementById("experiment").value;
    var meldesExperiment = document.getElementById("meldes-experiment");
    var airWedge = document.getElementById("air-wedge");
    var newtonsRings = document.getElementById("newtons-rings");
    var planeGrating2 = document.getElementById("plane-transmission-grating2");
    var planeGrating1 = document.getElementById("plane-transmission-grating1");
    var strainGauge = document.getElementById("strain-gauge");
    var cro = document.getElementById("cro");
    var led = document.getElementById("led");

    if (experiment === "meldes-experiment"){
        meldesExperiment.style.display = "block";
    }else if(experiment==="air-wedge"){
        airWedge.style.display = "block";
    }
    else if(experiment==="newtons-rings"){
        newtonsRings.style.display = "block";
    }
    else if(experiment==="plane-transmission-grating2"){
        planeGrating2.style.display = "block";
    }
    else if(experiment==="plane-transmission-grating1"){
        planeGrating1.style.display = "block";
    }
    else if(experiment==="strain-gauge"){
        strainGauge.style.display = "block";
    }
    else if(experiment==="cro"){
        cro.style.display = "block";
    }
    else if(experiment==="led"){
        led.style.display = "block";
    }
  }

  // Add event listener to the form submission
  var form = document.getElementById("quiz-form");
  form.addEventListener("submit", handleFormSubmit);

  const reloadBtn = document.getElementById('reloadBtn');
  
  reloadBtn.addEventListener('click', function() {
    location.reload();
  });
