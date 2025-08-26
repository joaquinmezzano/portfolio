import React from 'react';

import cookingwithaiImg from '@/../public/images/cooking-with-ai.png';
import f1quizandlearnImg from '@/../public/images/f1-quiz-and-learn.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'High School Diploma in Economics and Management',
    location: 'Colegio San Juan de la Cruz',
    description: `High school diploma with a focus on economics.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2012-2018',
  },
  {
    title: 'Computer Science Analyst',
    location: 'Universidad Nacional de Rio Cuarto (UNRC)',
    description: `Developed strong foundations in programming, databases, algorithms, computer architecture, and operating systems`,
    icon: React.createElement(BookIcon),
    date: '2021-2025',
  },
  {
    title: 'Bachelor’s Degree in Computer Science',
    location: 'Universidad Nacional de Rio Cuarto (UNRC)',
    description: `Currently focusing on computation theory, optimization, artificial intelligence, and advanced software development.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: '2021-PRESENT',
  },
] as const;

export const images = {
  cookingwithaiImg,
  f1quizandlearnImg,
};

export const projectsData = [
  {
    title: 'Cooking With AI',
    description:
      'Cooking With AI uses artificial intelligence to analyze images of food ingredients, identify them, and generate recipes based on them. It makes meal planning easier and helps reduce food waste!',
    tags: [
      'Ollama',
      'Python',
      'Flask',
      'React',
    ],
    imageUrl: cookingwithaiImg,
    link: 'https://github.com/erichvollenweider/CookingWithAI',
  },
  {
    title: 'F1 Quiz & Learn',
    description:
      'Web trivia application designed for Formula 1 fans and enthusiasts. This question-and-answer game tests your knowledge of F1 history, drivers, teams, circuits, and key events.',
    tags: [
      'SQL',
      'Ruby',
      'JavaScript',
    ],
    imageUrl: f1quizandlearnImg,
    link: 'https://github.com/brunocontii/F1-AyDS-project',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['C', '/svgs/c.svg'],
  ['Python', '/svgs/python.svg'],
  ['Java', '/svgs/java-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Ruby', '/svgs/ruby-lang-icon.svg'],
  ['Haskell', '/svgs/haskell-icon.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Ollama', '/svgs/ollama.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
