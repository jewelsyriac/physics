const generateUniqueRandomNumbers = (rangeStart, rangeEnd) => {
  const randomNumbers = [];
  while (randomNumbers.length < 2) {
    const randomNumber = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};
  

document.addEventListener("DOMContentLoaded", function() {
    // Function to generate and display the questions
    function generateQuestions() {
      

        var container1 = document.getElementById("questionsContainer1");
      
        // Clear the container before adding new questions
        container1.innerHTML = '<div style="text-align: center;">' +
  '<h4 style="text-align: center;">Course Code: PHT100</h4>' +
  '<h5 style="text-align: center;">Course Name: ENGINEERING PHYSICS A</h5>' +
  '<p></p>' +
  '<h4 style="text-align: center;">Part A</h4>' +
  '<h5 style="text-align: center;">Answer all questions, each carries 3 marks</h5>' +
  '</div>';

        var questionListpartA = document.createElement("ol")
      
        // Loop through the JSON data and create HTML elements for each question
        const randomNumberModule1PartA = generateUniqueRandomNumbers(0,30)
        for (var i = 0; i < 2; i++) {
            
            var question = QuestionsPartAmodule1[randomNumberModule1PartA[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                ${question.question}
               `;
      
            questionListpartA.appendChild(questionElement);
        }
        const randomNumberModule2PartA = generateUniqueRandomNumbers(0,30);
        for (var i = 0; i < 2; i++) {
            
            var question = QuestionsPartAmodule2[randomNumberModule2PartA[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                ${question.question}
               `;
      
            questionListpartA.appendChild(questionElement);
        }
       const randomNumberModule3PartA = generateUniqueRandomNumbers(0,27);
        for (var i = 0; i < 2; i++) {
            
            var question = QuestionsPartAmodule3[randomNumberModule3PartA[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                ${question.question}
               `;
      
            questionListpartA.appendChild(questionElement);
        }
        const randomNumberModule4PartA = generateUniqueRandomNumbers(0,24);
        for (var i = 0; i < 2; i++) {
            
            var question = QuestionsPartAmodule4[randomNumberModule4PartA[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                ${question.question}
               `;
      
            questionListpartA.appendChild(questionElement);
        }
        const randomNumberModule5PartA = generateUniqueRandomNumbers(0,33);
        for (var i = 0; i < 2; i++) {
            
            var question = QuestionsPartAmodule5[randomNumberModule5PartA[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                ${question.question}
               `;
      
            questionListpartA.appendChild(questionElement);
        }
        container1.appendChild(questionListpartA);
    
        var container2 = document.getElementById("questionsContainer2");
      
        // Clear the container before adding new questions
        container2.innerHTML = '<div style="text-align: center;">' +
  '<h4 style="text-align: center;">Part B</h4>' +
  '<h6 style="text-align: center;">Answer one full question from each module, each question carries 14 marks</h6>' +
  '<h5 style="text-align: center;">Module 1</h5>' +
  '</div>';

        var questionListpartB = document.createElement("ol");
      
       const randomNumberModule1PartB = generateUniqueRandomNumbers(0,5);
       const randomNumberModule1PartC = generateUniqueRandomNumbers(0,17);
        for (var i = 0; i < 2; i++) {
            
            var question1 = QuestionsPartBmodule1[randomNumberModule1PartB[i]];
            var question2 = QuestionsPartCmodule1[randomNumberModule1PartC[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                <div> a) ${question1.question} ( 10 marks )</div>
                <p></p>
                <div> b) ${question2.question} ( 4 marks )</div><p></p>
               `;
      
            questionListpartB.appendChild(questionElement);}
        
        container2.appendChild(questionListpartB)
        var container3 = document.getElementById("questionsContainer3");
      
        container3.innerHTML = '<div style="text-align: center;">' +
  '<h5 style="text-align: center;">Module 2</h5>' +
  '</div>';

        var questionListpartB = document.createElement("ol");
      
        const randomNumberModule2PartB = generateUniqueRandomNumbers(0,6);
       const randomNumberModule2PartC = generateUniqueRandomNumbers(0,15);
        for (var i = 0; i < 2; i++) {
            
            var question1 = QuestionsPartBmodule2[randomNumberModule2PartB[i]];
            var question2 = QuestionsPartCmodule2[randomNumberModule2PartC[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                <div> a) ${question1.question} ( 10 marks )</div>
                <p></p>
                <div> b) ${question2.question} ( 4 marks )</div><p></p>
               `;
      
            questionListpartB.appendChild(questionElement);}
        
        container3.appendChild(questionListpartB)
        var container4 = document.getElementById("questionsContainer4");
      
        
        container4.innerHTML = '<div style="text-align: center;">' +
  '<h5 style="text-align: center;">Module 3</h5>' +
  '</div>';

        var questionListpartB = document.createElement("ol");
        const randomNumberModule3PartB = generateUniqueRandomNumbers(0,4);
        const randomNumberModule3PartC = generateUniqueRandomNumbers(0,10);
        
        for (var i = 0; i < 2; i++) {
            
            var question1 = QuestionsPartBmodule3[randomNumberModule3PartB[i]];
            var question2 = QuestionsPartCmodule3[randomNumberModule3PartC[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                <div> a) ${question1.question} ( 10 marks )</div>
                <p></p>
                <div> b) ${question2.question} ( 4 marks )</div><p></p>
               `;
      
            questionListpartB.appendChild(questionElement);}
        
        container4.appendChild(questionListpartB)

        var container5 = document.getElementById("questionsContainer5");
      
        
        container5.innerHTML = '<div style="text-align: center;">' +
  '<h5 style="text-align: center;">Module 4</h5>' +
  '</div>';

        var questionListpartB = document.createElement("ol");
        const randomNumberModule4PartB = generateUniqueRandomNumbers(0,6);
        const randomNumberModule4PartC = generateUniqueRandomNumbers(0,11);
        
        for (var i = 0; i < 2; i++) {
            
            var question1 = QuestionsPartBmodule4[randomNumberModule4PartB[i]];
            var question2 = QuestionsPartCmodule4[randomNumberModule4PartC[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                <div> a) ${question1.question} ( 10 marks )</div>
                <p></p>
                <div> b) ${question2.question} ( 4 marks )</div><p></p>
               `;
      
            questionListpartB.appendChild(questionElement);}
        
        container5.appendChild(questionListpartB)

        var container6 = document.getElementById("questionsContainer6");
      
        
        container6.innerHTML = '<div style="text-align: center;">' +
  '<h5 style="text-align: center;">Module 5</h5>' +
  '</div>';

        var questionListpartB = document.createElement("ol");
      
        const randomNumberModule5PartB = generateUniqueRandomNumbers(0,9);
       const randomNumberModule5PartC = generateUniqueRandomNumbers(0,8);
        for (var i = 0; i < 2; i++) {
            
            var question1 = QuestionsPartBmodule5[randomNumberModule5PartB[i]];
            var question2 = QuestionsPartCmodule5[randomNumberModule5PartC[i]];
      
            var questionElement = document.createElement("li");
            questionElement.innerHTML = `
                <div> a) ${question1.question} ( 10 marks )</div>
                <p></p>
                <div> b) ${question2.question} ( 4 marks )</div><p></p>
               `;
      
            questionListpartB.appendChild(questionElement);}
        
        container6.appendChild(questionListpartB)

        }
    
    // Attach an event listener to the "Generate" button
    var generateBtn = document.getElementById("generateBtn");
    const disclaimer = document.getElementById("disclaimer");
    const pdfButton = document.querySelector(".pdfButton");
    generateBtn.addEventListener("click", generateQuestions);
    generateBtn.addEventListener("click", ()=>{
      generateBtn.innerText= "Generate another question paper";
      disclaimer.style.display = "none";
      pdfButton.style.display = "block";
    });
    

    

    

// Generate the PDF
function generatePDF() {
  var element = document.getElementById("questionPaperContainer");
  var options = {
    margin: [15, 10, 15, 15], // Specify the margin values in pixels: [top, right, bottom, left]
  };
  // Generate the PDF
  html2pdf()
    .from(element)
    .set(options)
    .save('question_paper.pdf');
}
function generatePDF2() {
  var element = document.getElementById("questionPaperContainer");
  var options = {
    margin: [15, 10, 15, 15], // Specify the margin values in pixels: [top, right, bottom, left]
  };
  // Generate the PDF
  html2pdf()
    .from(element)
    .set(options)
    .save('question_paper.pdf');
}

const pdfGenerateBtn = document.getElementById("pdfGenerate");

// Attach an event listener to the "Download in PDF format" button
pdfGenerateBtn.addEventListener("click", generatePDF);



    /* loadButton.addEventListener('click', function generatePDF() {
        // Generate the questions dynamically
        var partAquestions = [];
        for (var i = 0; i < 6; i++) {
            var question = QuestionsPartA[i];
            var questionText = `${question.id}) ${question.question} ( marks: ${question.mark} )\n\n`;
            partAquestions.push(questionText);
        }

        // Define your document content with the generated questions
        var docDefinition = {
            content: [
                { text: 'PHT100 Engineering Physics A ( Model Question paper )', style: 'header' },
                partAquestions
            ],
            styles: {
                header: {
                  fontSize: 18,
                  margin: [0, 20, 0, 10]
                }
              }
                , equation: {
                    fontSize: 14,
                    margin: [0, 5, 0, 10],
                    fillColor: '#f2f2f2'
                  }
}}); */

        /* // Generate the PDF
        pdfMake.createPdf(docDefinition).download('example.pdf'); */
  
})


var QuestionsPartAmodule1 = [
    {
      "id": "1",
      "module": "1",
      "question": "Define quality factor and relaxation time of a damped harmonic oscillator. What are the factors that quality factor depends on?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "2",
      "module": "1",
      "question": "What are harmonic waves? Obtain the relation between velocity, wavelength and frequency in wave motion.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "3",
      "module": "1",
      "question": "What is meant by sharpness of resonance?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "4",
      "module": "1",
      "question": "State the 3 laws of transverse vibrations.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "5",
      "module": "1",
      "question": "Mention three cases of damping. Draw their displacement time curves.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "6",
      "module": "1",
      "question": "Write three dimensional wave equation and solution",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "7",
      "module": "1",
      "question": "List two differences between longitudinal and transverse waves. Give examples.",
      "mark": 3,
      "answer": ""
    },
    
    {
      "id": "8",
      "module": "1",
      "question": "What you mean by mechanical waves? Give two examples.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "9",
      "module": "1",
      "question": "Compare electrical and mechanical oscillators.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "10",
      "module": "1",
      "question": "Define the term simple harmonic motion. How it is mathematically represented?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "11",
      "module": "1",
      "question": "Derive the differential equation of a damped harmonic oscillator.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "12",
      "module": "1",
      "question": "Derive the differential equation of a forced harmonic oscillator.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "13",
      "module": "1",
      "question": "Find the equation of a progressive wave of amplitude 2cm, frequency 1 Hz and velocity 20 cm/s moving along positive x-axis..",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "14",
      "module": "1",
      "question": "What will happen to fundamental frequency when length of string is reduced to half of original length kept under same tension?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "15",
      "module": "1",
      "question": "Derive one dimensional wave equation.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "16",
      "module": "1",
      "question": "Derive differential equation of an SHM and solve it.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "17",
      "module": "1",
      "question": "Comment the statement “smaller the damping, larger will be the relaxation time and greater the quality factor”.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "18",
      "module": "1",
      "question": "Define Q factor of a damped harmonic oscillator. Mention the factors on which it depends..",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "19",
      "module": "1",
      "question": "Define the terms displacement, amplitude, time period and frequency of an oscillation.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "19",
      "module": "1",
      "question": "What you mean critical damping? Give any practical example.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "20",
      "module": "1",
      "question": "What is resonance? Write down expression of amplitude of an oscillator at resonance.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "21",
      "module": "1",
      "question": "What you mean by half power points? Explain the term bandwidth of an oscillator.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "22",
      "module": "1",
      "question": "Draw the displacement time curve of forced harmonic oscillator and explain it.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "23",
      "module": "1",
      "question": "Resistance is the electrical counterpart of damping in electrical oscillator. Justify the statement.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "24",
      "module": "1",
      "question": "Derive the differential equation of an electrical oscillator.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "25",
      "module": "1",
      "question": "Define the term ' wavelength ' and ' frequency ' of a wave.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "26",
      "module": "1",
      "question": "Classify waves based on their direction of propagation with respect to oscillation of medium.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "27",
      "module": "1",
      "question": "Write down one dimensional wave equation and its solution.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "28",
      "module": "1",
      "question": "'When tension in a string increases, velocity of waves through that string also increases.' Justify the statement.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "29",
      "module": "1",
      "question": "Define the term ' linear mass density'. Explain how it affects the fundamental frequency of a stretched string.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "30",
      "module": "1",
      "question": "'A wave can be represented by sinusoidal function'. If so write down mathematical representation of a wave moving in negative z direction and explain the terms.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "31",
      "module": "1",
      "question": "Prove that quality factor of an oscillator is the measure of efficiency of oscillator.",
      "mark": 3,
      "answer": ""
    },
    
  ] ;
  var QuestionsPartAmodule2 = [
    {
      "id": "1",
      "module": "2",
      "question": "What are the differences between interference and diffraction?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "2",
      "module": "2",
      "question": "Explain why straight line fringes are observed in air wedge.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "3",
      "module": "2",
      "question": "Explain the formation of different colours in thin films with example.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "4",
      "module": "2",
      "question": "What is diffraction? Compare diffraction pattern with interference pattern.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "5",
      "module": "2",
      "question": "Distinguish between Fresnel and Fraunhofer classes of diffraction.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "6",
      "module": "2",
      "question": "Explain the principle and working of antireflection coatings.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "7",
      "module": "2",
      "question": "How will you test the planeness of a surface using air wedge?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "8",
      "module": "2",
      "question": "Diffraction of light is not as evident in daily experience as that of sound waves. Give reason.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "9",
      "module": "2",
      "question": "What is Rayleigh's criterion of spectral resolution?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "10",
      "module": "2",
      "question": "Why center of newton's rings system appear dark in reflection?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "11",
      "module": "2",
      "question": "Define dispersive power of grating. Write it's expression.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "12",
      "module": "2",
      "question": "Define resolving power of grating. Write it's expression.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "13",
      "module": "2",
      "question": "Define resolving power of grating. Write it's expression.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "14",
      "module": "2",
      "question": "Explain superposition principle.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "15",
      "module": "2",
      "question": "State and explain cosine law for thin film reflection",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "16",
      "module": "2",
      "question": "Express the condition for maximum and minimum in interference between two waves in terms of path difference and phase difference.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "17",
      "module": "2",
      "question": "Explain the term coherence and it's role in interference.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "18",
      "module": "2",
      "question": "Write down the condition for brightness in thin film interference.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "19",
      "module": "2",
      "question": "What you mean by bandwidth of an interference pattern created by an air wedge?.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "20",
      "module": "2",
      "question": "Write the equation for bandwidth of an air wedge produced interference pattern explain the terms with help of a figure.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "21",
      "module": "2",
      "question": "What you mean by interference by reflection? Give an example.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "22",
      "module": "2",
      "question": "Write down expression for radius of nth ring in a newton's rings system.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "23",
      "module": "2",
      "question": "Explain how we can use newton's rings to measure refractive index of a liquid.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "24",
      "module": "2",
      "question": "Explain the term grating element.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "25",
      "module": "2",
      "question": "Write down the grating equation and explain the terms.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "26",
      "module": "2",
      "question": "'Multiple spectra are obtained when we incident white light on a grating'. Justify the statement.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "27",
      "module": "2",
      "question": "Why central maximum of diffraction pattern using white light on a grating always will be white & bright?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "28",
      "module": "2",
      "question": "Resolution of spectrum increase with order of spectrum. If true, prove it.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "29",
      "module": "2",
      "question": "Why interference pattern in newton's rings apparattus is circular?",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "30",
      "module": "2",
      "question": "Write a short note on interference filters.",
      "mark": 3,
      "answer": ""
    },
    {
      "id": "31",
      "module": "2",
      "question": "Prove that amplitude will be maximum on when phase difference between superposing waves is 2π.",
      "mark": 3,
      "answer": ""
    },
];

var QuestionsPartAmodule3 = [
  {
    "id": "1",
    "module": "3",
    "question": "What is meant by wave function? Write its normalized condition.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "3",
    "question": "What are excitons in nano materials?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "3",
    "question": "Write the physical significance of wave function.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "3",
    "question": "Why do nanomaterials exhibit properties different from those of their classical counterparts?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "3",
    "question": "What is quantum mechanical tunnelling? Name two electronic devices based on this phenomenon.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "3",
    "question": "Why do nanomaterials exhibit properties different from those of their classical counterparts?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "3",
    "question": "Mention any three applications of nanotechnology.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "3",
    "question": "State and explain heisnerberg's uncertainty principle.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "3",
    "question": "What is the significance of surface to volume ratio in nanomaterials.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "10",
    "module": "3",
    "question": "State and explain Heisenberg’s Uncertainty principle. With the help of it explain natural line broadening.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "11",
    "module": "3",
    "question": "What is de Broglie hypothesis of matter waves? Write the equation of de Broglie wave length.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "12",
    "module": "3",
    "question": "Define zero,one and two dimensional nanomaterials.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "13",
    "module": "3",
    "question": "Write the expression for energy of a particle trapped in one dimensional box and find the energy of first excited state.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "14",
    "module": "3",
    "question": "What is meant by quantum dot and quantum wire?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "15",
    "module": "3",
    "question": "Gold is chemically reactive in their nanoscale form though it is inert in its bulk form. Give the reason.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "16",
    "module": "3",
    "question": "Calculate debroglie wavelength of electron with kinetic energy of 10 eV.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "17",
    "module": "3",
    "question": "Why electrons are absent inside nucleus?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "18",
    "module": "3",
    "question": "All mathematical functions cannot be a wavefunction. Why?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "19",
    "module": "3",
    "question": "Write a short on quantum mechanical operators.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "20",
    "module": "3",
    "question": "What is Hamiltonian operator? How it is used in schrodingers equation.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "21",
    "module": "3",
    "question": "Write down time independent schrodingers equation.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "22",
    "module": "3",
    "question": "Draw probability distribution of first three energy level.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "23",
    "module": "3",
    "question": "What is exciton bohr radius?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "24",
    "module": "3",
    "question": "Describe the change in electrical properties of nanomaterials.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "25",
    "module": "3",
    "question": "Write a short note on carbon nanotubes.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "26",
    "module": "3",
    "question": "Write down Einstein's formula for photon energy and explain the terms.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "27",
    "module": "3",
    "question": "Paramagnetic materials get converted to ferromagnetic on nanosynthesis. Justify the statement.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "28",
    "module": "3",
    "question": "Explain quantum mechanical tunnelling. Give any example.",
    "mark": 3,
    "answer": ""
  },

];
var QuestionsPartAmodule4 = [
  {
    "id": "1",
    "module": "4",
    "question": "State and explain Ampere’s circuital law.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "4",
    "question": "State and explain gauss's law in magnetism.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "4",
    "question": "State and explain faraday's law of electromagnetic induction.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "4",
    "question": "Define the terms magnetic field, flux and flux density.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "4",
    "question": "State and explain Poynting’s theorem.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "4",
    "question": "Define Divergence of a vector function. Give its physical significance.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "4",
    "question": "Define gradient of a function. Give its physical significance.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "4",
    "question": "Define curl of a vector function. Give its physical significance.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "4",
    "question": "What you mean intensity of magnetisation? How it is connected to magnetic moment?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "10",
    "module": "4",
    "question": "Define the term magnetic susceptibility.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "11",
    "module": "4",
    "question": "Define the term magnetic permeability.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "12",
    "module": "4",
    "question": "Define the term relative permeability. Write it's relation with susceptibility.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "13",
    "module": "4",
    "question": "Write a short note on paramagnetic materials.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "14",
    "module": "4",
    "question": "Write a short note on diamagnetic materials.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "15",
    "module": "4",
    "question": "Write a short note on ferromagnetic materials.",
    "mark": 3,
    "answer": ""
  },

  {
    "id": "16",
    "module": "4",
    "question": "Write down Curies law for paramagnetic materials and draw variation of susceptibility with temperature.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "17",
    "module": "4",
    "question": "What is Curie Weiss law? What is Curie temperature?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "18",
    "module": "4",
    "question": "Explain the physical significance of line, surface and volume integrals.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "19",
    "module": "4",
    "question": "State Gauss's divergence theorem.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "20",
    "module": "4",
    "question": "State Stoke's theorem connecting line and surface integrals.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "21",
    "module": "4",
    "question": "Derive equation continuity from concept of charge conservation.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "4",
    "question": "Write down maxwell's equations in free space.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "23",
    "module": "4",
    "question": "Write down the differences between conduction current & displacement current.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "24",
    "module": "4",
    "question": "Write down electromagnetic wave equations. What will be the velocity of an EM wave through free space?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "25",
    "module": "4",
    "question": "Write down expression for energy densities of electric & magnetic fields in an EM wave.",
    "mark": 3,
    "answer": ""
  },
];
var QuestionsPartAmodule5 = [
  {
    "id": "1",
    "module": "5",
    "question": "Write a note on high temperature superconductors with two examples.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "5",
    "question": "Explain the working of a solar cell & plot the IV characteristics.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "5",
    "question": "Explain the working of an LED and plot IV characteristics.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "5",
    "question": "What are fibre optic sensors? Name two different types.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "5",
    "question": "Draw the block diagram of fibre optic communication system.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "5",
    "question": "Write a short note on intensity modulated sensor.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "5",
    "question": "What are fibre optic sensors? Write a short note on phase modulated sensor.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "5",
    "question": "Distinguish between step index and graded index fibre.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "5",
    "question": "Discuss the advantages of optical fibre over conventional transmission lines.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "10",
    "module": "5",
    "question": "Explain superconductivity. What is transition temperature?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "11",
    "module": "5",
    "question": "What is Meissner's effect? Why it is called perfect diamagnetism?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "12",
    "module": "5",
    "question": "What is critical field and critical current for a superconductor? Explain silcebee effect.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "13",
    "module": "5",
    "question": "What is isotope effect in superconductivity?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "14",
    "module": "5",
    "question": "Why type II superconductors are called hard superconductors?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "14",
    "module": "5",
    "question": "What are type I superconductors? Give examples.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "15",
    "module": "5",
    "question": "Explain the terms phonons and cooper pairs.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "16",
    "module": "5",
    "question": "What you mean by superconducting energy gap?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "17",
    "module": "5",
    "question": "What are consequences of BCS theory?",
    "mark": 3,
    "answer": ""
  },

  {
    "id": "18",
    "module": "5",
    "question": "Write down the applications of superconductivity.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "19",
    "module": "5",
    "question": "Explain SQUID.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "20",
    "module": "5",
    "question": "What is Josephson effect?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "21",
    "module": "5",
    "question": "Explain the working principle behind a photo diode.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "22",
    "module": "5",
    "question": "What is the advantage of using PIN photodiodes?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "23",
    "module": "5",
    "question": "What is Fill factor?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "24",
    "module": "5",
    "question": "Write down some uses of solar cell.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "25",
    "module": "5",
    "question": "What is total internal reflection?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "26",
    "module": "5",
    "question": "Explain the propagation of light through a step index fibre.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "27",
    "module": "5",
    "question": "Explain the propagation of light through a graded index fibre.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "28",
    "module": "5",
    "question": "Explain the terms acceptance angle & acceptance cone.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "29",
    "module": "5",
    "question": "Draw the profile indices of step & graded index fibres.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "30",
    "module": "5",
    "question": "What is relative refractive index change? How it is related to numerical aperture?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "31",
    "module": "5",
    "question": "Numerical aperture is light gathering power of a fibre. Justify the statement.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "32",
    "module": "5",
    "question": "What is V number or normalized frequency?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "33",
    "module": "5",
    "question": "What you mean by 'modes of propagation' in fibre optics?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "34",
    "module": "5",
    "question": "Write down any applications of fibre optic sensors.",
    "mark": 3,
    "answer": ""
  },
];
var QuestionsPartBmodule1 = [
  {
    "id": "1",
    "module": "1",
    "question": "Write down the differential equation of a forced harmonic oscillator and obtain its solution. Derive the expressions for amplitude and phase difference.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "1",
    "question": "Derive an expression for the velocity of propagation and fundamental frequency of a transverse wave in a stretched string. Deduce laws of transverse vibrations.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "1",
    "question": "Obtain the differential equation of a damped harmonic oscillator and deduce the solution for over damped condition. Show the graphical variations of displacement with respect to time.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "1",
    "question": "What is a one dimensional wave? Derive one dimensional wave equations and solve it.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "1",
    "question": "What is amplitude resonance? Give any two examples. Derive an expression for resonant frequency. What is sharpness of resonance?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "1",
    "question": "Derive differential equation of simple harmonic oscillator and solve it. Explain the terms time period, frequency and amplitude of the SHM.",
    "mark": 3,
    "answer": ""
  },
];
var QuestionsPartCmodule1 = [
  {
    "id": "1",
    "module": "1",
    "question": "The frequency of a tuning fork is 300Hz. If its Q- factor is 5000 , find the time after which its energy becomes (1/10)th of its initial value.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "2",
    "module": "1",
    "question": "The frequency of a tuning fork is 250Hz. If its Q- factor is 100 , find the time after which its energy becomes half of its initial value.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "3",
    "module": "1",
    "question": "The frequency of a tuning fork is 250Hz. If its Q- factor is 100 , find the time after which its amplitude becomes half of its initial value.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "4",
    "module": "1",
    "question": "A uniform steel wire has length 10m and mass 2 kg. Find the Tension in the string if the speed of transverse wave on the wire is 340m/s.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "5",
    "module": "1",
    "question": "The displacement of a particle due to a sound wave is given by y(x,t) = 10 cos 2π( 6x-2t+3 ) where x is measured in meters and t in seconds. Find the amplitude, wavelength, frequency, velocity and initial phase of the wave.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "6",
    "module": "1",
    "question": "The displacement of a wave is represented by y = 0.0025 Sin(0.025x - 500t), where x is measured in metres and t in secs. Deduce amplitude, time period, velocity and wavelength?",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "7",
    "module": "1",
    "question": "A simple harmonic wave is represented by y = 8 sin 2π(t/0.5 - 0.05x). Find the displacement of particle 100 cm from origin and 6 seconds after the start of motion.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "8",
    "module": "1",
    "question": "In the case of a forced harmonic oscillator, the amplitude of vibrations increases from 0.05 mm at very low frequencies to a value 7.5mm at the frequency 210Hz. Find Q- factor, damping constant and relaxation time.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "9",
    "module": "1",
    "question": "A wave of wavelength 30cm is travelling through a 300m long wire whose mass is 15kg. If the wire is under tension of 1kN, compute the speed and frequency of the wave.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "10",
    "module": "1",
    "question": "The frequency of a tuning fork is 500 Hz and its Q factor is 7000. Find the relaxation time.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "11",
    "module": "1",
    "question": "A damped oscillator has mass 5g and force constant 50 N/m and damping constant 10 s-1. Find angular frequency with and without damping.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "12",
    "module": "1",
    "question": "A string of mass 0.65 kg is stretched between two supports 30 m apart. If the tension in the string is 100 N, Find velocity of wave in string. How long pulse will a pulse take to travel from one support to another.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "13",
    "module": "1",
    "question": "The amplitude of an underdamped oscillator reduces to one quarter of initial value after 100 oscillations. It's time period is 2 seconds. Calculate the damping constant and relaxation time.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "14",
    "module": "1",
    "question": "The string of violin 36 cm long and has a mass of 0.2g. With what tension it must be stretched to tune 1000 Hz?",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "15",
    "module": "1",
    "question": "The differential equation of SHM is given by y'' + 100y=0. Find the period and frequency of SHM.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "16",
    "module": "1",
    "question": "For a damped oscillator, the mass of block is 100g. Force constant = 5 Nm-1 and damping constant is 50 gs-1. Examine whether motion is oscillatory or not. If oscillatory find the period.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "17",
    "module": "1",
    "question": "Calculate the speed of transverse wave in a string of cross sectional area 0.5 mm^2 under a tension of 10 N.( Density of wire = 10000 kg/m^3)",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "18",
    "module": "1",
    "question": "A piece of wire 1 m long is stretched by a load of 2.5 kg and has a mass of 1.5g. Find fundamental frequency, second and third harmonics.",
    "mark": 4,
    "answer": ""
  },
];
var QuestionsPartBmodule2 = [
  {
    "id": "1",
    "module": "2",
    "question": "Draw a neat diagram representing the reflection of light from top and bottom surface of a thin transparent film of refractive index μ and uniform thickness t. Also derive the conditions for the constructive and destructive interferences of the reflected components.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "2",
    "question": "Describe the experimental set up of Newton’s ring arrangement. Derive an expression for wavelength of light used.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "2",
    "question": "Derive an expression for finding refractive index of a liquid using newton's rings apparattus.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "2",
    "question": "Give any 3 differences between Fresnel and Fraunhofer classes of diffraction. Discuss diffraction due to grating and derive the grating equation for normal incidence. Explain the terms resolving power and dispersive power.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "2",
    "question": "Explain the formation of interference fringes in air wedge obtain an expression for bandwidth. How can air wedge be used for measuring diameter of a thin wire?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "2",
    "question": "What is a plane transmission grating? Explain it's construction. How can it be used to find the wavelength of light?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "2",
    "question": "Explain the formation of spectra by a plane transmission grating. What is rayleigh criterion.",
    "mark": 3,
    "answer": ""
  }
];
var QuestionsPartCmodule2 = [
  {
    "id": "1",
    "module": "2",
    "question": "What is an antireflection coating? Find the minimum thickness of antireflection coating (magnesium fluoride of refractive index 1.42) to be deposited on a glass plate of refractive index1.5, for light of wave length 5800Å.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "2",
    "module": "2",
    "question": "Consider a plane transmission grating having 6000 lines/cm. Find the angular separation between first and second order maxima when a light of wavelength 5500Å incident normally on it.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "3",
    "module": "2",
    "question": "Newton’s rings are formed by the light reflected normally from a plano-convex lens and a plane glass plate with a liquid in between them. The diameter of the nth dark ring is 2.24 mm and that of (n+15)th dark ring is 4.81mm. Calculate the refractive index of the liquid? (Given λ =5893 Åand radius of curvature of the lens = 90 cm )",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "4",
    "module": "2",
    "question": "An air wedge is formed using two optically plane glass strips of length 15cm. A spacer of thickness 0.015 mm is introduced at one end. If the light used is of wavelength 5893Å, find the separation between consecutive bright fringes.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "5",
    "module": "2",
    "question": "A plane transmission grating has 6000 lines/cm. It is used to obtain a spectrum of light from sodium lamp in second order. Calculate the angular separation between two sodium lines of wavelength5890 Åand 5896 Å.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "6",
    "module": "2",
    "question": "Newtons rings are observed by source emitting light of wavelength λ1 = 300 nm and λ2 = 200 nm. It is found that nth dark ring due to λ1 coincides with (n+3)th dark ring due to λ2. If the radius of curvature is 100cm, calculate nth dark ring due to λ1 and nth dark ring due to λ2.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "7",
    "module": "2",
    "question": "A plane transmission grating of length 5 cm has 5000 lines/cm. Find the resolving power of grating and smallest wavelength difference that can be resolved for light of wavelength 400 nm in second order.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "8",
    "module": "2",
    "question": "Light of wavelength 5893Å is reflected at nearly normal incidence from a soap film of refractive index 1.42. What is the least thickness of the film that will appear (i) dark and (ii) bright?",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "9",
    "module": "2",
    "question": "What is the highest order spectrum which may be obtained with a light of wavelength 650 nm by means of a plane transmission grating having 5000 lines per cm?",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "10",
    "module": "2",
    "question": "Two pieces of plane glass are placed together with a piece of paper between two at one end. Find the angle of the wedge in seconds if the film is viewed with a monochromatic light of wavelength 4800Å. Given β = 0.0555 cm.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "11",
    "module": "2",
    "question": "A grating has 6000 lines per cm. Find the angular separation of the two yellow lines of mercury of wavelengths 577 nm and 579 nm in the second order.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "12",
    "module": "2",
    "question": "The diameter of the 5th bright ring in Newton’s ring experiment is 4x10-3 m. Find the radius of curvature of the lens used, if the wavelength of light is 589nm.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "13",
    "module": "2",
    "question": "What is the highest order spectrum which may be seen with light of wavelength 500 nm by means of grating with 3000lines/cm?",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "14",
    "module": "2",
    "question": "Light of wavelength 6000A° falls normally on two glass plates enclosing a wedge shaped film. The plates touch at one end and are separated at 10cm from that end by a wire. If the bandwidth of the interference pattern is 0.05 mm, find diameter of the wire.",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "15",
    "module": "2",
    "question": "Newton's rings are observed in reflected light of wavelength 450 nm. The diameter of 10th dark ring is 0.005m. Find the radius of curvature of lens and thickness of air film. ",
    "mark": 4,
    "answer": ""
  },
  {
    "id": "16",
    "module": "2",
    "question": "A diffraction grating under normal illumination gives coinciding maxima of consecutive order for wavelengths 600 nm and 500 nm at 45 degrees.Find number of lines per cm of grating.",
    "mark": 4,
    "answer": ""
  },
];
var QuestionsPartBmodule3 = [
  {
    "id": "1",
    "module": "3",
    "question": "Starting from plane wave equation, formulate Schrodinger’s time dependent and independent equation by using de-Broglie formula and Einstein relation for photon energy.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "3",
    "question": "What is quantum confinement? Classify nanomaterials based on dimensionality of quantum confinement and explain the following nanostructures. (i) Nano sheets (ii) Nano wires (iii) Quantum dots.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "3",
    "question": "Write the differential equation for a particle in a one dimensional box and obtain the possible energy values and normalized wave functions.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "3",
    "question": "Explain the mechanical, optical, physical, chemical and magnetic properties of nanomaterials.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "3",
    "question": "State and explain Heisenberg’s uncertainty principle. Explain absence of electrons inside nucleus and natural line broadening mechanism on the basis of this principle.",
    "mark": 3,
    "answer": ""
  }
];
var QuestionsPartCmodule3 = [
  {
    "id": "1",
    "module": "3",
    "question": "Compare the de Broglie wavelength of an electron and a proton moving in a potential of 50kV.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "3",
    "question": "Find the lowest energy of an electron moving in a one dimensional infinitely high potential well of width 1Å.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "3",
    "question": "A proton is confined to one dimensional potential box of length 2Å. Calculate the energies corresponding to the first and second quantum states in eV.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "3",
    "question": "Find the de Broglie wavelength of electron whose kinetic energy is 15 eV.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "3",
    "question": "A microscope using photons is employed to locate an electron in an atom within a distance of 0.02 nm. What is the minimum uncertainty in momentum and velocity of the electron located in this way.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "3",
    "question": "Compare the uncertainty in velocities of an electron and proton moving in a one dimensional box of width 10nm.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "3",
    "question": "Calculate the quantum number associated with a marble of mass 10 gm trapped to move with speed 1m/s in a one dimensional box of width 20 cm.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "3",
    "question": "An electron and a Proton are moving with same kinetic energy. Which one has shorter wavelength? Why?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "3",
    "question": "Calculate debroglie wavelength of an electron moving with a velocity of 3000km/s.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "10",
    "module": "3",
    "question": "Calculate uncertainty in frequency emitted by an atomic exited state with a life time of 10 ns.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "11",
    "module": "3",
    "question": "Wavefunction of a subatomic particle is given as y = A e^i(2x-3t). Find the energy and momentum in x direction.",
    "mark": 3,
    "answer": ""
  }
];
var QuestionsPartBmodule4 = [
  {
    "id": "1",
    "module": "4",
    "question": "Distinguish between paramagnetic, diamagnetic and ferromagnetic substances with two examples for each.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "4",
    "question": "Starting from basic laws of electricity and magnetism, derive Maxwell’s equations.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "4",
    "question": "Explain the terms (i)Magnetization (ii)Magnetic permeability (iii)Relative permeability and (iv) Susceptibility. Derive the relation between magnetic susceptibility and relative permeability.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "4",
    "question": "Starting from the field equations in free space, derive the velocity of electromagnetic waves in free space. How did Maxwell show that light is electromagnetic in nature?",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "4",
    "question": "State gauss's law in magnetism, Ampere's circuital law, Faraday's law of electromagnetic induction and Lenz's law. Give their expressions.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "4",
    "question": "Define the terms gradient, divergence and curl. Also physical significance of each in detail. ",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "4",
    "question": "What is displacement current? Explain difference between conduction current and displacement current with help of an example. ",
    "mark": 3,
    "answer": ""
  },
];
var QuestionsPartCmodule4 = [
  {
    "id": "1",
    "module": "4",
    "question": "A magnetising field of 1800 A/m produces a magnetic flux of 0.0003 Wb in an iron bar of cross sectional area 0.2 cm^2. Calculate the permeability of iron bar.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "4",
    "question": "Calculate the magnetic susceptibility of a paramagnetic substance at 600K if susceptibility at 200K is 0.003",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "4",
    "question": "If the magnitude of H in a plane wave is 1 A/m, find the magnitude of E in free space. ",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "4",
    "question": "Calculate the value of Poynting vector at the surface of the sun if the power radiated by the sun is 3.8 x 10^(26) W and its radius is 7 X 10^8 m.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "4",
    "question": "The magnetic flux through a closed circuit with resistance 2.5Ω varies with time obeying the equation φ =5t^2 + 2t + 6 . What will be the induced emf and current in it at time = 5 seconds.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "4",
    "question": "If ɸ(x, y, z) = 4x^2 + 6x + 2, find the gradient of ɸ at the point (1,-1,-1).",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "4",
    "question": "Calculate the magnitude of poynting vector at a distance 0.5m from a 100W bulb.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "4",
    "question": "An electromagnetic wave is described by E = 100 exp 8πi [1000t – (10z/2)] V/m. Find the direction of propagation of the wave,speed of the wave and magnetic flux density in the wave.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "4",
    "question": "Show that velocity of electromagnetic wave is 3 lakhs km/s.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "10",
    "module": "4",
    "question": "Calculate the value of susceptibilty if the permeability of a material is 2 times permeability of vaccum.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "11",
    "module": "4",
    "question": "Calculate value of magnetic energy density at a point of an EM with magnetic flux density is equal to 0.1 T.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "12",
    "module": "4",
    "question": "Calculate value of electrical energy density at a point of an EM wave with field intensity 0.2 N/m.",
    "mark": 3,
    "answer": ""
  }
];
var QuestionsPartBmodule5 = [
  {
    "id": "1",
    "module": "5",
    "question": "Explain Meissner effect in superconductivity. Distinguish between Type I and Type II superconductors with appropriate diagrams and examples.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "5",
    "question": "Explain the propagation of light through an optical fibre. Distinguish between step index and graded index fibres.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "5",
    "question": "What is critical temperature and critical field? Write the relation between these two. Explain the conductivity of super conductors using BCS theory.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "5",
    "question": "Describe fibre optic communication system with a block diagram. List four advantages of fibre optic communication.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "5",
    "question": "Define numerical aperture of an optic fibre and derive an expression for the NA of a step index fibre with a neat diagram.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "5",
    "question": "Describe the working fibre optic sensors in detail. Explain phase and intensity modulated sensors.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "5",
    "question": "Discuss BCS theory of superconductivity and explain any 4 applications of superconductivity.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "5",
    "question": "Explain the construction and working of a solar cell and draw it's I-V characteristics. Mention any two applications of solar cell.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "5",
    "question": "Explain the construction and working of a LED and draw it's I-V characteristics.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "10",
    "module": "5",
    "question": "Explain the construction and working of a normal photodiode and PIN photodiode with help of figures.",
    "mark": 3,
    "answer": ""
  },
];
var QuestionsPartCmodule5 = [
  {
    "id": "1",
    "module": "5",
    "question": "Calculate the numerical aperture and acceptance angle of a fibre with a core refractive index of 1.54 and a cladding refractive index of 1.50 when the fibre is inside water of refractive index 1.33.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "2",
    "module": "5",
    "question": "The numerical aperture of an optical fibre is 0.3 and refractive index of core is 1.54. Calculate refractive index of cladding and relative refractive index change.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "3",
    "module": "5",
    "question": "The numerical aperture of an optic fibre is 0.38. If the difference in the refractive indices of the material of its core and the cladding is 0.05, calculate the refractive index of material of the core.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "4",
    "module": "5",
    "question": "Calculate the numerical aperture, acceptance angle and the critical angleof an optical fibre. The refractive index of the core is 1.5 and that of cladding is 1.45.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "5",
    "module": "5",
    "question": "The sum of refractive indices of core and cladding is 2.9 and difference is 0.03. Determine numerical aperture and acceptance angle of optical fibre.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "6",
    "module": "5",
    "question": "An optic fibre has an acceptance angle of 45 degrees. If the refractive index of core is 1.57, calculate numerical aperture and refractive index of cladding.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "7",
    "module": "5",
    "question": "Numerical aperture of an optic fibre cable is 0.5565 and refractive index of cladding is 1.464. Calculate the refractive index of core and acceptance angle",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "8",
    "module": "5",
    "question": "Calculate the critical field of a superconductor at 100K if the critical field at transition temperature 10K is 0.8T.",
    "mark": 3,
    "answer": ""
  },
  {
    "id": "9",
    "module": "5",
    "question": "Calculate the critical field of a superconductor at 200K if the critical field at 50K is 2T.",
    "mark": 3,
    "answer": ""
  }
]