import type { Answer } from './answer';

export type Question = {
  id: string;
  content: string;
  options: Answer[];
  dateCreated: string;
};
