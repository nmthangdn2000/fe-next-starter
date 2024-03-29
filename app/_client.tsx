'use client';

import { HomePageClientProps } from '@app/type';
import { demoStatesSelector, setDemoFunc } from '@lib/services/demo';
import { useAppDispatch, useAppSelector } from '@lib/store';

export default function HomePageClient({}: HomePageClientProps) {
  const dispatch = useAppDispatch();
  const demo = useAppSelector(demoStatesSelector);

  const handleClick = () => {
    dispatch(setDemoFunc('Hello world!'));
  };
  return (
    <div>
      <h1>{demo}</h1>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}
