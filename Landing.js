document.getElementById('mobile-menu').onclick = () => {
  document.querySelector('.nav-list').classList.toggle('active');
  document.getElementById('mobile-menu').classList.toggle('active');
      }
window.addEventListener('scroll', function() {
  const header = document.querySelector('.head-section');
    
if (window.scrollY > 50) {
  header.classList.add('shrink');
} else {
  header.classList.remove('shrink');
   }
});