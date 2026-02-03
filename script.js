// =============================================
// VALENTINE EXPERIENCE - JAVASCRIPT
// =============================================

// Track selected items
const selectedGifts = [];
const selectedDates = [];

// =============================================
// CONFETTI ANIMATION
// =============================================
class Confetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        const colors = ['#d4526e', '#f9a8d4', '#ff6b9d', '#ffc9e0', '#fff'];
        const shapes = ['circle', 'square', 'heart'];
        
        return {
            x: Math.random() * this.canvas.width,
            y: -20,
            size: Math.random() * 10 + 5,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 - 2.5
        };
    }

    drawHeart(x, y, size) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + size / 4);
        this.ctx.bezierCurveTo(x, y, x - size / 2, y - size / 2, x - size / 2, y + size / 4);
        this.ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size, x, y + size);
        this.ctx.bezierCurveTo(x, y + size, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
        this.ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y, x, y + size / 4);
        this.ctx.fill();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate(particle.rotation * Math.PI / 180);
            this.ctx.fillStyle = particle.color;

            if (particle.shape === 'circle') {
                this.ctx.beginPath();
                this.ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
            } else if (particle.shape === 'square') {
                this.ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            } else if (particle.shape === 'heart') {
                this.drawHeart(0, -particle.size / 2, particle.size);
            }

            this.ctx.restore();

            // Update particle
            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.rotation += particle.rotationSpeed;

            // Remove particles that are off screen
            if (particle.y > this.canvas.height) {
                this.particles.splice(index, 1);
            }
        });

        if (this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.draw());
        }
    }

    start(duration = 4000) {
        // Create burst of confetti
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                this.particles.push(this.createParticle());
            }, Math.random() * 500);
        }

        this.draw();

        // Stop creating new particles after duration
        setTimeout(() => {
            this.stop();
        }, duration);
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// Initialize confetti
const confetti = new Confetti();

// =============================================
// SECTION NAVIGATION
// =============================================
function enterPortal() {
    confetti.start(5000);
    nextSection('welcome', 'gifts');
}

function nextSection(currentId, nextId) {
    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);
    
    // Fade out current
    current.style.opacity = '0';
    current.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        current.classList.remove('active');
        next.classList.add('active');
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Trigger entrance animation
        setTimeout(() => {
            next.style.opacity = '1';
            next.style.transform = 'translateY(0)';
        }, 100);
    }, 400);
}

// =============================================
// GIFT SECTION
// =============================================
function flipGift(card, index) {
    const isFlipped = card.classList.contains('flipped');
    card.classList.toggle('flipped');
    
    const giftMessages = [
        "Good choice... I knew you'd like flowers 🌹",
        "A book for my bookworm... perfect choice 📚",
        "Something to remember us by... I love that you chose this 💍",
        "You know I always think of what you'd love 🎧"
    ];
    
    const responseDiv = document.getElementById('gift-response');
    
    if (!isFlipped) {
        if (!selectedGifts.includes(index)) {
            selectedGifts.push(index);
        }
        
        if (selectedGifts.length === 1) {
            responseDiv.textContent = giftMessages[index];
        } else {
            responseDiv.textContent = "You can choose more than one 😌 I love your choices!";
        }
        responseDiv.style.animation = 'fadeIn 0.5s ease';
    } else {
        const giftIndex = selectedGifts.indexOf(index);
        if (giftIndex > -1) {
            selectedGifts.splice(giftIndex, 1);
        }
        
        if (selectedGifts.length === 0) {
            responseDiv.textContent = "";
        }
    }
}

// =============================================
// DATE SECTION
// =============================================
function selectDate(card, type) {
    card.classList.toggle('selected');
    
    const dateMessages = {
        'cozy': "A cozy movie night sounds perfect... with you, everything is 🍿",
        'fun': "Game night it is! Get ready to lose 😄🎮",
        'simple': "Just us talking for hours... my favorite kind of date ☕",
        'studious': "Study date! We'll be productive... mostly 📖",
        'foodie': "Same food, different places... I love this 🍕"
    };
    
    const responseDiv = document.getElementById('date-response');
    const isSelected = card.classList.contains('selected');
    
    if (isSelected) {
        if (!selectedDates.includes(type)) {
            selectedDates.push(type);
        }
        responseDiv.textContent = dateMessages[type];
        responseDiv.style.animation = 'fadeIn 0.5s ease';
    } else {
        const dateIndex = selectedDates.indexOf(type);
        if (dateIndex > -1) {
            selectedDates.splice(dateIndex, 1);
        }
        
        if (selectedDates.length === 0) {
            responseDiv.textContent = "";
        } else {
            // Show message for the last selected date
            const lastDate = selectedDates[selectedDates.length - 1];
            responseDiv.textContent = dateMessages[lastDate];
        }
    }
}

// =============================================
// QUESTIONS SECTION
// =============================================
const answeredQuestions = [false, false, false];

function answerQuestion(button, questionIndex, response) {
    // Get all buttons in this question block
    const questionBlock = button.closest('.question-block');
    const allButtons = questionBlock.querySelectorAll('.option-btn');
    
    // Remove selected class from all buttons
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add selected class to clicked button
    button.classList.add('selected');
    
    // Show response
    const responseElement = document.getElementById(`response-${questionIndex}`);
    responseElement.textContent = response;
    responseElement.style.animation = 'fadeIn 0.5s ease';
    
    // Mark question as answered
    answeredQuestions[questionIndex] = true;
}

// =============================================
// SONG SECTION
// =============================================
const songPlayStates = [false, false, false, false];

function toggleSongPlay(songIndex) {
    const playBtn = document.getElementById(`play-btn-${songIndex}`);
    songPlayStates[songIndex] = !songPlayStates[songIndex];
    
    if (songPlayStates[songIndex]) {
        playBtn.textContent = '⏸';
        playBtn.classList.add('playing');
        // Note: Actual audio playback is handled by Spotify embed below
        // This is just for visual feedback on the cover image
    } else {
        playBtn.textContent = '▶';
        playBtn.classList.remove('playing');
    }
}

// Alternative: If you want only one song to play at a time
function toggleSongPlayExclusive(songIndex) {
    // Pause all other songs
    for (let i = 0; i < songPlayStates.length; i++) {
        if (i !== songIndex && songPlayStates[i]) {
            const otherBtn = document.getElementById(`play-btn-${i}`);
            otherBtn.textContent = '▶';
            otherBtn.classList.remove('playing');
            songPlayStates[i] = false;
        }
    }
    
    // Toggle current song
    const playBtn = document.getElementById(`play-btn-${songIndex}`);
    songPlayStates[songIndex] = !songPlayStates[songIndex];
    
    if (songPlayStates[songIndex]) {
        playBtn.textContent = '⏸';
        playBtn.classList.add('playing');
    } else {
        playBtn.textContent = '▶';
        playBtn.classList.remove('playing');
    }
}

// =============================================
// PHOTOS SECTION
// =============================================
function flipPhoto(card) {
    card.classList.toggle('flipped');
    
    // Optional: Add sound effect or confetti when flipping
    if (card.classList.contains('flipped')) {
        // Create small confetti burst
        createSmallConfetti(card);
    }
}

function createSmallConfetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create a few heart particles around the flipped card
    for (let i = 0; i < 10; i++) {
        const particle = confetti.createParticle();
        particle.x = centerX + (Math.random() - 0.5) * 100;
        particle.y = centerY;
        particle.size = Math.random() * 5 + 3;
        particle.shape = 'heart';
        confetti.particles.push(particle);
    }
    
    if (!confetti.animationId) {
        confetti.draw();
    }
}

// =============================================
// ENDING SECTION
// =============================================
function sendKiss() {
    const kissBtn = document.getElementById('kiss-btn');
    const kissReceived = document.getElementById('kiss-received');
    
    // Disable button
    kissBtn.disabled = true;
    kissBtn.style.opacity = '0.5';
    
    // Show received message
    kissReceived.textContent = '💋 Kiss received! Sending one back... 😘';
    kissReceived.style.animation = 'heartbeat 1s ease-in-out';
    
    // Big confetti celebration
    confetti.start(3000);
    
    // Re-enable after animation
    setTimeout(() => {
        kissBtn.disabled = false;
        kissBtn.style.opacity = '1';
    }, 3000);
}

// =============================================
// INITIALIZE ON LOAD
// =============================================
window.addEventListener('load', () => {
    // Trigger confetti on welcome screen
    setTimeout(() => {
        confetti.start(3000);
    }, 500);
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// =============================================
// UTILITY FUNCTIONS
// =============================================

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add floating hearts animation (optional enhancement)
function createFloatingHearts() {
    const container = document.body;
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = `floatUp ${Math.random() * 3 + 3}s linear`;
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Optional: Create floating hearts periodically
// Uncomment to enable
// setInterval(createFloatingHearts, 3000);

// =============================================
// CONSOLE MESSAGE (Easter Egg)
// =============================================
console.log('%c💖 Made with Love 💖', 'color: #d4526e; font-size: 24px; font-weight: bold;');
console.log('%cThis Valentine experience was crafted with care, just for someone special.', 'color: #c94b63; font-size: 14px;');