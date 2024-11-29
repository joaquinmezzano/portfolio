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
    title: 'Titulo',
    location: 'Lugar',
    description: `Descripcion`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Fecha comienzo - Fecha finalización',
  },
  {
    title: 'Titulo',
    location: 'Lugar',
    description: `Descripcion`,
    icon: React.createElement(BookIcon),
    date: 'Fecha comienzo - Fecha finalización',
  },
  {
    title: 'Titulo',
    location: 'Lugar',
    description: `Descripcion`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Fecha comienzo - Fecha finalización',
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
      'Descripción',
    tags: [
      'Tecnologia 1',
      'Tecnologia 2',
      'Tecnologia 3',
    ],
    imageUrl: cookingwithaiImg,
    link: 'https://github.com/erichvollenweider/CookingWithAI',
  },
  {
    title: 'F1 Quiz & Learn',
    description:
      'Descripción',
    tags: [
      'Tecnologia 1',
      'Tecnologia 2',
      'Tecnologia 3',
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
