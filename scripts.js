/* === GLOBAL === */
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff;
  color: #111;
}
h1, h2, h3 {
  color: #b30000;
}
section {
  padding: 60px 0;
}
a {
  text-decoration: none;
}

/* === NAVIGATION === */
.custom-nav {
  background: #b30000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.navbar-brand {
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
}
.logo-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.nav-menu {
  display: flex;
  list-style: none;
}
.nav-item {
  margin-left: 15px;
}
.nav-link {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s ease;
  color: white;
}
.nav-link:hover,
.nav-link.active {
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

/* === Hamburger Menu === */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}
.menu-toggle span {
  height: 3px;
  background: #fff;
  border-radius: 5px;
  width: 100%;
}

/* === Responsive Nav === */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  .nav-menu {
    display: none;
    flex-direction: column;
    background-color: #b30000;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
  }
  .nav-menu.show {
    display: flex;
  }
  .nav-item {
    width: 100%;
    text-align: left;
    padding: 10px 20px;
  }
  .nav-link {
    width: 100%;
    display: block;
    padding: 12px 0;
  }
}

/* === BANNER === */
.banner-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.banner-overlay {
  position: relative;
  width: 100%;
  height: 100%;
}
.slideshow-container {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
.banner-slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.banner-slide.active {
  opacity: 1;
}
.banner-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.3);
  text-align: center;
  padding: 20px;
}
.banner-content h1 {
  font-size: 3rem;
  color: darkred;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.2);
}
.banner-content .btn {
  margin-top: 20px;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 30px;
  color: #b30000;
  border: 2px solid #b30000;
  background: #fff;
  transition: 0.3s;
}
.banner-content .btn:hover {
  background: #b30000;
  color: #fff;
}

/* === FADE SECTION === */
.fade-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}
.fade-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* === SERVICES === */
.service-card {
  position: relative;
  height: 300px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: box-shadow 0.3s ease;
}
.service-title {
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.service-card:hover .service-title {
  opacity: 0.3;
}
.service-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.95);
  color: #111;
  padding: 20px;
  text-align: center;
  opacity: 0;
  z-index: 3;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.service-card:hover .service-overlay {
  opacity: 1;
}
.service-overlay h3 {
  color: #b30000;
  margin-bottom: 10px;
}
.service-card:hover {
  box-shadow: 0 0 15px 5px rgba(0, 255, 0, 0.3);
}

/* === GOOGLE FORM CONTAINER === */
.google-form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff0f0;
  border: 2px solid #b30000;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.google-form-container iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 10px;
}

/* === FAQ === */
.accordion-button {
  background-color: #fff;
  color: #b30000;
  font-weight: bold;
}
.accordion-button:not(.collapsed) {
  background-color: #ffe6e6;
  color: #b30000;
}
.accordion-body {
  background-color: #fff;
}

/* === Responsive Services Card Height === */
@media (max-width: 768px) {
  .service-card {
    height: 250px;
  }
}
