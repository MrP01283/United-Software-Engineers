import type { Dict } from './ru';

const en: Dict = {
  meta: {
    title: 'United Software Engineers — IT club at Auezov University',
    description:
      'USE is the IT club of Auezov University students: real projects, hackathons and help with internships at IT companies in Kazakhstan.',
  },
  nav: {
    projects: 'Projects',
    blog: 'Blog',
    collaboration: 'Collaboration',
    join: 'How to join',
    cta: 'Join us',
    language: 'Language',
    menu: 'Menu',
    close: 'Close',
    github: 'Club GitHub',
    home: 'Home',
  },
  home: {
    tagline: 'Accomplish great deeds',
    lead: 'USE — United Software Engineers. An IT club for developers: we explore technologies, build projects together, and share our expertise.',
    btnProjects: 'View projects',
    btnJoin: 'Join the club',
    born: {
      title: 'Where the club was born',
      text: 'USE started as a small group of students who wanted to build real projects, not just pass exams. Today we learn new technologies together, help each other grow, and create software for companies and businesses.',
    },
    what: {
      title: 'What we do',
      items: [
        {
          title: 'Projects',
          text: 'Websites, apps and services the team builds for real: with tasks, code reviews and releases.',
        },
        {
          title: 'Internships',
          text: 'We help students land and prepare for internships at IT companies in Kazakhstan.',
        },
        {
          title: 'Hackathons and meetups',
          text: 'We compete in hackathons, run workshops and dig into technologies at open meetups.',
        },
      ],
    },
    uni: {
      title: 'A new beginning with new ambitions',
      subtitle: 'Muhtar Auezov University of South Kazakhstan · Since 1943',
      text: 'The launch of the USE program at Auezov University has given us the opportunity to learn, create, and grow together. This marks the beginning of a new chapter in which students take their skills to the next level.',
    },
    ways: {
      title: 'Two ways into one club',
      first: {
        title: "Experience you won't get in class",
        text: 'Build real projects in a team and compete in hackathons. Leave with a portfolio and a network of developers.',
        btn: 'Join the club',
      },
      second: {
        title: 'Young developers, before they graduate',
        text: 'USE brings together Auezov University students who already ship their own projects.',
        btn: 'Get in touch',
      },
    },
  },
  projects: {
    title: 'Projects',
    lead: 'What club members build with their own hands — from learning experiments to services for real clients.',
    all: 'All',
    status: { active: 'In progress', done: 'Shipped', idea: 'Idea' },
    repo: 'Code',
    demo: 'Open',
    note: 'These are examples for now — real projects will appear as the club grows.',
  },
  blog: {
    title: 'Blog',
    lead: 'Club news, meetup announcements and hackathon reports.',
    readMore: 'Read',
    back: 'All posts',
    empty: 'No posts yet.',
  },
  collab: {
    title: 'Collaboration',
    lead: 'For companies looking for young developers, wanting to host student interns, or launching a project together with the club.',
    offersTitle: 'What we offer',
    offers: [
      {
        title: 'Student interns',
        text: "We'll match motivated students for internships and help with the university-side paperwork.",
      },
      {
        title: 'Projects for your needs',
        text: 'A club team builds a website, bot or internal tool for your task — supervised by experienced members.',
      },
      {
        title: 'Hackathons and events',
        text: "Let's run a joint hackathon, workshop or talk — a great way to find talent.",
      },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Message us', text: 'Via the Telegram bot: a few words about your company and task.' },
      { title: 'We discuss', text: 'A quick call to agree on timing, format and expectations.' },
      { title: 'We build a team', text: 'We pick students for the task or internship.' },
      { title: 'We deliver', text: 'Regular demos keep you in the loop.' },
    ],
    ctaTitle: 'Have a task or an opening?',
    ctaText: "Message us on Telegram — we'll reply and suggest a format.",
    ctaBtn: 'Message on Telegram',
  },
  join: {
    title: 'How to join',
    lead: 'The club is open to Auezov University students. No experience required — what matters is the will to learn and build.',
    whoTitle: "Who we're looking for",
    who: [
      'Auezov University students of any year and major',
      'Those who already code and those just starting',
      'Designers, testers and future project managers',
      'Anyone ready to give the club a few hours a week',
    ],
    stepsTitle: 'Four steps',
    steps: [
      { title: 'Open the bot', text: 'Go to the club’s Telegram bot and press “Start”.' },
      { title: 'Fill in the form', text: 'Tell us about yourself, your skills and interests — it takes a couple of minutes.' },
      { title: 'Meet us', text: "We'll get in touch and invite you to a club meetup." },
      { title: 'First project', text: 'Join a team and start building.' },
    ],
    faqTitle: 'FAQ',
    faq: [
      {
        q: 'Do I need programming experience?',
        a: "No. We'll help beginners with the basics and find tasks that fit your level.",
      },
      { q: 'How much does it cost?', a: 'Membership is free.' },
      {
        q: 'How does the club help with internships?',
        a: 'We partner with IT companies in Kazakhstan: we recommend club members for internships, help prepare a CV and portfolio, and advise on the paperwork.',
      },
      { q: 'Where and when are the meetups?', a: 'The schedule is posted in the Telegram bot and on the blog.' },
      {
        q: "Can I join if I'm not an Auezov student?",
        a: 'For now the club is open only to Auezov University students.',
      },
    ],
    ctaTitle: 'Ready to start?',
    ctaText: 'It all begins with one message to the bot.',
    ctaBtn: 'Open the Telegram bot',
  },
  footer: {
    about: 'IT club at Mukhtar Auezov University. We learn, build and grow together.',
    club: 'Club',
    join: 'Join',
    howToJoin: 'How to join?',
    ourBot: 'Our bot',
    github: 'GitHub',
    location: 'Shymkent, Kazakhstan',
  },
  notFound: {
    title: 'Page not found',
    text: "Looks like this page doesn't exist or has moved.",
    btn: 'Back home',
  },
};

export default en;
