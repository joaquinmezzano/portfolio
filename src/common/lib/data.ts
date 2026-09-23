import comprariaImg from '@/../public/images/compraria.png';
import cookingwithaiImg from '@/../public/images/cooking-with-ai.png';
import f1quizandlearnImg from '@/../public/images/f1-quiz-and-learn.png';
import compiladoresImg from '@/../public/images/proyecto-compiladores.png';

export const siteMeta = {
  name: 'Joaquin Mezzano',
  role: 'Backend Developer',
  email: 'mezzanojoaquin@gmail.com',
  github: 'https://github.com/joaquinmezzano',
  linkedin: 'https://www.linkedin.com/in/joaquin-mezzano/',
  cv: '/CV_Joaquin_Mezzano.pdf',
  basedOn: 'Río Cuarto, Argentina · GMT−3',
  studying: 'B.Sc. Computer Science · UNRC',
  languages: 'Spanish (native) · English (C2) · Portuguese (basic)',
  status: 'open to junior backend roles',
};

export const links = [
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Work',
    id: 'projects',
  },
  {
    name: 'Education',
    id: 'experience',
  },
  {
    name: 'Stack',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    date: 'Now',
    title: 'B.Sc. in Computer Science',
    location: 'Universidad Nacional de Río Cuarto',
    description:
      'Working through the final stretch — theory of computation, optimization, AI, and advanced software development.',
  },
  {
    date: '2025',
    title: 'Computer Science Analyst',
    location: 'Universidad Nacional de Río Cuarto',
    description:
      'Completed degree — foundations in programming, databases, algorithms, computer architecture, and operating systems.',
  },
  {
    date: '2018',
    title: 'High School · Economics & Management',
    location: 'Colegio San Juan de la Cruz',
    description: 'High school diploma with a focus on economics.',
  },
] as const;

export const projectsData = [
  {
    title: 'Cooking With AI',
    role: 'portfolio · backend & ai',
    description:
      'A full-stack app that spots ingredients in a photo and generates recipes. Flask backend with SQLite serving an ingredient-detection and recipe pipeline — MobileNetV2 for recognition, and a local LLM (Ollama, Gemma2:2B) with retrieval-augmented generation over a recipe dataset.',
    stack: ['flask', 'react', 'sqlite', 'ollama'],
    imageUrl: cookingwithaiImg,
    link: 'https://github.com/joaquinmezzano/CookingWithAI',
  },
  {
    title: 'ComprarIA',
    role: 'portfolio · backend & optimization',
    description:
      'A shopping-list optimizer for Argentine supermarkets. It matches products with embeddings, finds cheaper alternatives with a genetic algorithm, and explains the savings with an LLM — so a smarter cart never feels like a guess.',
    stack: ['python', 'typescript', 'openai'],
    imageUrl: comprariaImg,
    link: 'https://github.com/joaquinmezzano/compraria',
  },
  {
    title: 'Compiler Project',
    role: 'coursework · compilers',
    description:
      'A small C/Pascal-style compiler. Lexical analysis written in Flex, parsing in Bison, and a grammar I designed myself — the most instructive C I wrote during the degree.',
    stack: ['c', 'flex', 'bison'],
    imageUrl: compiladoresImg,
    link: 'https://github.com/joaquinmezzano/proyecto-compiladores',
  },
  {
    title: 'F1 Quiz & Learn',
    role: 'team · coursework',
    description:
      'A trivia game for Formula 1 fans with authentication, scoring, and progress tracking — all backed by a relational database. Built with a small team as part of an analysis & design course.',
    stack: ['ruby', 'javascript', 'sqlite'],
    imageUrl: f1quizandlearnImg,
    link: 'https://github.com/joaquinmezzano/F1-AyDS-project',
  },
] as const;

export const skillsData = {
  languages: [
    'Java',
    'SQL',
    'Python',
    'JavaScript',
    'TypeScript',
    'C',
    'C++',
    'Ruby',
  ],
  frameworks: ['React', 'Next.js', 'Node.js', 'Flask', 'Sinatra'],
  data: ['PostgreSQL', 'MySQL', 'SQLite'],
  aiMl: ['RAG', 'embeddings', 'OpenAI', 'Ollama', 'MobileNetV2'],
  tools: ['Git', 'GitHub', 'Docker', 'Linux', 'Maven'],
} as const;

export const valuesData = [
  'clear code over clever code',
  'honest estimates over optimistic ones',
  'a readme over tribal knowledge',
] as const;
