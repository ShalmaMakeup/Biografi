function showSection(sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
}

// Inisialisasi section home saat pertama kali load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    
    // Event listener untuk tombol WhatsApp
    document.getElementById('waButton').addEventListener('click', function() {
        window.open('https://wa.me/6289644991508?text=Halo%20Shalma.makeup,%20saya%20mau%20order%2makeup');
    });
});

// Fungsi untuk modal gambar
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  // Event listeners untuk modal
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('imageModal').style.display = "none";
  });
  
  window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Keyboard control
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.getElementById('imageModal').style.display = "none";
    }
  });
  
  // Update price image HTML untuk menambahkan onclick
  document.querySelectorAll('.price-image img').forEach(img => {
    img.addEventListener('click', () => openModal(img.src));
  });