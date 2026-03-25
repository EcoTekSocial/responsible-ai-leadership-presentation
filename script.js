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

(function(){
  var params=new URLSearchParams(window.location.search);
  var fields={};
  var paramMap={
    'first_name':'firstName','last_name':'lastName','full_name':'fullName',
    'email':'email','phone':'phone','company':'company',
    'city':'city','state':'state','country':'country'
  };
  var skipTags={'SCRIPT':1,'STYLE':1,'NOSCRIPT':1,'TEXTAREA':1,'CODE':1,'PRE':1};
  var hasUrlFields=false;
  for(var p in paramMap){
    var v=params.get(p);
    if(v){fields[paramMap[p]]=v;hasUrlFields=true;}
  }
  var contactId=params.get('contact_id');
  function esc(s){
    if(!s)return s;
    var d=document.createElement('div');
    d.appendChild(document.createTextNode(s));
    return d.innerHTML;
  }
  function doReplace(data){
    var r={};
    r['{{full_name}}']=esc(((data.firstName||'')+' '+(data.lastName||'')).trim()||((data.fullName||data.name)||''));
    r['{{first_name}}']=esc(data.firstName||(data.name?data.name.split(' ')[0]:'')||'');
    r['{{last_name}}']=esc(data.lastName||(data.name&&data.name.indexOf(' ')>-1?data.name.substring(data.name.indexOf(' ')+1):'')||'');
    r['{{email}}']=esc(data.email||'');
    r['{{phone}}']=esc(data.phone||'');
    r['{{company}}']=esc(data.company||'');
    r['{{city}}']=esc(data.city||'');
    r['{{state}}']=esc(data.state||'');
    r['{{country}}']=esc(data.country||'');
    r['{{date}}']=new Date().toLocaleDateString();
    r['{{time}}']=new Date().toLocaleTimeString();
    r['{{location}}']=[data.city,data.state,data.country].filter(Boolean).join(', ');
    r['{{tracking_id}}']=esc(data.trackingId||'');
    r['{{lastClickedProduct}}']=esc(data.lastClickedProduct||'');
    r['{{lastProductClickDate}}']=esc(data.lastProductClickDate||'');
    r['{{lastClickedProductPrice}}']=esc(data.lastClickedProductPrice||'');
    r['{{lastClickedProductURL}}']=esc(data.lastClickedProductURL||'');
    r['{{productsClickedCount}}']=esc(data.productsClickedCount||'0');
    r['{{ip_address}}']=esc(data.ipAddress||'');
    r['{{ip}}']=esc(data.ipAddress||'');
    if(data.customFields){
      for(var k in data.customFields){
        r['{{'+k+'}}']=esc(String(data.customFields[k]||''));
      }
    }
    params.forEach(function(v,k){
      if(!paramMap[k]&&k!=='contact_id'&&k!=='page_id'&&k.indexOf('utm_')!==0){
        r['{{'+k+'}}']=esc(v);
      }
    });
    var hasValues=false;
    for(var key in r){if(r[key]){hasValues=true;break;}}
    if(!hasValues)return;
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
      acceptNode:function(n){
        var p=n.parentNode;
        if(p&&skipTags[p.nodeName])return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while(node=walker.nextNode()){
      var txt=node.nodeValue;
      if(txt&&txt.indexOf('{{')>-1){
        var changed=txt;
        for(var ph in r){
          if(r[ph]&&changed.indexOf(ph)>-1){
            changed=changed.split(ph).join(r[ph]);
          }
        }
        if(changed!==txt)node.nodeValue=changed;
      }
    }
    var attrs=['value','placeholder','content','alt','title'];
    attrs.forEach(function(attr){
      var els=document.querySelectorAll('['+attr+'*="{{"]');
      for(var i=0;i<els.length;i++){
        var tag=els[i].tagName;
        if(skipTags[tag])continue;
        var val=els[i].getAttribute(attr);
        if(val){
          var nv=val;
          for(var ph in r){
            if(r[ph]&&nv.indexOf(ph)>-1){
              nv=nv.split(ph).join(r[ph]);
            }
          }
          if(nv!==val)els[i].setAttribute(attr,nv);
        }
      }
    });
  }
  function run(){
    if(contactId){
      var xhr=new XMLHttpRequest();
      xhr.open('GET','https://paymegpt.com/api/landing/context/'+encodeURIComponent(contactId)+'?page_id=950');
      xhr.onload=function(){
        if(xhr.status===200){
          try{
            var resp=JSON.parse(xhr.responseText);
            if(resp.success&&resp.contact){
              var merged=resp.contact;
              for(var k in fields){merged[k]=fields[k];}
              doReplace(merged);
              return;
            }
          }catch(e){}
        }
        if(hasUrlFields)doReplace(fields);
      };
      xhr.onerror=function(){if(hasUrlFields)doReplace(fields);};
      xhr.send();
    }else if(hasUrlFields){
      doReplace(fields);
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}
  else{run();}
})();

(function(){
  var slug='M5uYPMvZL';
  var apiBase='https://paymegpt.com';
  function findEmail(){
    var ids=['email','emailAddress','buyer-email','buyerEmail','user-email','userEmail','checkout-email','customer-email','contact-email'];
    for(var i=0;i<ids.length;i++){var el=document.getElementById(ids[i]);if(el&&el.value&&el.value.includes('@'))return el.value.trim();}
    var inputs=document.querySelectorAll('input[type="email"],input[name*="email"],input[placeholder*="email"],input[placeholder*="Email"]');
    for(var j=0;j<inputs.length;j++){if(inputs[j].value&&inputs[j].value.includes('@'))return inputs[j].value.trim();}
    return '';
  }
  function findName(){
    var ids=['name','fullName','full-name','buyer-name','buyerName','customer-name','userName','user-name'];
    for(var i=0;i<ids.length;i++){var el=document.getElementById(ids[i]);if(el&&el.value)return el.value.trim();}
    var inputs=document.querySelectorAll('input[name*="name"]:not([name*="email"]):not([type="email"]),input[placeholder*="name"]:not([placeholder*="email"]):not([type="email"]),input[placeholder*="Name"]:not([type="email"])');
    for(var j=0;j<inputs.length;j++){if(inputs[j].value)return inputs[j].value.trim();}
    return '';
  }
  var __realProcessPayment=function(a,b,c,d,e){
    var amountCents,email,productName,productDescription,customerName,quantity;
    if(a&&typeof a==='object'){
      amountCents=a.amountCents;email=a.email;productName=a.productName;
      productDescription=a.productDescription||'';customerName=a.name||'';quantity=a.quantity||1;
    }else{
      amountCents=typeof a==='number'?a:0;productName=typeof b==='string'?b:'';
      productDescription=typeof c==='string'?c:'';email='';customerName='';quantity=1;
    }
    if(!email)email=findEmail();
    if(!customerName)customerName=findName();
    if(!productName){alert('Product name is required.');return Promise.reject('no_product_name');}
    if(!amountCents||amountCents<100){alert('Amount must be at least $1.00');return Promise.reject('invalid_amount');}
    if(!email){alert('Please enter your email address.');return Promise.reject('no_email');}
    var successBase=window.location.href.split('?')[0];
    return fetch(apiBase+'/api/landing-pages/public/'+slug+'/payment/checkout',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email:email,name:customerName,amountCents:amountCents,productName:productName,productDescription:productDescription,quantity:quantity,successUrl:successBase+'?payment=success&product='+encodeURIComponent(productName)+'&session_id={CHECKOUT_SESSION_ID}',cancelUrl:successBase+'?payment=cancelled'})
    }).then(function(r){return r.json();}).then(function(d){
      if(d.checkoutUrl){window.location.href=d.checkoutUrl;}
      else{alert(d.error||'Failed to process payment');throw new Error(d.error);}
    });
  };
  Object.defineProperty(window,'__processPayment',{value:__realProcessPayment,writable:false,configurable:false});
  document.addEventListener('DOMContentLoaded',function(){
    var urlParams=new URLSearchParams(window.location.search);
    if(urlParams.get('payment')==='success'){
      var pName=urlParams.get('product')||'your item';
      var overlay=document.createElement('div');overlay.id='payment-success-overlay';
      overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999999;font-family:system-ui,-apple-system,sans-serif;';
      overlay.innerHTML='<div style="background:white;border-radius:16px;padding:40px;max-width:420px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.15);"><div style="width:64px;height:64px;border-radius:50%;background:#dcfce7;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><h2 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#111827;">Payment Successful!</h2><p style="margin:0 0 24px;color:#6b7280;font-size:16px;">Thank you for purchasing '+pName.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'.</p><button onclick="document.getElementById(\'payment-success-overlay\').remove();window.history.replaceState({},\'\',window.location.pathname);" style="padding:12px 32px;font-size:16px;font-weight:600;background:#16a34a;color:white;border:none;border-radius:8px;cursor:pointer;">Continue</button></div>';
      document.body.appendChild(overlay);
    }
  });
})();

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