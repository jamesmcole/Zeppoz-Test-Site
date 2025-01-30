'use strict';


window.addEventListener('scroll', function () {
  const stickyNav = document.querySelector('.navigation-sticky');

  // Get the number of pixels scrolled vertically
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Show the sticky nav after scrolling down 500 pixels
  if (scrollPosition >= 200) {
    // Add slide-in effect
    stickyNav.classList.add('slide-in');
    stickyNav.style.transitionDelay = '0s';
  } else {
    // Hide sticky nav when scrolling back up
    stickyNav.classList.remove('slide-in');
  }
});

// const menuItems = document.querySelectorAll('.menu-nav-item');
// const menuSections = document.querySelectorAll('.menu-section');

// // Get the first visible section (which shouldn't be hidden)
// let currentSection = document.querySelector('.menu-section:not(.hidden)');

// function handleMenuClick(event) {
//   // Remove active class from all menu items
//   menuItems.forEach(item => item.classList.remove('active'));

//   // Add active class to the clicked item
//   const clickedItem = event.currentTarget;
//   clickedItem.classList.add('active');

//   // Get the target section name by converting the menu item text to match the data-section attribute
//   const targetSectionName = clickedItem.textContent.toLowerCase().replace(' ', '-') + '-menu';
//   const targetSection = document.querySelector(`[data-section="${targetSectionName}"]`);

//   console.log(`Target Section: ${targetSectionName}`);

//   // Hide the current visible section
//   if (currentSection) {
//     currentSection.classList.add('hidden');
//   }

//   // Show the target section by removing the 'hidden' class
//   if (targetSection) {
//     targetSection.classList.remove('hidden');
//     currentSection = targetSection; // Update currentSection to the newly visible section
//   }
// }

// menuItems.forEach(item => {
//   item.addEventListener('click', handleMenuClick);
// });



// THIS IS FOR THE FADING HOME PAGE
// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.dot');
//   let currentSlideIndex = 0;
//   let intervalId;

  // Function to update active dot
  // function updateDots() {
  //   dots.forEach((dot, index) => {
  //     dot.classList.toggle('d-active', index === currentSlideIndex);
  //   });
  // }

  // Function to change slides with a fade-in effect
  // function changeSlide(nextIndex = null) {
  //   slides[currentSlideIndex].style.opacity = 0;

  //   if (nextIndex !== null) {
  //     currentSlideIndex = nextIndex;
  //   } else {
  //     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  //   }

  //   slides[currentSlideIndex].style.opacity = 1;
  //   updateDots();
  // }

  // Set up automatic slide change every 5 seconds
  // function startSlideshow() {
  //   intervalId = setInterval(() => {
  //     changeSlide();
  //   }, 6000000);
  // }

  // Pause the slideshow when the user clicks a dot
  // function stopSlideshow() {
  //   clearInterval(intervalId);
  // }

  // Click event listener for dots
//   dots.forEach(dot => {
//     dot.addEventListener('click', (event) => {
//       stopSlideshow();
//       const targetIndex = parseInt(event.target.dataset.slide);
//       changeSlide(targetIndex);
//       startSlideshow();
//     });
//   });

 
//   slides[currentSlideIndex].style.opacity = 1;
//   startSlideshow();
// });


// SIDE BAR


//  document.addEventListener('DOMContentLoaded', function() {
//   const sidebar = document.querySelector('.side-bar');
//   const rightArrow = document.querySelector('.right-arrow');
//   const menuContainer = document.querySelector('.menu'); // Get the menu container

//   // Initially, the hamburger menu is hidden (sidebar is open)
//   setTimeout(() => {
//     sidebar.classList.add('open');
//     menuContainer.classList.remove('visible'); // Ensure the hamburger menu is hidden
//   }, 100);

//   // Close the sidebar and show the hamburger menu with fade-in
//   rightArrow.addEventListener('click', function() {
//     sidebar.classList.remove('open'); // Close the sidebar
//     setTimeout(() => {
//       menuContainer.classList.add('visible'); // Fade in the hamburger menu
//     }, 200); // Wait for the sidebar to close (matching its transition time)
//   });

//   // When the hamburger menu is clicked, open the sidebar again
//   menuContainer.querySelector('.hamburger-menu').addEventListener('click', function() {
//     sidebar.classList.add('open'); // Open the sidebar
//     menuContainer.classList.remove('visible'); // Fade out the hamburger menu
//   });

//   // Detect clicks outside the sidebar to close it
//   document.addEventListener('click', function(event) {
//     const isClickInsideSidebar = sidebar.contains(event.target);
//     const isClickInsideMenu = menuContainer.contains(event.target);
    
//     if (!isClickInsideSidebar && !isClickInsideMenu && sidebar.classList.contains('open')) {
//       // If the click is outside the sidebar and menu, close the sidebar
//       sidebar.classList.remove('open');
//       setTimeout(() => {
//         menuContainer.classList.add('visible'); // Show the hamburger menu
//       }, 200); // Match the transition time
//     }
//   });
// });


///other slideshows

document.addEventListener('DOMContentLoaded', function () {
  // Selecting relevant elements
  const images = document.querySelectorAll('.gallery-img');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  // Only proceed if there are images and arrows, meaning the slideshow is present
  if (images.length > 0 && leftArrow && rightArrow) {
    let currentImageIndex = 0;
    let slideInterval;

    // Function to show the current image
    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    }

    // Function to go to the next image
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    }

    // Function to go to the previous image
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    }

    // Set the interval to automatically switch images every 5 seconds
    function startSlideshow() {
      slideInterval = setInterval(nextImage, 5000);
    }

    // Stop the automatic slideshow
    function stopSlideshow() {
      clearInterval(slideInterval);
    }

    // Event listeners for the left and right arrows
    rightArrow.addEventListener('click', function () {
      stopSlideshow(); // Stop auto-switching when manually switching
      nextImage();
      startSlideshow(); // Resume auto-switching after manual switch
    });

    leftArrow.addEventListener('click', function () {
      stopSlideshow();
      prevImage();
      startSlideshow();
    });

    // Show the first image on page load and start the slideshow
    showImage(currentImageIndex);
    startSlideshow();
  }
});



///MOBILE MENU 
// MOBILE MENU
// Select elements
const menuButton = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu-close');
const overlay = document.querySelector('.overlay');

// Open the menu
menuButton.addEventListener('click', () => {
  overlay.classList.add('active');
  closeButton.classList.add('active');
});

// Close the menu
closeButton.addEventListener('click', () => {
  overlay.classList.remove('active');
  closeButton.classList.remove('active');
});



///LIGHTBOX
// Clear the lightbox image on page load
function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    
    // Set the source of the lightbox image to the clicked image's source
    lightboxImg.src = image.src;
    
    // Display the lightbox
    lightbox.style.display = "flex";

    // Prevent body scrolling while the lightbox is open
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    
    // Hide the lightbox
    lightbox.style.display = "none";

    // Allow body scrolling again
    document.body.style.overflow = "";

    // Clear the image source when closing to prevent it from lingering
    document.getElementById("lightbox-img").src = "";
}


/// FADE IN

document.addEventListener('DOMContentLoaded', function() {
  // Fade-in elements on scroll
  const fadeElements = document.querySelectorAll('.fade-in-up');
  if (fadeElements.length > 0) {
    function handleScroll() {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on load to show elements already in view
  }

  // Hero section fade-in
  const heroSection = document.querySelector('.section-hero');
  if (heroSection) {
    heroSection.classList.add('fade-in');
  }
});




/// remind me form

// Get all "REMIND ME" buttons and the modal
document.addEventListener('DOMContentLoaded', function () {
  // Selecting elements related to the modal
  const remindButtons = document.querySelectorAll('.remind-me-btn');
  const modal = document.getElementById('remind-modal');
  const closeModalButton = document.querySelector('.close-modal');

  // Check if the modal elements exist
  if (remindButtons.length > 0 && modal && closeModalButton) {
    // Open the modal when any "REMIND ME" button is clicked
    remindButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    // Close the modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  } else {
    console.warn('Modal or related buttons not found.');
  }
});






  // Show the popup when "View Specials" button is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Show the popup when "View Specials" button is clicked
  const btnSpecials = document.querySelector('.btnMobile-specials');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupButton = document.getElementById('close-popup');

  if (btnSpecials && popupOverlay && closePopupButton) {
    btnSpecials.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link action
      popupOverlay.classList.remove('hidden');
    });

    // Hide the popup when "Close" button is clicked
    closePopupButton.addEventListener('click', function () {
      popupOverlay.classList.add('hidden');
    });

    // Close the popup when clicking outside the popup content
    popupOverlay.addEventListener('click', function (event) {
      if (event.target === popupOverlay) {
        popupOverlay.classList.add('hidden');
      }
    });
  } else {
    console.error('Required elements for popup functionality are missing.');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // Select all buttons with the class "btn-special"
  const btnSpecials = document.querySelectorAll('.specialclick');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupButton = document.getElementById('close-popup');

  // Loop through all buttons and add the click event listener
  btnSpecials.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link action
      console.log('View Specials button clicked.'); // Debugging step
      popupOverlay.classList.remove('hidden');
    });
  });

  // Close the popup when the "Close" button is clicked
  if (closePopupButton) {
    closePopupButton.addEventListener('click', function () {
      console.log('Close button clicked.'); // Debugging step
      popupOverlay.classList.add('hidden');
    });
  }

  // Close the popup when clicking outside the popup content
  if (popupOverlay) {
    popupOverlay.addEventListener('click', function (event) {
      if (event.target === popupOverlay) {
        console.log('Clicked outside popup content.'); // Debugging step
        popupOverlay.classList.add('hidden');
      }
    });
  }
});

///CONTENTFUL



// Initialize the Contentful client
const client = contentful.createClient({
  space: 'bwh9dhsv32ze', // Replace with your Space ID
  accessToken: 'HNaaCkZIUcgcZ6mZJBQm9Tpj5jKgyfcwj-7bs8-HTeo' // Replace with your Access Token
});

// Fetch Contentful entries
client.getEntries({ content_type: 'zeppozHomePage' }) // Replace with your content type ID
  .then(response => {
    const homepage = response.items[0].fields;

    // Define a mapping of Contentful fields to HTML classes
    const fieldMapping = {
      // weekdayHours2: '.weekdayhours',              // Maps 'weekdayHours2' field to '.weekdayhours'
      // weekendhours: '.weekendhours',  
      attractionTitle: '.attracttitle',            // Maps 'weekendhours' field to '.weekendhours'
      attractionSectionBowlingTitle: '.btitle',   // Maps 'attractionSectionBowlingTitle' to '.btitle'
      bowlingDescription: '.bdescription',         // Maps 'bowlingDescription' to '.bdescription'
      attractionSectionArcadeTitle: '.atitle',
      arcadeDescription: '.adescription',
      attractionSectionClubTitle: '.ctitle',
      clubDescription: '.cdescription',
    
    
    };

    // Loop through the mapping and update HTML elements
    Object.keys(fieldMapping).forEach(field => {
      const selector = fieldMapping[field]; // Get the selector for the field
      document.querySelectorAll(selector).forEach(element => {
        element.textContent = homepage[field]; // Update the element content
      });
    });
  })
  .catch(err => console.error('Error fetching data from Contentful:', err));



  
