// Poiščemo vsa vnosna polja in gumb
const inputs = document.querySelectorAll('.vpisnaPolja');
const gumb = document.querySelector('.gumb');
const form = document.querySelector("form");
const datumInput = document.querySelector('#rojstni-datum');

// Funkcija, ki preveri, ali so vsa polja izpolnjena
function preveriPolja() {
  let vsaIzpolnjena = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') vsaIzpolnjena = false;
  });

  if (datumInput && datumInput.value.trim() === '') vsaIzpolnjena = false;

  if (vsaIzpolnjena) {
    gumb.classList.add('active');
  } else {
    gumb.classList.remove('active');
  }
}

inputs.forEach(input => input.addEventListener('input', preveriPolja));
if (datumInput) datumInput.addEventListener('change', preveriPolja);

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

// ------------------ VALIDACIJA REGISTRACIJE ----------------------
gumb.addEventListener('click', function(e) {
  e.preventDefault();

  let praznoPolje = false;
  let emailNepravilen = false;
  let gesloPrekratko = false;
  let brezDatuma = false;
  let premlad = false;

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

  // Preverimo datum rojstva
  if (datumInput && datumInput.value.trim() === '') brezDatuma = true;

  // Preverimo starost
  if (datumInput && datumInput.value.trim() !== '') {
    const danes = new Date();
    const rojstvo = new Date(datumInput.value);
    let starost = danes.getFullYear() - rojstvo.getFullYear();
    const mesecRazlika = danes.getMonth() - rojstvo.getMonth();
    const danRazlika = danes.getDate() - rojstvo.getDate();
    if (mesecRazlika < 0 || (mesecRazlika === 0 && danRazlika < 0)) starost--;
    if (starost < 15) premlad = true;
  }

  // Izbiramo pravilni alert
  
  if (praznoPolje) {
    instagramAlert('error', 'Napaka', 'Prosim, izpolni vsa polja!');
  } else if (emailNepravilen) {
    instagramAlert('error', 'Neveljaven email', 'Prosim, vpiši veljaven e-poštni naslov.');
  } else if (gesloPrekratko) {
    instagramAlert('error', 'Prekratko geslo', 'Geslo mora vsebovati vsaj 6 znakov!');
  } else if (brezDatuma) {
    instagramAlert('error', 'Manjka datum rojstva', 'Prosim, izberi svoj datum rojstva.');
  } else if (premlad) {
    instagramAlert('error', 'Premlad za registracijo', 'Za ustvarjanje računa moraš biti star vsaj 15 let.');
  } else {
    instagramAlert('success', 'Podatki vspešno izpolnjeni', 'Naslednji korak', () => {
      form.submit();
    });
  }
});
