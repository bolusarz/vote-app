import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <></>;
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
