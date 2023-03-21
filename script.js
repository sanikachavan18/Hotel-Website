const slider = document.querySelector('.beverages-content');
const sliders = document.querySelector('.soup-content');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');

let scrollAmount = 0;
const scrollMax = slider.scrollWidth - slider.clientWidth;
const scrollMax1=sliders.scrollWidth-sliders.clientWidth;

arrowLeft.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= 200;
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
});

arrowRight.addEventListener('click', () => {
  if (scrollAmount < scrollMax) {
    scrollAmount += 200;
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
});


const dotsContainer = document.querySelector('.sliders-dots');

let dots = [];

for (let i = 0; i < sliders.children.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('sliders-dot');
  dot.addEventListener('click', () => {
    sliders.scrollLeft = sliders.children[i].offsetLeft - 30;
  });
  dots.push(dot);
  dotsContainer.appendChild(dot);
}

const activeDot = (i) => {
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[i].classList.add('active');
};

sliders.addEventListener('scroll', () => {
  const sliderWidth = sliders.offsetWidth
});



const reviewContent = document.querySelector('.review-content');
const reviewBoxes = document.querySelectorAll('.review-box');

reviewContent.addEventListener('scroll', () => {
  const scrollPosition = reviewContent.scrollLeft;
  const thirdBoxPosition = reviewBoxes[2].offsetLeft - reviewContent.offsetLeft;

  if (scrollPosition >= thirdBoxPosition) {
    reviewBoxes[3].classList.add('hide');
  } else {
    reviewBoxes[3].classList.remove('hide');
  }
});




// Select the form element
const orderForm = document.querySelector('.ordernow form');

// Select the input fields
const nameInput = orderForm.querySelector('input[type="text"]');
const numberInput = orderForm.querySelector('input[type="number"]');
const foodInput = orderForm.querySelector('input[type="text"][placeholder="Enter Your Food Name"]');
const extraInput = orderForm.querySelector('input[type="test"]');
const quantityInput = orderForm.querySelector('input[type="number"][placeholder="Quantity"]');
const dateTimeInput = orderForm.querySelector('input[type="datetime-local"]');
const addressInput = orderForm.querySelector('textarea[placeholder="Your Address"]');
const messageInput = orderForm.querySelector('textarea[placeholder="Your Message"]');

// Select the submit button
const submitButton = orderForm.querySelector('input[type="submit"]');

// Add event listener for form submission
orderForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Validate the input fields
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (numberInput.value.trim() === '') {
    alert('Please enter your phone number.');
    numberInput.focus();
    return;
  }

  if (foodInput.value.trim() === '') {
    alert('Please enter the food name.');
    foodInput.focus();
    return;
  }

  if (quantityInput.value.trim() === '') {
    alert('Please enter the quantity.');
    quantityInput.focus();
    return;
  }

  if (dateTimeInput.value.trim() === '') {
    alert('Please enter the date and time.');
    dateTimeInput.focus();
    return;
  }

  if (addressInput.value.trim() === '') {
    alert('Please enter your address.');
    addressInput.focus();
    return;
  }

  // If all input fields are valid, submit the form
  orderForm.submit();
});

// Disable submit button by default
submitButton.disabled = true;

// Add event listeners for input fields
nameInput.addEventListener('input', toggleSubmitButton);
numberInput.addEventListener('input', toggleSubmitButton);
foodInput.addEventListener('input', toggleSubmitButton);
quantityInput.addEventListener('input', toggleSubmitButton);
dateTimeInput.addEventListener('input', toggleSubmitButton);
addressInput.addEventListener('input', toggleSubmitButton);

// Function to toggle the submit button based on input fields
function toggleSubmitButton() {
  if (
    nameInput.value.trim() !== '' &&
    numberInput.value.trim() !== '' &&
    foodInput.value.trim() !== '' &&
    quantityInput.value.trim() !== '' &&
    dateTimeInput.value.trim() !== '' &&
    addressInput.value.trim() !== ''
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
