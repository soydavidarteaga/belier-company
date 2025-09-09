// Global JavaScript for the theme
class BelierTheme {
  constructor() {
    this.init();
  }

  init() {
    this.initMobileMenu();
    this.initSearch();
    this.initCart();
    this.initProductForms();
  }

  // Mobile menu functionality
  initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('header__nav--active');
        menuToggle.classList.toggle('header__menu-toggle--active');
      });
    }
  }

  // Search functionality
  initSearch() {
    const searchToggle = document.querySelector('.header__search-toggle');
    
    if (searchToggle) {
      searchToggle.addEventListener('click', () => {
        // Implement search modal or redirect to search page
        window.location.href = '/search';
      });
    }
  }

  // Cart functionality
  initCart() {
    // Cart count updates
    document.addEventListener('cart:updated', (event) => {
      const cartCount = document.querySelector('.header__cart-count');
      if (cartCount) {
        cartCount.textContent = event.detail.cart.item_count;
      }
    });
  }

  // Product form functionality
  initProductForms() {
    const productForms = document.querySelectorAll('[data-type="add-to-cart-form"]');
    
    productForms.forEach(form => {
      form.addEventListener('submit', this.handleProductFormSubmit.bind(this));
    });
  }

  async handleProductFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Adding...';
    
    try {
      const formData = new FormData(form);
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const item = await response.json();
        
        // Update cart count
        this.updateCartCount();
        
        // Show success message
        this.showNotification('Product added to cart!', 'success');
        
        // Redirect to cart or stay on page
        if (form.dataset.redirect === 'cart') {
          window.location.href = '/cart';
        }
      } else {
        throw new Error('Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      this.showNotification('Error adding product to cart', 'error');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const cartCount = document.querySelector('.header__cart-count');
      if (cartCount) {
        cartCount.textContent = cart.item_count;
      }
      
      // Dispatch custom event
      document.dispatchEvent(new CustomEvent('cart:updated', {
        detail: { cart }
      }));
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 2rem;
      background-color: ${type === 'error' ? '#ff4444' : '#4CAF50'};
      color: white;
      border-radius: 4px;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BelierTheme();
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
