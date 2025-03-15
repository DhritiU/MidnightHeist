// Initialize FAQ popup system when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const helpButton = document.getElementById('helpButton');
    const faqPopup = document.getElementById('faqPopup');
    const closeBtn = document.querySelector('.close-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Open popup when help button is clicked
    if (helpButton) {
      helpButton.addEventListener('click', function() {
        faqPopup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind popup
      });
    }
    
    // Close popup when close button is clicked
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        faqPopup.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    }
    
    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === faqPopup) {
        faqPopup.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    });
    
    // Toggle FAQ answers when questions are clicked
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        // Get the parent faq-item
        const faqItem = this.parentElement;
        
        // Toggle active class on this item
        faqItem.classList.toggle('active');
        
        // Get the answer element
        const answer = this.nextElementSibling;
        
        // Toggle display of answer
        if (faqItem.classList.contains('active')) {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && faqPopup.style.display === 'block') {
        faqPopup.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    });
  });