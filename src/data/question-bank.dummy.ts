import type { Question } from '~/models/question';
import { v4 as uuidv4 } from 'uuid';

const questions: Question[] = [
  {
    id: uuidv4(),
    content: 'Which is bigger?',
    dateCreated: new Date().toDateString(),
    options: [
      { id: uuidv4(), text: 'Cows', voteCount: 10 },
      { id: uuidv4(), text: 'Yak', voteCount: 0 },
      { id: uuidv4(), text: 'Boar', voteCount: 5 },
    ],
  },
  {
    id: uuidv4(),
    content: 'How would you dress on your first date?',
    dateCreated: new Date().toDateString(),
    options: [
      {
        id: uuidv4(),
        text: "Casually because you don't want to stress it",
        voteCount: 7,
      },
      {
        id: uuidv4(),
        text: 'Anything you feel comfortable with',
        voteCount: 2,
      },
      { id: uuidv4(), text: 'Coperate ofcourse!', voteCount: 12 },
      {
        id: uuidv4(),
        text: 'The first thing I see in my wardrobe',
        voteCount: 8,
      },
    ],
  },
  {
    id: uuidv4(),
    content: 'At what point should you have a gf?',
    dateCreated: new Date().toDateString(),
    options: [
      { id: uuidv4(), text: 'University', voteCount: 10 },
      { id: uuidv4(), text: 'Secondary school', voteCount: 25 },
    ],
  },
  {
    id: uuidv4(),
    content: 'Do you want to leave this country?',
    dateCreated: new Date().toDateString(),
    options: [
      {
        id: uuidv4(),
        text: 'No',
        voteCount: 2,
      },
      {
        id: uuidv4(),
        text: 'Yessss!!!!!!',
        voteCount: 100,
      },
    ],
  },
  {
    id: uuidv4(),
    content: 'Thinking of what to eat?',
    dateCreated: new Date().toDateString(),
    options: [
      {
        id: uuidv4(),
        text: 'Meat🥩',
        voteCount: 0,
      },
      {
        id: uuidv4(),
        text: 'Chicken🍗🍗',
        voteCount: 0,
      },
      {
        id: uuidv4(),
        text: 'fish🐠',
        voteCount: 0,
      },
    ],
  },
];

export default questions;
