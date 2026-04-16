tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: '#C9A961',
            brandLight: '#E8D5B7',
            brandDark: '#9D7E4F',
            brandGold: '#D4AF37',
            activateBlack: '#0A0A0A',
            richBlack: '#121212'
          },
          animation: {
            'fade-in': 'fadeIn 0.8s ease-in-out',
            'slide-up': 'slideUp 0.6s ease-out',
            'glow-pulse': 'glowPulse 2s ease-in-out infinite',
            'float': 'float 3s ease-in-out infinite',
            'shimmer': 'shimmer 3s ease-in-out infinite',
            'fire-flicker': 'fireFlicker 1.5s ease-in-out infinite',
            'spark': 'spark 2s ease-out infinite',
            'liquid-flow': 'liquidFlow 4s ease-in-out infinite',
            'scale-pulse': 'scalePulse 2s ease-in-out infinite',
            'rotate-slow': 'rotateSlow 20s linear infinite',
            'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
            'slide-in-left': 'slideInLeft 0.8s ease-out',
            'slide-in-right': 'slideInRight 0.8s ease-out',
            'zoom-in': 'zoomIn 0.6s ease-out',
            'glow-expand': 'glowExpand 2s ease-in-out infinite'
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' }
            },
            slideUp: {
              '0%': { transform: 'translateY(30px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' }
            },
            glowPulse: {
              '0%, 100%': { boxShadow: '0 0 20px rgba(201, 169, 97, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)' },
              '50%': { boxShadow: '0 0 40px rgba(201, 169, 97, 0.8), 0 0 80px rgba(212, 175, 55, 0.5)' }
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-15px)' }
            },
            shimmer: {
              '0%': { backgroundPosition: '-200% center' },
              '100%': { backgroundPosition: '200% center' }
            },
            fireFlicker: {
              '0%, 100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
              '25%': { opacity: '0.9', transform: 'scale(1.05) translateY(-2px)' },
              '50%': { opacity: '0.95', transform: 'scale(0.98) translateY(-1px)' },
              '75%': { opacity: '0.92', transform: 'scale(1.03) translateY(-3px)' }
            },
            spark: {
              '0%': { opacity: '0', transform: 'translateY(0) scale(0)' },
              '50%': { opacity: '1', transform: 'translateY(-30px) scale(1)' },
              '100%': { opacity: '0', transform: 'translateY(-60px) scale(0.5)' }
            },
            liquidFlow: {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0) scaleX(1)' },
              '50%': { transform: 'translateX(-50%) translateY(-5px) scaleX(1.1)' }
            },
            scalePulse: {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' }
            },
            rotateSlow: {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            },
            bounceSlow: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' }
            },
            slideInLeft: {
              '0%': { transform: 'translateX(-100px)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' }
            },
            slideInRight: {
              '0%': { transform: 'translateX(100px)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' }
            },
            zoomIn: {
              '0%': { transform: 'scale(0.8)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' }
            },
            glowExpand: {
              '0%, 100%': { boxShadow: '0 0 20px rgba(201, 169, 97, 0.4), 0 0 40px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(201, 169, 97, 0.1)' },
              '50%': { boxShadow: '0 0 60px rgba(201, 169, 97, 0.8), 0 0 120px rgba(212, 175, 55, 0.5), inset 0 0 40px rgba(201, 169, 97, 0.3)' }
            }
          }
        }
      }
    };

// ===== SLIDE DATA =====
    // Array of all slide information for thumbnail generation
    const slideData = [
      { title: "Title Slide", preview: "Activate AI™ Responsible AI Roadmap" },
      { title: "Why Responsible AI Matters", preview: "Vision and core values" },
      { title: "Our Responsible AI Mission", preview: "Commitments and principles" },
      { title: "Governance Blueprint Overview", preview: "AI Center of Excellence framework" },
      { title: "Governance Structure", preview: "Roles and responsibilities" },
      { title: "Governance Processes", preview: "Decision-making workflow" },
      { title: "Risk & Bias Audit Framework", preview: "Full lifecycle approach" },
      { title: "Risk Controls in Action", preview: "What we audit" },
      { title: "Documentation & Accountability", preview: "Required documentation" },
      { title: "Change Management Strategy", preview: "Internal adoption plan" },
      { title: "Empowering Teams", preview: "Building confidence" },
      { title: "Measuring Adoption & Improvement", preview: "Success metrics" },
      { title: "Communication & Trust Plan", preview: "Outward-facing strategy" },
      { title: "Community Engagement Channels", preview: "Where we show up" },
      { title: "Incident Response Protocol", preview: "When things go wrong" },
      { title: "Summary", preview: "What Activate AI™ delivers" },
      { title: "Closing Slide", preview: "Building the future together" }
    ];

    // ===== STATE MANAGEMENT =====
    let currentSlideIndex = 0;
    const totalSlides = slideData.length;
    const progressBar = document.getElementById('progressBar');
    const closeBtn = document.getElementById('closeBtn');
    const navControls = document.getElementById('navControls');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideGrid = document.getElementById('slideGrid');
    const slideFulls = document.querySelectorAll('.slide-full');

    // ===== GENERATE THUMBNAIL GRID =====
    // Creates clickable thumbnail cards for all slides
    function generateThumbnailGrid() {
      slideData.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'slide-thumbnail';
        thumbnail.innerHTML = `
          <div class="slide-thumbnail-number">${index + 1}</div>
          <h3 class="slide-thumbnail-title">${slide.title}</h3>
          <p class="slide-thumbnail-preview">${slide.preview}</p>
        `;
        thumbnail.addEventListener('click', () => openSlide(index));
        slideGrid.appendChild(thumbnail);
      });
    }

    // ===== OPEN FULL SLIDE VIEW =====
    // Function: openSlide(index)
    // Purpose: Display a specific slide in full-screen mode
    function openSlide(index) {
      currentSlideIndex = index;
      
      // Hide grid and show controls
      slideGrid.style.display = 'none';
      document.querySelector('.presentation-header').style.display = 'none';
      closeBtn.classList.add('active');
      navControls.classList.add('active');
      
      // Hide all slides
      slideFulls.forEach(slide => slide.classList.remove('active'));
      
      // Show selected slide
      slideFulls[index].classList.add('active');
      
      // Update progress bar
      updateProgress();
      
      // Update button states
      updateButtons();
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ===== CLOSE FULL SLIDE VIEW =====
    // Function: closeSlide()
    // Purpose: Return to thumbnail grid overview
    function closeSlide() {
      // Show grid and hide controls
      slideGrid.style.display = 'grid';
      document.querySelector('.presentation-header').style.display = 'block';
      closeBtn.classList.remove('active');
      navControls.classList.remove('active');
      
      // Hide all slides
      slideFulls.forEach(slide => slide.classList.remove('active'));
      
      // Reset progress bar
      progressBar.style.width = '0%';
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ===== UPDATE PROGRESS BAR =====
    // Updates the progress indicator based on current slide
    function updateProgress() {
      const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
      progressBar.style.width = progress + '%';
    }

    // ===== UPDATE NAVIGATION BUTTONS =====
    // Enable/disable prev/next buttons based on position
    function updateButtons() {
      prevBtn.disabled = currentSlideIndex === 0;
      nextBtn.disabled = currentSlideIndex === totalSlides - 1;
    }

    // ===== NEXT SLIDE =====
    // Navigate to the next slide
    function nextSlide() {
      if (currentSlideIndex < totalSlides - 1) {
        openSlide(currentSlideIndex + 1);
      }
    }

    // ===== PREVIOUS SLIDE =====
    // Navigate to the previous slide
    function prevSlide() {
      if (currentSlideIndex > 0) {
        openSlide(currentSlideIndex - 1);
      }
    }

    // ===== EVENT LISTENERS =====
    closeBtn.addEventListener('click', closeSlide);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // ===== KEYBOARD NAVIGATION =====
    // Arrow keys, space bar, escape for navigation
    document.addEventListener('keydown', (e) => {
      // Only handle keys when in full slide view
      if (!navControls.classList.contains('active')) return;
      
      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          e.preventDefault();
          closeSlide();
          break;
        case 'Home':
          e.preventDefault();
          openSlide(0);
          break;
        case 'End':
          e.preventDefault();
          openSlide(totalSlides - 1);
          break;
      }
    });

    // ===== TOUCH SWIPE SUPPORT =====
    // Mobile swipe gestures for navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      if (!navControls.classList.contains('active')) return;
      
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide();
      }
    }

    // ===== INITIALIZE =====
    // Set up thumbnail grid on page load
    generateThumbnailGrid();