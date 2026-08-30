import type { Translations } from './types'

/* ============================================================================
   ENGLISH content.
   This is one of the two translation config files. Edit copy here; the Italian
   counterpart lives in `it.ts`. Both must implement the `Translations` shape.
   ========================================================================== */

export const en: Translations = {
  langShort: 'EN',
  langName: 'English',

  nav: {
    home: 'Home',
    thesis: 'Thesis',
    participium: 'Participium',
    autostar: 'Autostar',
    about: 'About',
    contact: 'Contact',
    resume: 'Résumé',
  },

  hero: {
    available: 'Master’s Researcher · ETH Zürich',
    greeting: 'Hi, I’m',
    name: 'Carola Bonamico',
    roles: ['Software Engineer', 'AI Engineer', 'Bioengineer'],
    tagline:
      'I specialize in AI for silent speech recognition, handling not just the models, but also data collection and the entire full-stack software ecosystem that powers them. Whether it\'s neural interfaces, software development, or web apps, my true strength lies in my ability to adapt and build connections across completely different fields.',
    location: 'Zürich, CH · Torino, IT',
    ctaPrimary: 'Explore the thesis',
    ctaSecondary: 'Get in touch',
    scrollHint: 'Scroll to explore',
  },

  thesis: {
    context: 'Neural Interfaces',
    eyebrow: 'Master’s Thesis',
    institution: 'ETH Zürich · Integrated Systems Laboratory',
    title: 'SilentWear',
    subtitle: 'Deep learning for silent-speech recognition from surface EMG',
    lead: 'Decoding human speech from the electrical micro-signals of the neck muscles, even in absolute silence.',
    body: [
      'Surface electromyography (sEMG) captures the muscle activity of speech articulation directly at the source. It works without any vocal emission, it is immune to acoustic noise and it never exposes what is being said: the ideal foundation for assistive communication and next-generation human-machine interfaces.',
      'My thesis extends the SilentWear project from a handful of isolated commands to an extended vocabulary of 15 words and 20 sentences. I ran the whole chain end to end: the data collection, the DL architectures and the two decoding paths that turn EMG into text.',
      'The dataset behind it is multimodal and multi-session. A fully dry sEMG neckband, a dry EEG headband and audio are recorded together, over six sessions per participant on six different days, and both bands are taken off and repositioned at every session. Models are validated on a session they have never seen, under the electrode shift a wearable really meets in daily use, instead of on a single sitting.',
    ],
    contributionTitle: 'What I built',
    contributions: [
      {
        title: 'A multimodal, multi-session dataset',
        text: 'I designed and ran the acquisition protocol: 7 participants, 6 sessions each, 42 sessions and about 40 hours of recording. Every session covers 15 isolated words and 20 sentences in both a vocalized and a silent condition, with sEMG, EEG and audio acquired together and the two bands repositioned each time.',
      },
      {
        title: 'Expanding SpeechNet',
        text: 'I fed the SpeechNet CNN with frequency-domain representations (STFT, mel cepstrum) in place of the raw time signal, and reworked its pooling so the frequency axis survives the backbone. On top of it I compared a BiLSTM and a Transformer encoder as the sequence stage.',
      },
      {
        title: 'Closed-set classification',
        text: 'The first task assigns each window one of 21 labels, the 20 sentences plus rest. It is the setting of the original SilentWear system, carried from short commands up to whole sentences.',
      },
      {
        title: 'Continuous recognition',
        text: 'The second task drops the fixed label set. Trained with the CTC loss and decoded greedily or with prefix beam search, the model emits a character sequence and writes the sentence out one letter at a time.',
      },
    ],
    stats: [
      { value: '7', label: 'Participants' },
      { value: '42', label: 'Sessions · repositioned' },
      { value: '40', unit: 'h', label: 'Of recording' },
      { value: '3', label: 'Signals · EMG, EEG, audio' },
    ],
    resultsTitle: 'Results',
    resultsLead: 'Subject-specific models, one per participant and speaking condition, validated with leave-one-session-out cross-validation over the six sessions.',
    results: [
      {
        title: 'Closed-set classification',
        metrics: [
          { value: '85.8 ± 5.2', unit: '%', label: 'Vocalized accuracy' },
          { value: '82.1 ± 10.5', unit: '%', label: 'Silent accuracy' },
        ],
        note: 'Accuracy over the 20 sentences and rest.',
      },
      {
        title: 'Continuous recognition',
        metrics: [
          { value: '16.3 ± 5.0', unit: '%', label: 'Vocalized WER' },
          { value: '22.4 ± 14.1', unit: '%', label: 'Silent WER' },
        ],
        note: 'Each decoded word is snapped to the closest of the 37 words of the sentences corpus.',
      },
    ],
    tags: ['PyTorch', 'sEMG', 'EEG', 'STFT', 'CNN', 'BiLSTM', 'Transformer', 'CTC', 'Prefix beam search', 'Signal processing'],
    repo: 'View repository',
    paper: 'Read the paper',
    anim: {
      title: 'Live signal',
      channels: '14 differential channels',
      vocalized: 'Vocalized',
      silent: 'Silent',
      decoding: 'CTC decoding',
      output: '“Turn on the light”',
      caption: 'Two fully dry textile bands: 15 EMG electrodes over the infrahyoid and sternocleidomastoid muscles, 16 EEG electrodes on the headband, and a microphone on each unit.',
      modalities: 'sEMG · EEG · audio · 6 sessions, repositioned',
      emgLabel: 'EMG',
      eegLabel: 'EEG',
    },
  },

  participium: {
    context: 'Civic Tech',
    eyebrow: 'Politecnico di Torino · Software Engineering',
    role: 'Full-stack · team project',
    title: 'Participium',
    subtitle: 'A civic-reporting platform that connects citizens and city hall',
    lead: 'Spot a broken streetlight or a pothole, snap a photo, drop a pin, and follow your report all the way to resolution.',
    body: [
      'Participium is a full-stack civic-engagement platform that turns scattered citizen complaints into a structured, trackable workflow between citizens, municipal operators and administrators.',
      'Built in TypeScript and JavaScript on Node.js, it pairs geolocated, photo-backed reports with role-based workflows, real-time Telegram notifications, and SonarQube quality gates wired into CI.',
    ],
    features: [
      { title: 'Geolocated reports', text: 'Pin issues on a map with photos and categories for precise, actionable reports.' },
      { title: 'Role-based workflows', text: 'Distinct, permissioned flows for citizens, municipal operators and administrators.' },
      { title: 'Telegram notifications', text: 'Status changes are pushed to users in real time, so nothing gets lost.' },
      { title: 'Quality-gated CI', text: 'SonarQube static analysis enforces continuous code quality on every change.' },
    ],
    tags: ['TypeScript', 'Node.js', 'React', 'Geolocation', 'Telegram API', 'SonarQube'],
    videoTitle: 'Project walkthrough',
    videoCaption: 'A short demo of the reporting flow and the operator dashboard.',
    watchVideo: 'Watch on YouTube',
    repo: 'View repository',
  },

  autostar: {
    context: 'Motorsport',
    eyebrow: 'Client project',
    role: 'Front-end · React',
    title: 'Autostar Motorsport',
    subtitle: 'A responsive showcase for a motorsport company',
    lead: 'A static front-end built to make a racing brand feel exactly that: fast.',
    body: [
      'A responsive marketing and showcase site for a motorsport company, built as a client-side React application with a clean, modular component architecture.',
      'It pairs CSS-styled, reusable components with scroll-driven AOS animations and GDPR-compliant consent management via Iubenda: production details a real client needs, not just a demo.',
    ],
    features: [
      { title: 'Client-side architecture', text: 'An entirely client-side React front-end, with no server dependency.' },
      { title: 'Modular components', text: 'Reusable, CSS-styled React building blocks for a maintainable codebase.' },
      { title: 'GDPR compliant', text: 'Cookie and consent management handled through Iubenda.' },
      { title: 'Scroll animations', text: 'AOS-driven effects and transitions give the site motion and rhythm.' },
    ],
    tags: ['React', 'Node.js', 'JavaScript', 'CSS', 'AOS', 'Iubenda'],
    repo: 'View repository',
    visit: 'Visit the site',
  },

  about: {
    context: 'The Engineer',
    eyebrow: 'About',
    title: 'At home across domains',
    lead: 'To me, bioengineering, machine learning, and software are not separate worlds: data collection and research translate into AI models, which in turn come to life within full-stack ecosystems. The common thread remains the same: building solutions that truly work, from start to finish.',
    experienceTitle: 'Experience',
    experience: [
      {
        period: 'Mar 2026 - Present',
        role: 'Visiting Master Research Student',
        org: 'ETH Zürich',
        location: 'Zürich, CH',
        points: [
          'Master’s thesis at the Integrated Systems Laboratory (IIS), developing deep-learning models for silent-speech recognition.',
        ],
      },
      {
        period: 'Aug 2025 - Nov 2025',
        role: 'Software Developer',
        org: 'Squadra Corse PoliTo',
        location: 'Torino, IT',
        points: [
          'Built a Go TUI to send, receive and inspect CAN messages, streamlining on-track diagnostics and debugging.',
        ],
      },
      {
        period: 'Sep 2022 - Oct 2023',
        role: 'Academic Tutor',
        org: 'Università di Pavia',
        location: 'Pavia, IT',
        points: [
          'Tutored Fundamentals of Computer Science course: C programming, algorithm design and memory management.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        period: '2024 - Present',
        degree: 'MS, Computer Engineering · Software',
        school: 'Politecnico di Torino',
        detail: '',
      },
{
        period: '2020 - 2024',
        degree: "Bachelor's Degree, Bioengineering",
        school: 'University of Pavia',
        detail: 'Thesis: "Literature review on the impact of sleep quality on glycemic patterns in type 1 diabetes patients"',
      },
      {
        period: '2015 - 2020',
        degree: 'Linguistic Diploma',
        school: 'Liceo Linguistico Alberti',
        detail: 'English · French · German',
      },
    ],
    skillsTitle: 'Toolbox',
    skills: [
      { label: 'Languages', items: ['C', 'Rust', 'Go', 'TypeScript', 'JavaScript', 'Python', 'ARM Asm', 'MATLAB'] },
      { label: 'AI / ML / DL', items: ['PyTorch', 'NumPy', 'Pandas'] },
      { label: 'Web & Mobile', items: ['React', 'React Native', 'Node.js', 'REST', 'WebSocket', 'TypeORM', 'CSS'] },
      { label: 'Data & Tooling', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'Docker', 'Git', 'Agile', 'Scrum', 'GitHub', 'GitLab'] },
    ],
  },

  contact: {
    context: 'Connect',
    eyebrow: 'Contact',
    title: 'Let\'s build something together',
    lead: 'Whether it\'s a research collaboration, a job opportunity, or simply a great problem to solve: my inbox is always open',
    email: 'carola.bonamico@gmail.com',
    emailCta: 'Email me',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    footerNote: 'Designed & built with React. No backend: just static, fast, and yours to fork.',
    backToTop: 'Back to top',
  },

  ui: {
    languageToggle: 'Switch language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    contextLabel: 'Context',
    skipToContent: 'Skip to content',
    download: 'Download',
    closeViewer: 'Close',
  },
}
