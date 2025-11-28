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

 if (datumInput) {
    const danes = new Date();
    // izračunamo najmlajši dovoljen datum (danes minus 15 let)
    const dovoljenDatum = new Date(
      danes.getFullYear() - 15,
      danes.getMonth(),
      danes.getDate()
    );
    // formatiramo v YYYY-MM-DD
    const maxDate = dovoljenDatum.toISOString().split('T')[0];
    datumInput.max=maxDate;
    // lahko tudi krajše: datumInput.max = maxDate;
  }

// ------------------ VALIDACIJA REGISTRACIJE ----------------------
gumb.addEventListener('click', function(e) {
  e.preventDefault();

  let praznoPolje = false;
  let brezDatuma = false;

  // Preverimo datum rojstva
  if (datumInput && datumInput.value.trim() === '') {
    brezDatuma = true;
  }

  // Izbiramo pravilni alert
  if (praznoPolje) {
    instagramAlert('error', 'Napaka', 'Prosim, izpolni vsa polja!');
  } else if (brezDatuma) {
    instagramAlert('error', 'Manjka datum rojstva', 'Prosim, izberi svoj datum rojstva.');
  } else {
    instagramAlert('success', 'Registracija uspešna', 'Dobrodošel!', () => {
      form.submit();
    });
  }
});
