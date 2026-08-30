import type { Translations } from './types'

/* ============================================================================
   ITALIAN content.
   This is one of the two translation config files. Edit copy here; the English
   counterpart lives in `en.ts`. Both must implement the `Translations` shape.
   ========================================================================== */

export const it: Translations = {
  langShort: 'IT',
  langName: 'Italiano',

  nav: {
    home: 'Home',
    thesis: 'Tesi',
    participium: 'Participium',
    autostar: 'Autostar',
    about: 'Chi sono',
    contact: 'Contatti',
    resume: 'Curriculum',
  },

  hero: {
    available: 'Tesista di ricerca · ETH Zürich',
    greeting: 'Ciao, sono',
    name: 'Carola Bonamico',
    roles: ['Software Engineer', 'AI Engineer', 'Bioengineer'],
    tagline:
      'Mi occupo di intelligenza artificiale per il riconoscimento del parlato silenzioso, gestendo non solo i modelli, ma anche la raccolta dati e tutto l\'ecosistema software full-stack necessario a supportarli. Che si tratti di interfacce neurali, sviluppo software o web app, il mio vero punto di forza è la capacità di adattarmi e creare connessioni tra settori completamente diversi.',
    location: 'Zürich, CH · Torino, IT',
    ctaPrimary: 'Esplora la tesi',
    ctaSecondary: 'Scrivimi',
    scrollHint: 'Scorri per esplorare',
  },

  thesis: {
    context: 'Interfacce Neurali',
    eyebrow: 'Tesi di Laurea Magistrale',
    institution: 'ETH Zürich · Integrated Systems Laboratory',
    title: 'SilentWear',
    subtitle: 'Deep learning per il riconoscimento del parlato silenzioso da EMG di superficie',
    lead: 'Decodificare il linguaggio umano a partire dai micro-segnali elettrici dei muscoli del collo, anche nel silenzio più assoluto.',
    body: [
      'L’elettromiografia di superficie (sEMG) rileva l’attività muscolare dell’articolazione delle parole direttamente alla sorgente. Funziona senza alcuna emissione vocale, è immune al rumore acustico e non espone mai ciò che si sta dicendo: le fondamenta ideali per la comunicazione assistiva e le interfacce uomo-macchina di nuova generazione.',
      'La mia tesi estende il progetto SilentWear da pochi comandi isolati a un vocabolario esteso di 15 parole e 20 frasi. Ho seguito l’intera catena: la campagna di acquisizione, la pipeline di elaborazione, le architetture di deep learning e i due percorsi di decodifica che trasformano l’EMG in testo.',
      'Il dataset che ne è alla base è multimodale e multi-sessione. Una neckband sEMG completamente a secco, una headband EEG a secco e l’audio vengono registrati insieme, per sei sessioni a partecipante in sei giorni diversi, e a ogni sessione entrambe le fasce vengono tolte e riposizionate. I modelli sono validati su una sessione mai vista, con lo spostamento degli elettrodi che un dispositivo indossabile incontra davvero nell’uso quotidiano, e non su un’unica seduta.',
    ],
    contributionTitle: 'Cosa ho sviluppato',
    contributions: [
      {
        title: 'Un dataset multimodale e multi-sessione',
        text: 'Ho progettato e condotto il protocollo di acquisizione: 7 partecipanti, 6 sessioni ciascuno, 42 sessioni e circa 40 ore di registrazione. Ogni sessione copre 15 parole isolate e 20 frasi, sia in condizione vocalizzata sia silenziosa, con sEMG, EEG e audio acquisiti insieme e le due fasce riposizionate ogni volta.',
      },
      {
        title: 'Espandere SpeechNet',
        text: 'Ho alimentato la CNN SpeechNet con rappresentazioni nel dominio della frequenza (STFT, cepstro mel) al posto del segnale grezzo nel tempo, e ne ho rivisto il pooling perché l’asse delle frequenze sopravviva al backbone. Sopra di esso ho confrontato un BiLSTM e un encoder Transformer come stadio sequenziale.',
      },
      {
        title: 'Classificazione closed-set',
        text: 'Il primo task assegna a ogni finestra una delle 21 classi, le 20 frasi più il rest. È l’impostazione del sistema SilentWear originale, portata dai comandi brevi alle frasi complete.',
      },
      {
        title: 'Continuous recognition',
        text: 'Il secondo task abbandona l’insieme fisso di etichette. Addestrato con la loss CTC e decodificato in modo greedy o con prefix beam search, il modello emette una sequenza di caratteri e scrive la frase una lettera alla volta.',
      },
    ],
    stats: [
      { value: '7', label: 'Partecipanti' },
      { value: '42', label: 'Sessioni · riposizionate' },
      { value: '40', unit: 'h', label: 'Di registrazione' },
      { value: '3', label: 'Segnali · EMG, EEG, audio' },
    ],
    resultsTitle: 'Risultati',
    resultsLead: 'Modelli specifici per soggetto, uno per partecipante e condizione di parlato, validati con cross-validation leave-one-session-out sulle sei sessioni. Ogni valore è la media ± una deviazione standard sui sette partecipanti.',
    results: [
      {
        title: 'Classificazione closed-set',
        metrics: [
          { value: '85.8', unit: '%', label: 'Vocalizzato · ± 5.2' },
          { value: '82.1', unit: '%', label: 'Silenzioso · ± 10.5' },
        ],
        note: 'Accuratezza bilanciata sulle 20 frasi più il rest, stadio Transformer su feature STFT. Il solo stadio sequenziale vale da 58 a 61 punti rispetto al backbone convoluzionale.',
      },
      {
        title: 'Continuous recognition',
        metrics: [
          { value: '16.3', unit: '%', label: 'WER vocalizzato · ± 5.0' },
          { value: '22.4', unit: '%', label: 'WER silenzioso · ± 14.1' },
        ],
        note: 'Word error rate bilanciato, stadio BiLSTM su feature STFT. Ogni parola decodificata viene ricondotta alla più vicina fra le 37 del corpus: il tasso è quindi vincolato al vocabolario e non è confrontabile con i WER open-vocabulary.',
      },
    ],
    tags: ['PyTorch', 'sEMG', 'EEG', 'STFT', 'CNN', 'BiLSTM', 'Transformer', 'CTC', 'Prefix beam search', 'Signal processing'],
    repo: 'Vedi il repository',
    paper: 'Leggi il paper',
    anim: {
      title: 'Segnale live',
      channels: '14 canali differenziali',
      vocalized: 'Vocalizzato',
      silent: 'Silenzioso',
      decoding: 'Decodifica CTC',
      output: '“Turn on the light”',
      caption: 'Due fasce tessili completamente a secco: 15 elettrodi EMG sui muscoli infraioidei e sternocleidomastoideo, 16 elettrodi EEG sulla headband, e un microfono su ciascuna unità.',
      modalities: 'sEMG · EEG · audio · 6 sessioni, riposizionate',
      emgLabel: 'EMG',
      eegLabel: 'EEG',
    },
  },

  participium: {
    context: 'Civic Tech',
    eyebrow: 'Politecnico di Torino · Ingegneria del Software',
    role: 'Full-stack · progetto di gruppo',
    title: 'Participium',
    subtitle: 'Una piattaforma di segnalazioni civiche che collega cittadini e comune',
    lead: 'Noti un lampione rotto o una buca, scatti una foto, posizioni un pin e segui la tua segnalazione fino alla risoluzione.',
    body: [
      'Participium è una piattaforma full-stack di partecipazione civica che trasforma le segnalazioni sparse dei cittadini in un flusso di lavoro strutturato e tracciabile tra cittadini, operatori comunali e amministratori.',
      'Costruita in TypeScript e JavaScript su Node.js, unisce segnalazioni geolocalizzate e corredate di foto a workflow basati sui ruoli, notifiche Telegram in tempo reale e quality gate SonarQube integrati nella CI.',
    ],
    features: [
      { title: 'Segnalazioni geolocalizzate', text: 'Pin sulla mappa con foto e categorie, per segnalazioni precise e azionabili.' },
      { title: 'Workflow basati sui ruoli', text: 'Flussi distinti e con permessi per cittadini, operatori comunali e amministratori.' },
      { title: 'Notifiche Telegram', text: 'I cambi di stato vengono inviati agli utenti in tempo reale, così nulla si perde.' },
      { title: 'CI con quality gate', text: 'L’analisi statica SonarQube garantisce qualità del codice continua a ogni modifica.' },
    ],
    tags: ['TypeScript', 'Node.js', 'React', 'Geolocalizzazione', 'Telegram API', 'SonarQube'],
    videoTitle: 'Demo del progetto',
    videoCaption: 'Una breve demo del flusso di segnalazione e della dashboard operatore.',
    watchVideo: 'Guarda su YouTube',
    repo: 'Vedi il repository',
  },

  autostar: {
    context: 'Motorsport',
    eyebrow: 'Progetto per cliente',
    role: 'Front-end · React',
    title: 'Autostar Motorsport',
    subtitle: 'Una vetrina responsive per un’azienda di motorsport',
    lead: 'Un front-end statico e semplice, costruito per far sentire un brand racing esattamente così: veloce.',
    body: [
      'Un sito vetrina responsive per un’azienda di motorsport, realizzato come applicazione React lato client con un’architettura a componenti pulita e modulare.',
      'Unisce componenti riutilizzabili stilizzati in CSS, animazioni allo scroll con AOS e gestione del consenso conforme al GDPR tramite Iubenda: dettagli di produzione che servono a un cliente reale, non solo a una demo.',
    ],
    features: [
      { title: 'Architettura lato client', text: 'Un front-end React interamente lato client, senza alcuna dipendenza da server.' },
      { title: 'Componenti modulari', text: 'Blocchi React riutilizzabili e stilizzati in CSS, per un codice manutenibile.' },
      { title: 'Conforme al GDPR', text: 'Gestione di cookie e consenso tramite Iubenda.' },
      { title: 'Animazioni allo scroll', text: 'Transizioni ed effetti guidati da AOS danno ritmo e movimento al sito.' },
    ],
    tags: ['React', 'Node.js', 'JavaScript', 'CSS', 'AOS', 'Iubenda'],
    repo: 'Vedi il repository',
    visit: 'Visita il sito',
  },

  about: {
    context: 'L’ingegnere',
    eyebrow: 'Chi sono',
    title: 'A mio agio tra più domini',
    lead: 'Bioingegneria, machine learning e software non sono, per me, mondi separati: l\'acquisizione dei dati e la ricerca si traducono in modelli AI, che a loro volta prendono vita in ecosistemi full-stack. Il filo conduttore resta uno: realizzare soluzioni che funzionino davvero, dall’inizio alla fine.',
    experienceTitle: 'Esperienza',
    experience: [
      {
        period: 'Mar 2026 - Oggi',
        role: 'Visiting Master Research Student',
        org: 'ETH Zürich',
        location: 'Zürich, CH',
        points: [
          'Tesi magistrale all’Integrated Systems Laboratory (IIS): sviluppo di modelli di deep learning per il riconoscimento del parlato silenzioso.',
        ],
      },
      {
        period: 'Ago 2025 - Nov 2025',
        role: 'Software Developer',
        org: 'Squadra Corse PoliTo',
        location: 'Torino, IT',
        points: [
          'Realizzazione di una TUI in Go per inviare, ricevere e ispezionare messaggi CAN, semplificando diagnostica e debug in pista.',
        ],
      },
      {
        period: 'Set 2022 - Ott 2023',
        role: 'Tutor accademico',
        org: 'Università di Pavia',
        location: 'Pavia, IT',
        points: [
          'Tutoraggio per il corso di Fondamenti di Informatica: programmazione in C, progettazione di algoritmi e gestione della memoria.',
        ],
      },
    ],
    educationTitle: 'Formazione',
    education: [
      {
        period: '2024 - Oggi',
        degree: 'Laurea Magistrale, Ingegneria Informatica · Software',
        school: 'Politecnico di Torino',
        detail: '',
      },
      {
        period: '2020 - 2024',
        degree: 'Laurea Triennale, Bioingegneria',
        school: 'Università di Pavia',
        detail: 'Tesi di laurea: “Analisi della letteratura riguardante l\'impatto della qualità del sonno sui pattern glicemici nei pazienti con diabete di tipo 1',
      },
      {
        period: '2015 - 2020',
        degree: 'Diploma Linguistico',
        school: 'Liceo Linguistico Alberti',
        detail: 'Inglese · Francese · Tedesco',
      },
    ],
    skillsTitle: 'Strumenti',
    skills: [
      { label: 'Linguaggi', items: ['C', 'Rust', 'Go', 'TypeScript', 'JavaScript', 'Python', 'ARM Asm', 'MATLAB'] },
      { label: 'AI / ML / DL', items: ['PyTorch', 'NumPy', 'Pandas', 'Scikit-learn'] },
      { label: 'Web & Mobile', items: ['React', 'React Native', 'Node.js', 'REST', 'WebSocket', 'TypeORM', 'CSS'] },
      { label: 'Dati & Tooling', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'Docker', 'Git', 'Agile', 'Scrum', 'GitHub', 'GitLab'] },
    ],
  },

  contact: {
    context: 'Contatti',
    eyebrow: 'Contatti',
    title: 'Costruiamo qualcosa insieme',
    lead: 'Che si tratti di una collaborazione di ricerca, di un\'opportunità lavorativa o semplicemente di un bel problema da risolvere: la mia casella di posta è sempre aperta.',
    email: 'carola.bonamico@gmail.com',
    emailCta: 'Scrivimi una mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    footerNote: 'Progettato e sviluppato in React.',
    backToTop: 'Torna su',
  },

  ui: {
    languageToggle: 'Cambia lingua',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    contextLabel: 'Contesto',
    skipToContent: 'Vai al contenuto',
    download: 'Scarica',
    closeViewer: 'Chiudi',
  },
}
