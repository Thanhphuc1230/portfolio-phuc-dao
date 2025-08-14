// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileMenuIcon = mobileMenuBtn.querySelector("i");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  mobileOverlay.classList.toggle("hidden");

  // Toggle hamburger/close icon
  if (mobileMenu.classList.contains("active")) {
    mobileMenuIcon.className = "fas fa-times text-xl";
  } else {
    mobileMenuIcon.className = "fas fa-bars text-xl";
  }
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
mobileOverlay.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileMenu();
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Parallax effect
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });

  // Navigation background effect
  const nav = document.querySelector("nav");
  if (scrolled > 100) {
    nav.classList.add("shadow-2xl");
  } else {
    nav.classList.remove("shadow-2xl");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");

      // Animate progress circles
      const progressCircles = entry.target.querySelectorAll(
        ".progress-circle circle:last-child"
      );
      progressCircles.forEach((circle) => {
        const percentage =
          circle.parentElement.parentElement.querySelector("span").textContent;
        const value = parseInt(percentage);
        const circumference = 283;
        const offset = circumference - (value / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      });
    }
  });
}, observerOptions);

// Observe all sections and skill cards
document.querySelectorAll("section, .card-hover").forEach((element) => {
  observer.observe(element);
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Create custom modal instead of alert
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  modal.innerHTML = `
                <div class="bg-gray-800 p-8 rounded-2xl border border-cyan-400 max-w-md mx-4">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-check text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Cảm ơn bạn!</h3>
                        <p class="text-gray-400 mb-6">Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể.</p>
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300">
                            Đóng
                        </button>
                    </div>
                </div>
            `;
  document.body.appendChild(modal);

  // Reset form
  this.reset();
});

// Add typing animation restart on scroll
let typingAnimationPlayed = false;
const heroSection = document.querySelector("#home");
const heroObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !typingAnimationPlayed) {
        const typewriterElement = document.querySelector(".typewriter");
        typewriterElement.style.animation = "none";
        setTimeout(() => {
          typewriterElement.style.animation =
            "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite";
        }, 100);
        typingAnimationPlayed = true;
      }
    });
  },
  { threshold: 0.5 }
);

heroObserver.observe(heroSection);

// Timeline animations
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "all 0.8s ease-out";
  timelineObserver.observe(item);
});

// Enhanced skill bars animation
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll(
          ".skill-progress-enhanced"
        );
        skillBars.forEach((bar) => {
          bar.style.animation = "fillBar 2s ease-out forwards";
        });
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".skill-category-enhanced").forEach((section) => {
  skillsObserver.observe(section);
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96e99c3bf3954ba3',t:'MTc1NTEwMjc2NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
