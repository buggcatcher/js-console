window.cmd = {
  log: function () {
    const msg = '[BUG]: Nessuna connessione al database';
    console.log(msg);
  },
  help: function () {
    console.log(`Benvenuto su questa console interattiva.

Comandi disponibili:

  cmd.ship()
  Mostra l'ASCII art della nave pirata

  Mostra tutti i riferimenti a file esposti nella pagina
  cmd.ref()

  cmd.speak("testo")
  Sintetizza vocalmente il testo passato come argomento

  cmd.matrix()
  Mostra indirizzo IP pubblico e informazioni sul dispositivo

  cmd.cache()
  Mostra le cache e lo storage locale/sessione

  cmd.fetch("file")
  Recupera e mostra il contenuto del file specificato
`);
  },
  ship: function () {
    const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠤⠴⠶⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠂⠉⡇⠀⠀⠀⢰⣿⣿⣿⣿⣧⠀⠀⢀⣄⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⡇⠀⠀⠀⠸⠟⠁⠀⡇⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⠟⢹⣋⣀⡀⢀⣤⣶⣿⣿⣿⣿⣿⡿⠛⣠⣼⣿⡟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⣾⣿⣿⣿⣿⢁⣾⣿⣿⣿⣿⣿⣿⡿⢀⣾⣿⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⠿⠇⠀⠀⠀⠀
⠀⠀⠀⠳⣤⣙⠟⠛⢻⠿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣇⠘⠉⠀⢸⠀⢀⣠⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣷⣦⣼⠀⠀⠀⢻⣿⣿⠿⢿⡿⠿⣿⡄⠀⠀⣼⣷⣿⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣶⣄⡈⠉⠀⠀⢸⡇⠀⠀⠉⠂⠀⣿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣷⣤⣀⣸⣧⣠⣤⣴⣶⣾⣿⣿⣿⡿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;
    console.log(asciiArt);
  },
  ref: function () {
    // Mostra tutti i riferimenti a file esposti nella pagina (link, immagini, script, css, favicon, manifest, media, iframe, embed, object)
    const refs = [];
    document.querySelectorAll('a[href]')
      .forEach(a => refs.push({ tipo: 'link', path: a.getAttribute('href') }));
    document.querySelectorAll('img[src]')
      .forEach(img => refs.push({ tipo: 'img', path: img.getAttribute('src') }));
    document.querySelectorAll('script[src]')
      .forEach(s => refs.push({ tipo: 'script', path: s.getAttribute('src') }));
    document.querySelectorAll('link[rel="stylesheet"][href]')
      .forEach(l => refs.push({ tipo: 'css', path: l.getAttribute('href') }));
    document.querySelectorAll('link[rel="manifest"][href]')
      .forEach(l => refs.push({ tipo: 'manifest', path: l.getAttribute('href') }));
    document.querySelectorAll('video[src]')
      .forEach(v => refs.push({ tipo: 'video', path: v.getAttribute('src') }));
    document.querySelectorAll('audio[src]')
      .forEach(a => refs.push({ tipo: 'audio', path: a.getAttribute('src') }));
    document.querySelectorAll('source[src]')
      .forEach(s => refs.push({ tipo: 'source', path: s.getAttribute('src') }));
    document.querySelectorAll('iframe[src]')
      .forEach(i => refs.push({ tipo: 'iframe', path: i.getAttribute('src') }));
    document.querySelectorAll('embed[src]')
      .forEach(e => refs.push({ tipo: 'embed', path: e.getAttribute('src') }));
    document.querySelectorAll('object[data]')
      .forEach(o => refs.push({ tipo: 'object', path: o.getAttribute('data') }));
    if (refs.length === 0) {
      console.log('Nessun riferimento a file trovato nella pagina.');
      return;
    }
    refs.forEach(ref => {
      console.log(`[${ref.tipo}] ${ref.path}`);
    });
  },
  speak: function (testo) {
    if (!('speechSynthesis' in window)) {
      console.log('Sintesi vocale non supportata dal browser.');
      return;
    }
    const utter = new SpeechSynthesisUtterance(testo);
    window.speechSynthesis.speak(utter);
  },
  matrix: function () {
    if (document.getElementById('whoami-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'whoami-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = '#000';
    modal.style.color = '#0f0';
    modal.style.fontFamily = 'monospace';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10000';
    modal.innerHTML = `
      <div style="text-align:center; position:relative;">
        <div style="font-size:2.5em;font-weight:bold;margin-bottom:3em;letter-spacing:2px;display:flex;align-items:center;justify-content:center;position:relative;">
          <span style="text-align:center;">Hello</span>
          <img src="esclamation_point.png" alt="!" style="height:1.2em;margin-left:0.08em;display:inline-block;vertical-align:middle;" />
        </div>
        <div style="background:rgba(0,0,0,0.7);padding:0em 0em; margin-top:0;display:inline-block;text-align:left;gap:0;">
          <div><b>User Agent:</b> <span id='whoami-ua'></span></div>
          <div><b>Lingua:</b> <span id='whoami-lang'></span></div>
          <div><b>Data/Ora:</b> <span id='whoami-date'></span></div>
          <div><b>Risoluzione:</b> <span id='whoami-res'></span></div>
          <div id='whoami-ipinfo'></div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('whoami-ua').textContent = navigator.userAgent;
    document.getElementById('whoami-lang').textContent = navigator.language;
    document.getElementById('whoami-date').textContent = new Date().toLocaleString();
    document.getElementById('whoami-res').textContent = window.innerWidth + ' x ' + window.innerHeight;
    // Fetch network info and show in modal
    (async function () {
      const outEl = document.getElementById('whoami-ipinfo');
      outEl.textContent = 'Raccolta dati di rete…';

      // Static mapping for continent from country code
      const continentMap = {
        AF: { code: 'AF', name: 'Africa' },
        AN: { code: 'AN', name: 'Antarctica' },
        AS: { code: 'AS', name: 'Asia' },
        EU: { code: 'EU', name: 'Europe' },
        NA: { code: 'NA', name: 'North America' },
        OC: { code: 'OC', name: 'Oceania' },
        SA: { code: 'SA', name: 'South America' }
      };
      // Helper to get continent from country code (ISO 3166-1 alpha-2)
      function getContinent(countryCode) {
        // Minimal mapping, can be extended
        const map = {
          US: 'NA', CA: 'NA', MX: 'NA', BR: 'SA', AR: 'SA', CO: 'SA', PE: 'SA', VE: 'SA',
          GB: 'EU', FR: 'EU', DE: 'EU', IT: 'EU', ES: 'EU', RU: 'EU', UA: 'EU',
          CN: 'AS', JP: 'AS', IN: 'AS', KR: 'AS', SA: 'AS',
          AU: 'OC', NZ: 'OC',
          ZA: 'AF', EG: 'AF', NG: 'AF',
        };
        const cont = map[countryCode];
        return continentMap[cont] || { code: '??', name: 'Unknown' };
      }

      try {
        // 1) IP pubblico da più endpoint
        let ip = null;
        let ipSources = [
          'https://api.ipify.org?format=json',
          'https://ipwho.is/',
          'https://api.bigdatacloud.net/data/client-ip'
        ];
        for (let url of ipSources) {
          try {
            let resp = await fetch(url);
            let data = await resp.json();
            if (data.ip) { ip = data.ip; break; }
            if (data.ipAddress) { ip = data.ipAddress; break; }
          } catch (e) {}
        }
        if (!ip) throw new Error('Impossibile ottenere IP pubblico');

        // 2) Geo da più servizi
        let geo = null, geoSource = null;
        const geoApis = [
          { url: `https://ipwho.is/${ip}`, type: 'ipwhois' },
          { url: `https://ip-api.io/json/${ip}`, type: 'ip-api.io' },
          { url: `https://api.bigdatacloud.net/data/ip-geolocation-full?ip=${ip}&localityLanguage=en`, type: 'bigdatacloud' }
        ];
        for (let api of geoApis) {
          try {
            let resp = await fetch(api.url);
            let data = await resp.json();
            // Check for valid response
            if ((api.type === 'ipwhois' && data.success) || (api.type === 'ip-api.io' && data.country_name) || (api.type === 'bigdatacloud' && data.location)) {
              geo = data;
              geoSource = api.type;
              break;
            }
          } catch (e) {}
        }
        if (!geo) throw new Error('Impossibile ottenere dati geo');

        console.log('unprivileged source:',  geoSource);

        // 3) Estrarre dati comuni
        let city = geo.city || geo.location?.city || geo.city_name || 'n/d';
        let region = geo.region || geo.region_name || geo.principalSubdivision || 'n/d';
        let country = geo.country || geo.country_name || geo.countryName || 'n/d';
        let country_code = geo.country_code || geo.country_code2 || geo.countryCode || 'n/d';
        let latitude = geo.latitude || geo.lat || geo.location?.latitude || 'n/d';
        let longitude = geo.longitude || geo.lon || geo.location?.longitude || 'n/d';
        // Timezone: gestisci oggetto o stringa
        let timezone = 'n/d';
        if (typeof geo.timezone === 'string') {
          timezone = geo.timezone;
        } else if (typeof geo.timezone === 'object' && geo.timezone !== null && geo.timezone.id) {
          timezone = geo.timezone.id;
        } else if (geo.time_zone?.id) {
          timezone = geo.time_zone.id;
        } else if (geo.location?.timeZone?.ianaTimeId) {
          timezone = geo.location.timeZone.ianaTimeId;
        }
        let postal = geo.postal || geo.postal_code || geo.postcode || geo.location?.postcode || 'n/d';
        // ASN: scegli connection.asn se presente
        let asn = geo.connection?.asn || geo.asn || geo.asn_number || geo.network?.autonomousSystemNumber || 'n/d';
        // Organizzazione: scegli connection.organization se presente
        let org = geo.connection?.organization || geo.org || geo.organization || geo.network?.organisation || 'n/d';
        let domain = geo.domain || geo.network?.organisation || 'n/d';
        let mcc = geo.mobile_carrier?.mcc || geo.mcc || 'n/d';
        let mnc = geo.mobile_carrier?.mnc || geo.mnc || 'n/d';
        let carrier = geo.mobile_carrier?.name || geo.carrier || 'n/d';
        let isAnonymous = geo.is_anonymous || geo.anonymous || geo.security?.isAnonymous || false;
        let isProxy = geo.is_proxy || geo.proxy || geo.security?.isProxy || false;
        let isVpn = geo.is_vpn || geo.vpn || geo.security?.isVpn || false;
        let isTor = geo.is_tor || geo.tor || geo.security?.isTor || false;
        // Inferenze
        const orgLower = (org || '').toLowerCase();
        const asnStr = (asn || '').toString().toLowerCase();
        const isHosting = /ovh|aws|google|azure|digitalocean|hetzner|linode|vultr|server|hosting|cloud/.test(orgLower + asnStr);
        const isMobile = /mobile|wireless|telecom|vodafone|tim|orange|cellular|wind|iliad|h3g|3italia|fastweb|telefonica|t-mobile|verizon|at&t|sprint|mcc|mnc/.test(orgLower + carrier.toLowerCase());
        const isSatellite = /starlink|viasat|hughes|satellite/.test(orgLower + asnStr);
        // Continente
        let continent = getContinent(country_code);

        outEl.innerHTML = `
          <div><b>IP pubblico:</b> ${ip}</div>
          <div><b>Geo API:</b> ${geoSource}</div>
          <div><b>ASN:</b> ${asn}</div>
          <div><b>Organizzazione:</b> ${org}</div>
          <div><b>Dominio:</b> ${domain}</div>
          <div><b>Località:</b> ${city}, ${region}, ${country}</div>
          <div><b>Coordinate:</b> ${latitude}, ${longitude}</div>
          <div><b>Timezone:</b> ${timezone}</div>
          <div><b>Continente:</b> ${continent.name} (${continent.code})</div>
          <div><b>Codice paese:</b> ${country_code}</div>
          <div><b>CAP:</b> ${postal}</div>
          <div><b>MCC/MNC:</b> ${mcc}/${mnc}</div>
          <div><b>Carrier:</b> ${carrier}</div>
          <div><b>Hosting:</b> ${isHosting}</div>
          <div><b>Mobile:</b> ${isMobile}</div>
          <div><b>Satellite:</b> ${isSatellite}</div>
          <div><b>VPN:</b> ${isVpn}</div>
          <div><b>Proxy:</b> ${isProxy}</div>
          <div><b>Tor:</b> ${isTor}</div>
          <div><b>Anonymous:</b> ${isAnonymous}</div>
        `;
      } catch (e) {
        outEl.textContent = 'Errore nel recupero dati di rete.';
      }
    })();
  },
  cache: function () {
    // Cache API
    if ('caches' in window) {
      caches.keys().then(names => {
        if (names.length === 0) {
          console.log('Nessuna cache trovata (Cache API).');
        }
        names.forEach(name => {
          caches.open(name).then(cache => {
            cache.keys().then(requests => {
              if (requests.length === 0) {
                console.log(`[Cache API] Nessuna risorsa in ${name}`);
              } else {
                requests.forEach(req => console.log(`[Cache API][${name}]`, req.url));
              }
            });
          });
        });
      });
    } else {
      console.log('Cache API non supportata dal browser.');
    }
    // localStorage
    if (localStorage.length > 0) {
      console.log('localStorage:');
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(key, value);
      }
    } else {
      console.log('localStorage vuoto.');
    }
    // sessionStorage
    if (sessionStorage.length > 0) {
      console.log('sessionStorage:');
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        console.log(key, value);
      }
    } else {
      console.log('sessionStorage vuoto.');
    }
  },
  fetch: async function (file) {
    if (!file || typeof file !== 'string') {
      console.log('Specifica un nome file valido.');
      return;
    }
    try {
      const resp = await fetch(file);
      if (!resp.ok) {
        console.log(`File non trovato o errore di rete: ${file}`);
        return;
      }
      // Prova a capire se è JSON
      const contentType = resp.headers.get('content-type') || '';
      if (contentType.includes('application/json') || file.endsWith('.json')) {
        const data = await resp.json();
        console.log(data);
      } else {
        const text = await resp.text();
        console.log(text);
      }
    } catch (e) {
      console.log('Errore nella lettura del file:', e);
    }
  }
};

// Stampa ship all'avvio della pagina
window.cmd.ship();
