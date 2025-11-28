// Poiščemo vsa vnosna polja in gumb
const inputs = document.querySelectorAll('.vpisnaPolja');
const gumb = document.querySelector('.gumb');
const form = document.querySelector("form");

// Funkcija, ki preveri, ali so vsa polja izpolnjena
function preveriPolja() {
  let vsaIzpolnjena = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') vsaIzpolnjena = false;
  });

  if (vsaIzpolnjena) {
    gumb.classList.add('active');
  } else {
    gumb.classList.remove('active');
  }
}

inputs.forEach(input => input.addEventListener('input', preveriPolja));
preveriPolja();

// Funkcija za prikaz Instagram-stil SweetAlerta
function instagramAlert(icon, title, text, callback = null) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: 'V redu',
    customClass: {
      popup: 'instagram-swal-popup',
      confirmButton: 'instagram-swal-button'
    }
  }).then(() => {
    if (callback) callback();
  });
}
document.getElementById("credits").addEventListener("click", function () {
  instagramAlert('info', 'Avtor', 'Tilen Čečko');
});
// ------------------ SWEETALERTS ----------------------
gumb.addEventListener('click', function(e) {
  e.preventDefault();

  let praznoPolje = false;
  let emailNepravilen = false;
  let gesloPrekratko = false;
  let prijava = false;

  const emailInput = document.querySelector('input[type="email"]');
  const gesloInput = document.querySelector('input[type="password"]');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Preverimo prazna polja
  inputs.forEach(input => {
    if (input.value.trim() === '') praznoPolje = true;
  });

  // Preverimo e-pošto
  if (emailInput && !emailRegex.test(emailInput.value.trim())) emailNepravilen = true;

  // Preverimo geslo
  if (gesloInput && gesloInput.value.length < 6) gesloPrekratko = true;

  // Preverimo prijavo (test)
  if (emailInput.value.trim() === 'test@gmail.com' && gesloInput.value.trim() === 'test12345') {
    prijava = true;
  }

  // Izbiramo pravilni alert
  if (praznoPolje) {
    instagramAlert('error', 'Napaka', 'Prosim, izpolni vsa polja!');
  } else if (emailNepravilen) {
    instagramAlert('error', 'Neveljaven email', 'Prosim, vpiši veljaven e-poštni naslov.');
  } else if (gesloPrekratko) {
    instagramAlert('error', 'Prekratko geslo', 'Geslo mora vsebovati vsaj 6 znakov!');
  } else if (prijava) {
    instagramAlert('success', 'Prijava uspešna', 'Dobrodošel!', () => {
      form.submit();
    });
  } else {
    instagramAlert('error', 'Prijava neuspešna!', 'Prosim, vpiši pravilne podatke.');
  }
});
