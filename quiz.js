// Quiz Questions
const MeldesExperimentquizData = [
    {
      question: "What is the principle behind the Melde's Experiment?",
      options: ["Superposition of waves", "Diffraction of light", "Refraction of sound", "Electric potential difference"],
      answer: "Superposition of waves"
    },
    {
      question: "What is the vibrating device used in the Melde's Experiment?",
      options: ["Vibrating string", "Tuning fork", "Vibrating strip", "Electromagnet"],
      answer: "Vibrating string"
    },
    {
      question: "What property of the vibrating string is measured in the Melde's Experiment?",
      options: ["Frequency", "Amplitude", "Wavelength", "Velocity"],
      answer: "Frequency"
    },
    {
      question: "What is the equation for calculating the frequency of the vibrating string in the Melde's Experiment?",
      options: ["f = (1 / T)", "f = T^2", "f = 2π / T", "f = λ / v"],
      answer: "f = (1 / T)"
    },
    {
      question: "What happens to the frequency of the vibrating string in the Melde's Experiment if the tension is increased?",
      options: ["Increases", "Decreases", "Remains the same", "Cannot be determined"],
      answer: "Increases"
    },
    {
      question: "What happens to the frequency of the vibrating string in the Melde's Experiment if the length of the string is increased?",
      options: ["Decreases", "Increases", "Remains the same", "Cannot be determined"],
      answer: "Decreases"
    },
    {
      question: "What happens to the frequency of the vibrating string in the Melde's Experiment if the mass per unit length of the string is increased?",
      options: ["Decreases", "Increases", "Remains the same", "Cannot be determined"],
      answer: "Remains the same"
    },
    {
      question: "What is the pattern formed by the vibrating string in the Melde's Experiment called?",
      options: ["Stroboscopic pattern", "Interference pattern", "Standing wave pattern", "Diffraction pattern"],
      answer: "Standing wave pattern"
    },
    {
      question: "What is the relationship between the frequency and the number of segments in the vibrating string in the Melde's Experiment?",
      options: ["Inverse relationship", "Direct relationship", "No relationship", "Cannot be determined"],
      answer: "Direct relationship"
    },
    {
      question: "What is the formula for calculating the frequency of the vibrating string in terms of the number of segments in the Melde's Experiment?",
      options: ["f = (n / L) * v", "f = (L / n) * v", "f = n * L * v", "f = (1 / n) * L * v"],
      answer: "f = (n / L) * v"
    }
  ];
  
  const airWedgeQuizData = [
    {
      question: "What is the principle behind the Air Wedge experiment?",
      options: ["Interference of light waves", "Reflection of sound waves", "Diffraction of water waves", "Refraction of light waves"],
      answer: "Interference of light waves"
    },
    {
      question: "What is the shape of the air wedge used in the experiment?",
      options: ["Triangle", "Rectangle", "Circle", "Square"],
      answer: "Triangle"
    },
    {
      question: "What happens to the thickness of the air wedge as we move from one end to the other?",
      options: ["Increases", "Decreases", "Remains the same", "Varies randomly"],
      answer: "Increases"
    },
    {
      question: "What type of interference is observed in the Air Wedge experiment?",
      options: ["Constructive interference", "Destructive interference", "No interference", "Cannot be determined"],
      answer: "Destructive interference"
    },
    {
      question: "What phenomenon causes the interference pattern in the Air Wedge experiment?",
      options: ["Thin film interference", "Polarization", "Diffraction", "Scattering"],
      answer: "Thin film interference"
    },
    {
      question: "What happens to the color observed in the Air Wedge experiment when the thickness of the wedge increases?",
      options: ["Changes to a different color", "Becomes brighter", "Becomes darker", "Does not change"],
      answer: "Changes to a different color"
    },
    {
      question: "What property of light is responsible for the formation of the interference pattern in the Air Wedge experiment?",
      options: ["Wave-particle duality", "Wavefront", "Wavelength", "Intensity"],
      answer: "Wave-particle duality"
    },
    {
      question: "What is the name of the device used to observe the interference pattern in the Air Wedge experiment?",
      options: ["Interferometer", "Spectrometer", "Microscope", "Telescope"],
      answer: "Interferometer"
    },
    {
      question: "What is the relationship between the thickness of the air wedge and the number of fringes observed in the Air Wedge experiment?",
      options: ["Direct relationship", "Inverse relationship", "No relationship", "Cannot be determined"],
      answer: "Direct relationship"
    },
    {
      question: "What is the formula for calculating the wavelength of light using the Air Wedge experiment?",
      options: ["λ = (2t * d) / m", "λ = (m * d) / t", "λ = (2m * t) / d", "λ = (d * t) / m"],
      answer: "λ = (2t * d) / m"
    }
  ];

  const newtonsRingsQuizData = [
    {
      question: "What is the principle behind Newton's Rings experiment?",
      options: ["Interference of light waves", "Reflection of sound waves", "Diffraction of water waves", "Refraction of light waves"],
      answer: "Interference of light waves"
    },
    {
      question: "What is the shape of the pattern observed in Newton's Rings experiment?",
      options: ["Circular rings", "Straight lines", "Spiral", "Hexagonal pattern"],
      answer: "Circular rings"
    },
    {
      question: "What is the cause of the formation of Newton's Rings?",
      options: ["Thin film interference", "Polarization", "Diffraction", "Scattering"],
      answer: "Thin film interference"
    },
    {
      question: "What happens to the diameter of the rings as we move away from the center?",
      options: ["Increases", "Decreases", "Remains the same", "Varies randomly"],
      answer: "Increases"
    },
    {
      question: "What type of interference is observed in Newton's Rings experiment?",
      options: ["Constructive interference", "Destructive interference", "No interference", "Cannot be determined"],
      answer: "Constructive interference"
    },
    {
      question: "What happens to the color observed in Newton's Rings experiment as we move from the center to the periphery?",
      options: ["Changes to a different color", "Becomes brighter", "Becomes darker", "Does not change"],
      answer: "Changes to a different color"
    },
    {
      question: "What property of light is responsible for the formation of Newton's Rings?",
      options: ["Wave-particle duality", "Wavefront", "Wavelength", "Intensity"],
      answer: "Wave-particle duality"
    },
    {
      question: "What is the name of the device used to observe Newton's Rings?",
      options: ["Interferometer", "Spectrometer", "Microscope", "Telescope"],
      answer: "Interferometer"
    },
    {
      question: "What is the relationship between the radius of curvature and the diameter of the rings in Newton's Rings experiment?",
      options: ["Direct relationship", "Inverse relationship", "No relationship", "Cannot be determined"],
      answer: "Inverse relationship"
    },
    {
      question: "What is the formula for calculating the radius of curvature using Newton's Rings?",
      options: ["R = (m * λ * R) / (2 * n * t)", "R = (2 * n * t) / (m * λ)", "R = (m * λ) / (2 * n * t)", "R = (2 * n * t) / (m * λ)"],
      answer: "R = (m * λ * R) / (2 * n * t)"
    }
  ];

  const planeTransmissionGrating2QuizData = [
    {
      question: "What is the principle behind the Plane Transmission Grating experiment?",
      options: ["Interference of light waves", "Reflection of sound waves", "Diffraction of water waves", "Refraction of light waves"],
      answer: "Interference of light waves"
    },
    {
      question: "What is the structure of the Plane Transmission Grating?",
      options: ["Parallel transparent slits", "Concentric rings", "Spherical lens", "Curved mirror"],
      answer: "Parallel transparent slits"
    },
    {
      question: "What property of light is used in the Plane Transmission Grating experiment?",
      options: ["Wavelength", "Frequency", "Intensity", "Polarization"],
      answer: "Wavelength"
    },
    {
      question: "What is the relationship between the slit spacing and the interference pattern observed in the Plane Transmission Grating experiment?",
      options: ["Direct relationship", "Inverse relationship", "No relationship", "Cannot be determined"],
      answer: "Inverse relationship"
    },
    {
      question: "What happens to the intensity of the interference pattern as the number of slits in the Plane Transmission Grating increases?",
      options: ["Increases", "Decreases", "Remains the same", "Varies randomly"],
      answer: "Increases"
    },
    {
      question: "What type of interference is observed in the Plane Transmission Grating experiment?",
      options: ["Constructive interference", "Destructive interference", "No interference", "Cannot be determined"],
      answer: "Constructive interference"
    },
    {
      question: "What property of light is responsible for the formation of the interference pattern in the Plane Transmission Grating experiment?",
      options: ["Wave-particle duality", "Wavefront", "Wavelength", "Intensity"],
      answer: "Wave-particle duality"
    },
    {
      question: "What is the name of the device used to observe the interference pattern in the Plane Transmission Grating experiment?",
      options: ["Spectrometer", "Interferometer", "Microscope", "Telescope"],
      answer: "Spectrometer"
    },
    {
      question: "What is the formula for calculating the angle of diffraction in the Plane Transmission Grating experiment?",
      options: ["sin(θ) = (m * λ) / d", "sin(θ) = (d * λ) / m", "sin(θ) = (m * d) / λ", "sin(θ) = (λ * d) / m"],
      answer: "sin(θ) = (m * λ) / d"
    },
    {
      question: "What is the relationship between the wavelength of light and the order of the interference pattern in the Plane Transmission Grating experiment?",
      options: ["Inverse relationship", "Direct relationship", "No relationship", "Cannot be determined"],
      answer: "Inverse relationship"
    }
  ];

  const planeTransmissionGrating1QuizData = [
    {
      question: "What is the formula for calculating the number of slits per unit length in a Plane Transmission Grating?",
      options: ["N = 1 / d", "N = d * λ", "N = λ / d", "N = d / λ"],
      answer: "N = 1 / d"
    },
    {
      question: "What happens to the spacing between the interference fringes as the wavelength of light decreases?",
      options: ["Increases", "Decreases", "Remains the same", "Varies randomly"],
      answer: "Decreases"
    },
    {
      question: "What is the name of the phenomenon where the interference pattern becomes less distinct in the Plane Transmission Grating experiment?",
      options: ["Blurring", "Fading", "Diffracting", "Scattering"],
      answer: "Fading"
    },
    {
      question: "What is the relationship between the angle of diffraction and the distance between the slits in the Plane Transmission Grating experiment?",
      options: ["Inverse relationship", "Direct relationship", "No relationship", "Cannot be determined"],
      answer: "Inverse relationship"
    },
    {
      question: "What happens to the intensity of the central maximum in the interference pattern as the number of slits in the Plane Transmission Grating increases?",
      options: ["Increases", "Decreases", "Remains the same", "Varies randomly"],
      answer: "Remains the same"
    },
    {
      question: "What is the color observed in the central maximum of the interference pattern in the Plane Transmission Grating experiment?",
      options: ["White", "Red", "Green", "Blue"],
      answer: "White"
    },
    {
      question: "What happens to the width of the interference fringes as the distance between the slits in the Plane Transmission Grating increases?",
      options: ["Increases", "Decreases", "Remains the same", "Varies randomly"],
      answer: "Increases"
    },
    {
      question: "What property of light determines the spacing between the interference fringes in the Plane Transmission Grating experiment?",
      options: ["Wavelength", "Frequency", "Intensity", "Polarization"],
      answer: "Wavelength"
    },
    {
      question: "What is the condition for constructive interference in the Plane Transmission Grating experiment?",
      options: ["dsin(θ) = mλ", "dsin(θ) = λ / m", "dsin(θ) = m / λ", "dsin(θ) = λ * m"],
      answer: "dsin(θ) = mλ"
    },
    {
      question: "What is the relationship between the angle of diffraction and the order of the interference pattern in the Plane Transmission Grating experiment?",
      options: ["Direct relationship", "Inverse relationship", "No relationship", "Cannot be determined"],
      answer: "Direct relationship"
    }
  ];

  const strainGaugeQuizData = [
    {
      question: "What is a strain gauge used to measure?",
      options: ["Strain", "Temperature", "Pressure", "Voltage"],
      answer: "Strain"
    },
    {
      question: "What is the principle behind the operation of a strain gauge?",
      options: ["Change in resistance with strain", "Change in capacitance with strain", "Change in voltage with strain", "Change in inductance with strain"],
      answer: "Change in resistance with strain"
    },
    {
      question: "Which material is commonly used to make strain gauges?",
      options: ["Metal foil", "Silicon", "Copper wire", "Plastic"],
      answer: "Metal foil"
    },
    {
      question: "What is the typical shape of a strain gauge?",
      options: ["Rectangular", "Circular", "Triangular", "Hexagonal"],
      answer: "Rectangular"
    },
    {
      question: "What is the unit of measurement for strain?",
      options: ["Microstrain", "Nanometer", "Pascal", "Newton"],
      answer: "Microstrain"
    },
    {
      question: "Which phenomenon does a strain gauge exploit to measure strain?",
      options: ["Piezoresistivity", "Piezoelectricity", "Thermoelectric effect", "Magnetic induction"],
      answer: "Piezoresistivity"
    },
    {
      question: "What is the formula for calculating strain?",
      options: ["Strain = Change in length / Original length", "Strain = Force / Area", "Strain = Voltage / Current", "Strain = Mass / Volume"],
      answer: "Strain = Change in length / Original length"
    },
    {
      question: "What is the typical range of strain that can be measured using strain gauges?",
      options: ["Microstrain to millistrain", "Millistrain to kilostrain", "Kilostrain to megastain", "Megastain to gigastain"],
      answer: "Microstrain to millistrain"
    },
    {
      question: "What is the purpose of a Wheatstone bridge circuit in a strain gauge measurement setup?",
      options: ["To measure the change in resistance", "To provide an excitation voltage", "To amplify the output signal", "To calibrate the strain gauge"],
      answer: "To measure the change in resistance"
    },
    {
      question: "What are some common applications of strain gauges?",
      options: ["Structural monitoring, load testing, and material testing", "Temperature measurement, flow rate measurement, and level sensing", "Voltage measurement, current measurement, and power monitoring", "Pressure sensing, distance measurement, and motion detection"],
      answer: "Structural monitoring, load testing, and material testing"
    }
  ];

  const croQuizData = [
    {
      question: "What does CRO stand for?",
      options: ["Cathode Ray Oscilloscope", "Cathode Resistor Ohmmeter", "Current Resistance Oscillator", "Capacitor Reactance Operator"],
      answer: "Cathode Ray Oscilloscope"
    },
    {
      question: "What is the primary function of a CRO?",
      options: ["To display and analyze electrical waveforms", "To measure temperature", "To generate high voltages", "To amplify audio signals"],
      answer: "To display and analyze electrical waveforms"
    },
    {
      question: "Which component in a CRO produces the electron beam?",
      options: ["Cathode", "Anode", "Grid", "Filament"],
      answer: "Cathode"
    },
    {
      question: "What is the purpose of the deflection plates in a CRO?",
      options: ["To control the position of the electron beam", "To generate high voltage", "To amplify the input signal", "To measure the temperature"],
      answer: "To control the position of the electron beam"
    },
    {
      question: "What is the vertical axis on the CRO screen typically used to represent?",
      options: ["Voltage", "Time", "Frequency", "Resistance"],
      answer: "Voltage"
    },
    {
      question: "What is the horizontal axis on the CRO screen typically used to represent?",
      options: ["Time", "Voltage", "Frequency", "Resistance"],
      answer: "Time"
    },
    {
      question: "What is the purpose of the triggering function in a CRO?",
      options: ["To stabilize the waveform on the screen", "To control the brightness of the display", "To generate high frequency signals", "To measure the current"],
      answer: "To stabilize the waveform on the screen"
    },
    {
      question: "What is the name of the phenomenon where the displayed waveform on a CRO becomes distorted due to improper triggering?",
      options: ["Trigger jitter", "Waveform distortion", "Oscillation error", "Phase shift"],
      answer: "Trigger jitter"
    },
    {
      question: "What is the unit of measurement for the vertical scale on a CRO screen?",
      options: ["Volts per division", "Seconds per division", "Hertz", "Ohms"],
      answer: "Volts per division"
    },
    {
      question: "What are some common applications of a CRO?",
      options: ["Signal analysis, circuit troubleshooting, and waveform observation", "Temperature measurement, pressure sensing, and flow rate measurement", "Voltage measurement, current measurement, and power monitoring", "Digital logic analysis, computer programming, and data visualization"],
      answer: "Signal analysis, circuit troubleshooting, and waveform observation"
    }
  ];

  const ledQuizData = [
    {
      question: "What does LED stand for?",
      options: ["Light-Emitting Diode", "Low Energy Device", "Luminous Electronic Device", "Long-lasting Energy Diode"],
      answer: "Light-Emitting Diode"
    },
    {
      question: "What is the basic principle of operation of an LED?",
      options: ["Electroluminescence", "Photovoltaic effect", "Thermionic emission", "Piezoelectric effect"],
      answer: "Electroluminescence"
    },
    {
      question: "Which material is commonly used as the semiconductor in LEDs?",
      options: ["Gallium Arsenide (GaAs)", "Silicon (Si)", "Copper (Cu)", "Aluminum (Al)"],
      answer: "Gallium Arsenide (GaAs)"
    },
    {
      question: "What determines the color of light emitted by an LED?",
      options: ["Bandgap energy of the semiconductor material", "Operating voltage of the LED", "Forward current through the LED", "Size of the LED"],
      answer: "Bandgap energy of the semiconductor material"
    },
    {
      question: "Which color of LED typically has the highest forward voltage drop?",
      options: ["Blue", "Red", "Green", "Yellow"],
      answer: "Blue"
    },
    {
      question: "What is the typical efficiency of an LED compared to traditional incandescent light bulbs?",
      options: ["Higher efficiency", "Lower efficiency", "Same efficiency", "Efficiency depends on the color of the LED"],
      answer: "Higher efficiency"
    },
    {
      question: "What is the purpose of a current-limiting resistor in an LED circuit?",
      options: ["To control the current flowing through the LED", "To protect the LED from excessive voltage", "To regulate the color of the LED", "To increase the brightness of the LED"],
      answer: "To control the current flowing through the LED"
    },
    {
      question: "What is the typical lifetime of an LED compared to traditional incandescent light bulbs?",
      options: ["Longer lifetime", "Shorter lifetime", "Same lifetime", "Lifetime depends on the color of the LED"],
      answer: "Longer lifetime"
    },
    {
      question: "What is the primary application of LEDs in modern electronics?",
      options: ["Lighting", "Data communication", "Power generation", "Heat dissipation"],
      answer: "Lighting"
    },
    {
      question: "What are some advantages of using LEDs over traditional light sources?",
      options: ["Energy efficiency, long lifetime, and compact size", "High voltage operation, low cost, and easy installation", "Variable color output, high power handling, and high brightness", "Good heat dissipation, low maintenance, and wide operating temperature range"],
      answer: "Energy efficiency, long lifetime, and compact size"
    }
  ];
  
  
 
  const quizContainer = document.getElementById('quiz');
  const submitBtn = document.getElementById('submitBtn');
  const rollNumberForm = document.getElementById('rollNumberForm');
  const experimentSelect = document.getElementById('experiment');
  let selectedQuizData;
  
  function shuffleArray(array) {
    // Fisher-Yates algorithm for shuffling the array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectedExperiment = experimentSelect.value;
  
  function createQuiz() {
  
    // Determine the quiz data based on the selected experiment
    if (selectedExperiment === 'meldes-experiment') {
      selectedQuizData = MeldesExperimentquizData;
    } else if (selectedExperiment === 'air-wedge') {
      selectedQuizData = airWedgeQuizData;
    } else if (selectedExperiment === 'newtons-rings') {
      selectedQuizData = newtonsRingsQuizData;
    } else if (selectedExperiment === 'plane-transmission-grating2') {
      selectedQuizData = planeTransmissionGrating2QuizData;
    } else if (selectedExperiment === 'plane-transmission-grating1') {
      selectedQuizData = planeTransmissionGrating1QuizData;
    } else if (selectedExperiment === 'strain-gauge') {
      selectedQuizData = strainGaugeQuizData;
    } else if (selectedExperiment === 'cro') {
      selectedQuizData = croQuizData;
    } else if (selectedExperiment === 'led') {
      selectedQuizData = ledQuizData;
    }
  
    const shuffledQuizData = shuffleArray(selectedQuizData);
  
    shuffledQuizData.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.innerHTML = `${index + 1}. ${question.question}`;
  
      const optionsElement = document.createElement('div');
      optionsElement.classList.add('options');
      question.options.forEach((option) => {
        const labelElement = document.createElement('label');
        const inputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.name = `question${index}`;
        inputElement.value = option;
  
        labelElement.appendChild(inputElement);
        labelElement.append(option);
  
        optionsElement.appendChild(labelElement);
      });
  
      quizContainer.appendChild(questionElement);
      quizContainer.appendChild(optionsElement);
    });
  
    submitBtn.style.display = 'block';
  }
  
  function calculateScoreAndSendData() {
    const name = document.getElementById('nameofStudent').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const batch = document.getElementById('batch').value;
    const experiment = document.getElementById('experiment').value;
  
    let score = 0;
    const userAnswers = [];
    const answerElements = document.querySelectorAll('input[type="radio"]:checked');
  
    answerElements.forEach((answerElement) => {
      const questionIndex = parseInt(answerElement.name.replace('question', ''));
      const userAnswer = answerElement.value;
  
      userAnswers.push({ questionIndex, userAnswer });
  
      if (userAnswer === selectedQuizData[questionIndex].answer) {
        score++;
      }
    });
  
    // Display results
    const resultMessage = `You scored ${score} out of ${selectedQuizData.length}!`;
    const resultList = document.createElement('ul');
    userAnswers.forEach((userAnswer) => {
      const questionIndex = userAnswer.questionIndex;
      const userSelectedAnswer = userAnswer.userAnswer;
      const correctAnswer = selectedQuizData[questionIndex].answer;
      const listItem = document.createElement('li');
      listItem.innerHTML = `Question ${questionIndex + 1}: <br>
                            Your Answer: ${userSelectedAnswer} <br>
                            Correct Answer: ${correctAnswer}`;
  
      resultList.appendChild(listItem);
    });
  
    quizContainer.innerHTML = `<h3>Results:</h3>
                               <p>${resultMessage}</p>`;
    quizContainer.appendChild(resultList);
  
    
  }

  rollNumberForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createQuiz();});
  
  submitBtn.addEventListener('click', calculateScoreAndSendData);
  
  
  const reloadBtn = document.getElementById('reloadBtn');
  
  reloadBtn.addEventListener('click', function() {
    location.reload();
  });
  

  