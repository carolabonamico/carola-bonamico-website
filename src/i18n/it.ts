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
    subtitle: 'Deep learning per il riconoscimento del parlato silenzioso da EMG',
    lead: 'Decodificare il linguaggio umano a partire dai micro-segnali elettrici dei muscoli del collo, anche nel silenzio più assoluto.',
    body: [
      'L’elettromiografia di superficie (sEMG) rileva l’attività muscolare legata all\'articolazione delle parole direttamente alla sorgente. È una tecnologia intrinsecamente immune al rumore di fondo, rispettosa della privacy e indipendente dall\'emissione vocale: le fondamenta ideali per la comunicazione assistiva e le interfacce uomo-macchina di nuova generazione.',
      'La mia tesi estende il progetto SilentWear, evolvendolo dal riconoscimento di comandi isolati all\'interpretazione di un vocabolario esteso. Il focus è interamente sull\'intelligenza artificiale: dallo sviluppo di nuove architetture di deep learning e algoritmi di decodifica, fino alla progettazione e raccolta di un dataset proprietario per addestrare e validare i modelli.',
    ],
    contributionTitle: 'Cosa sto sviluppando',
    contributions: [
      {
        title: 'Un nuovo protocollo di raccolta dati',
        text: 'Ho progettato e condotto un protocollo su 7 soggetti, con 15 parole isolate e 20 frasi complete, registrate sia in modalità vocalizzata che silenziosa. La raccolta include anche il segnale EEG acquisito tramite headband; l’elaborazione si concentra sull’EMG, portando la decodifica del parlato oltre i pochi comandi fissi.',
      },
      {
        title: 'Espandere SpeechNet',
        text: 'Ho potenziato l\'architettura CNN SpeechNet integrando l\'analisi nel dominio della frequenza (MFCC, STFT) in aggiunta a quello del tempo. Per modellare le dipendenze sequenziali e catturare la struttura di intere parole e frasi, ho inoltre confrontato le performance di modelli BiLSTM e Transformer.',
      },
      {
        title: 'Classificazione - EMG to text',
        text: 'Ho sviluppato i modelli per il task di classificazione, addestrando la rete a riconoscere e categorizzare accuratamente singole parole o comandi isolati a partire dai segnali EMG.',
      },
      {
        title: 'Continuous Recognition -  EMG to text',
        text: 'Per superare i limiti dei comandi isolati, ho realizzato il task di continuous recognition. Implementando l’addestramento con loss CTC e la decodifica beam-search, il modello predice intere sequenze di testo.',
      }
    ],
    stats: [
      { value: '7', label: 'Soggetti' },
      { value: '15', label: 'Parole' },
      { value: '20', label: 'Frasi' },
      { value: '2', label: 'Modalità · silenziosa + vocalizzata' },
    ],
    tags: ['PyTorch', 'sEMG', 'CNN', 'BiLSTM', 'CTC','Prefix beam search', 'Transformer', 'Signal processing'],
    repo: 'Vedi il repository',
    paper: 'Leggi il paper',
    anim: {
      title: 'Segnale live',
      channels: '14 canali differenziali',
      vocalized: 'Vocalizzato',
      silent: 'Silenzioso',
      decoding: 'Decodifica CTC',
      output: '“Spegni la luce”',
      caption: 'Elettrodi tessili a secco sui muscoli infraioidei e sternocleidomastoideo.',
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
