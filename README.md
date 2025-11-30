# 📸 Klon Instagram prijavne strani

Ta projekt predstavlja podrobno in vizualno natančno kopijo **Instagram prijavne strani**, izdelano z uporabo **HTML**, **CSS**, **JavaScript** ter knjižnice **SweetAlert2** za sodobna opozorila. Namen projekta je učenje spletnega razvoja, oblikovanja UI ter razumevanje validacij obrazcev.

> ⚠️ Projekt ne zbira ali shranjuje podatkov. Vse funkcionalnosti so zgolj vizualne in izobraževalne. Projekt ni povezan z Instagramom ali Meta Platforms, Inc.

---

## ✨ Funkcionalnosti

### 🔹 Registracija (Sign Up Page)
V projektu je izdelana popolna registracijska stran z več validacijami in čistim Instagram-style dizajnom.

**Validacije vključujejo:**
- preverjanje praznih polj  
- preverjanje pravilnega formata e-pošte  
- zahteve za geslo (prikazane kot navodila)  
- obvezno označen checkbox *Pogoji uporabe*  

**Dodatno:**
- minimalističen "StockX/Instagram" videz  
- SweetAlert2 pojavna obvestila (Napaka / Uspeh)

---

### 🔹 Prijava (Log In Page)
Prijavna stran posnema uradni Instagram login UI in uporablja preprosto "fake login" logiko.

**Validacije vključujejo:**
- preverjanje praznih polj  
- preverjanje pravilne e-pošte  
- preverjanje pravilnosti gesla  
- preverjanje pravilnega formata e-pošte  

**Fake prijavni sistem:**
email: test@gmail.com
geslo: test12345


**Dodatno:**
- SweetAlert2 opozorila za:
  - napačno geslo
  - napačno e-pošto
  - uspešno prijavo
  - manjkajoče podatke

---

## 📄 Struktura strani

- **index.html** → Prijava (Log In)  
- **signup.html** → Registracija (Sign Up)  
- **style.css** → Glavni stil za celotno stran  
- **script.js** → Validacije + SweetAlert2 logika  
- **img/** → favicon, logotipi in grafični elementi  

---

## 🛠️ Uporabljene tehnologije

- **HTML5** → osnovna struktura strani  
- **CSS3** → oblikovanje, layout, responsive dizajn  
- **Vanilla JavaScript** → validacije in logika obrazcev  
- **SweetAlert2** → sodobna pop-up obvestila  
- **SVG / PNG ikone** → vizualni elementi  

---

## 📱 Responsive dizajn

Stran je popolnoma odzivna za:

- mobilne naprave  
- tablice  
- manjše zaslone  

**Media queries** prilagajajo:
- velikost logotipa  
- velikost gumbov in padding  
- razmike  
- velikost ikon  

Cilj je čist, moder, Instagram-style UI na vseh napravah.

---

## 🎯 Namen projekta

Ta projekt je bil ustvarjen z namenom:
- izboljšati razumevanje HTML/CSS postavitve  
- vaditi odziven dizajn (responsive design)  
- razumeti validacijo obrazcev  
- spoznati uporabo SweetAlert2 modalov  
- posnemati UI znane svetovne platforme
