onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });

  // Function to create falling petals at random intervals
  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Random horizontal position
    petal.style.left = Math.random() * 100 + 'vw';
    
    // Random size
    const size = Math.random() * 10 + 5; // 5-15px
    petal.style.width = size + 'px';
    petal.style.height = size * 1.5 + 'px'; // oval shape
    
    // Random z-index for 3D effect (some behind, some in front of envelope)
    petal.style.zIndex = Math.random() > 0.5 ? '4' : '2'; // 4 > 3 (envelope), 2 < 3
    
    // Random animation duration
    const duration = Math.random() * 5 + 5; // 5-10s
    petal.style.animationDuration = duration + 's';
    
    // Random delay for swaying
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
      petal.remove();
    }, duration * 1000);
    
    // Schedule next petal
    setTimeout(createPetal, Math.random() * 2000 + 1000);
  }
  
  // Start creating petals
  createPetal();
  
  // --- Fireflies effect ---
  function createFireflies() {
    const count = Math.floor(Math.random() * 6) + 10; // 10-15 fireflies
    for (let i = 0; i < count; i++) {
      const f = document.createElement('div');
      f.classList.add('firefly');

      // Keep them mostly around the bottom half near the flowers
      const left = Math.random() * 80 + 10; // 10vw - 90vw
      const top = Math.random() * 35 + 55; // 55vh - 90vh
      f.style.left = left + 'vw';
      f.style.top = top + 'vh';

      // Random size
      const size = Math.random() * 6 + 4; // 4-10px
      f.style.width = size + 'px';
      f.style.height = size + 'px';

      // Randomized small path offsets using CSS variables
      const tx1 = (Math.random() * 60 - 30) + 'px';
      const ty1 = (Math.random() * 40 - 20) + 'px';
      const tx2 = (Math.random() * 60 - 30) + 'px';
      const ty2 = (Math.random() * 40 - 20) + 'px';
      const tx3 = (Math.random() * 60 - 30) + 'px';
      const ty3 = (Math.random() * 40 - 20) + 'px';
      f.style.setProperty('--tx1', tx1);
      f.style.setProperty('--ty1', ty1);
      f.style.setProperty('--tx2', tx2);
      f.style.setProperty('--ty2', ty2);
      f.style.setProperty('--tx3', tx3);
      f.style.setProperty('--ty3', ty3);

      // Random durations for float and flicker
      const floatDuration = Math.random() * 6 + 6; // 6-12s
      const flickerDuration = Math.random() * 2 + 1.5; // 1.5-3.5s
      const floatDelay = Math.random() * 3;
      const flickerDelay = Math.random() * 2;
      f.style.animation = `float ${floatDuration}s ease-in-out ${floatDelay}s infinite, flicker ${flickerDuration}s ease-in-out ${flickerDelay}s infinite`;

      // Slight z-index so they appear over the flowers but not over UI text
      f.style.zIndex = '6';

      document.body.appendChild(f);
    }
  }

  // Create initial fireflies and refresh occasionally
  createFireflies();
  setInterval(() => {
    // add a few more sometimes to keep the field lively
    createFireflies();
  }, 15000);
  
