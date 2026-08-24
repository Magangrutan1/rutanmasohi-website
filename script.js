document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navMenu').classList.toggle('open');
});

// Tutup menu otomatis setelah klik salah satu link (khusus tampilan HP)
document.querySelectorAll('#navMenu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('navMenu').classList.remove('open');
  });
});
