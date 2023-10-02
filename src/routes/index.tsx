import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import questionBank from '~/data/question-bank.dummy';
import type { Question } from '~/models/question';
import _ from 'lodash';

export const useQuestionListLoader = routeLoader$(() => {
  return questionBank;
});

export default component$(() => {
  const questions = useQuestionListLoader();

  const getHighestRankingAnswer = (question: Question) => {
    return question.options.reduce((prev, curr) => {
      if (curr.voteCount > prev.voteCount) {
        return curr;
      } else {
        return prev;
      }
    }, question.options[0]);
  };
  return (
    <main>
      {questions.value.length === 0 ? (
        <p>No questions added yet</p>
      ) : (
        <ul class="flex flex-col gap-4">
          {_.sortBy(questions.value, 'dateCreated', 'desc').map((question) => (
            <li
              class="border rounded-md px-3 py-4 flex justify-between cursor-pointer"
              key={question.id}
            >
              <div class="flex flex-col gap-3">
                <span class="font-medium">{question.content}</span>
                <span class="text-sm text-gray-500 flex gap-1 items-center">
                  {getHighestRankingAnswer(question).text}
                </span>
              </div>
              <span class="text-xs text-black/40 font-light">
                {question.dateCreated}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Village Square',
  meta: [
    {
      name: 'description',
      content:
        'Village square is a community where you can hear the mind of the people',
    },
  ],
};
