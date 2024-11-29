document.addEventListener("DOMContentLoaded", function() {
  // Select all cards with the class 'check-card'
  document.querySelectorAll('.check-card').forEach((card) => {
    card.addEventListener('click', function() {
      const checkbox = this.querySelector('input[type="checkbox"]');
      
      // Toggle only if necessary to prevent multiple state changes
      if (!checkbox.checked) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }

      this.classList.toggle('active', checkbox.checked); // Add/remove active class
      showCamera(); // Call showCamera to control camera card visibility
    });
  });

  // Function to control the camera card visibility based on checkbox state
  function showCamera() {
    const jaCheckbox = document.getElementById("jaCheckbox");
    const cameraCard = document.querySelector(".camera-card");
    
    if (jaCheckbox && jaCheckbox.checked) {
      cameraCard.classList.remove("d-none"); // Show the camera card
    } else {
      cameraCard.classList.add("d-none"); // Hide the camera card
    }
  }

  // JavaScript to update the displayed value and position for range input
  const rangeInput = document.getElementById("rangeInput");
  const rangeValue = document.getElementById("rangeValue");

  function updateRangeValue() {
    const value = rangeInput.value;
    rangeValue.textContent = value;

    // Calculate the position of the thumb based on value
    const percent = (value - rangeInput.min) / (rangeInput.max - rangeInput.min);
    const offset = percent * (rangeInput.offsetWidth - 16); // Adjust thumb width if changed
    rangeValue.style.left = `${offset}px`;
  }

  rangeInput.addEventListener("input", updateRangeValue);
  updateRangeValue(); // Initial update on page load
});


document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll(".step-div");
  const indicators = document.querySelectorAll(".step-indicator");
  const currentStepElement = document.getElementById("currentStep");
  let currentStep = 0;

  function updateSteps() {
      steps.forEach((step, index) => {
          step.classList.add("d-none");
          if (index === currentStep) {
              step.classList.remove("d-none");
              indicators[index].classList.add("active");
          } else if (index < currentStep) {
              indicators[index].classList.add("completed");
          } else {
              indicators[index].classList.remove("active", "completed");
          }
      });
      currentStepElement.textContent = currentStep + 1; // Update the current step display
  }

  document.getElementById("nextStep").addEventListener("click", function() {
      if (currentStep < steps.length - 1) {
          currentStep++;
          updateSteps();
      }
  });

  document.getElementById("prevStep").addEventListener("click", function() {
      if (currentStep > 0) {
          currentStep--;
          updateSteps();
      }
  });


  // Initialize the first step
  updateSteps();
});


function changeImg() {
  const input = document.getElementById('img-input');
  const container = document.getElementById('image-container');

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Clear the container
      container.innerHTML = '';

      // Create a new img element
      const img = document.createElement('img');
      img.src = e.target.result; // Set the image source
      img.style.width = '100px';
      img.style.height = '100px';
      img.style.borderRadius = '15px';
      img.alt = 'Preview';

      // Append the img element to the container
      container.appendChild(img);
    };

    reader.readAsDataURL(input.files[0]); // Read the selected file
  }
}