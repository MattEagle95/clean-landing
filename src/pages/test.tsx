import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Button } from '../components/ui/button';

export default function Home() {
  console.log(twMerge(clsx('bg-dark', 'bg-white', 'bg-dark-1')));

  return (
    <div className={'flex-grow p-8 flex flex-row gap-4'}>
      <div className={'flex flex-col gap-2'}>
        <div className={'flex gap-2'}>
          <Button color={'light'} size={'sm'}>
            asdasd
          </Button>
          <Button color={'light'} size={'md'}>
            asdasd
          </Button>
          <Button color={'light'} size={'lg'}>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'light'} size={'sm'} disabled>
            asdasd
          </Button>
          <Button color={'light'} size={'md'} disabled>
            asdasd
          </Button>
          <Button color={'light'} size={'lg'} disabled>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'light'} variant={'outlined'} size={'sm'}>
            asdasd
          </Button>
          <Button color={'light'} variant={'outlined'} size={'md'}>
            asdasd
          </Button>
          <Button color={'light'} variant={'outlined'} size={'lg'}>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'light'} variant={'outlined'} size={'sm'} disabled>
            asdasd
          </Button>
          <Button color={'light'} variant={'outlined'} size={'md'} disabled>
            asdasd
          </Button>
          <Button color={'light'} variant={'outlined'} size={'lg'} disabled>
            asdasd
          </Button>
          <Button color={'light'} variant={'outlined'} size={'sm'} icon>
            asdasd
          </Button>
        </div>
      </div>

      <div className={'flex flex-col gap-2'}>
        <div className={'flex gap-2'}>
          <Button color={'dark'} size={'sm'}>
            asdasd
          </Button>
          <Button color={'dark'} size={'md'}>
            asdasd
          </Button>
          <Button color={'dark'} size={'lg'}>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'dark'} size={'sm'} disabled>
            asdasd
          </Button>
          <Button color={'dark'} size={'md'} disabled>
            asdasd
          </Button>
          <Button color={'dark'} size={'lg'} disabled>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'dark'} variant={'outlined'} size={'sm'}>
            asdasd
          </Button>
          <Button color={'dark'} variant={'outlined'} size={'md'}>
            asdasd
          </Button>
          <Button color={'dark'} variant={'outlined'} size={'lg'}>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'dark'} variant={'outlined'} size={'sm'} disabled>
            asdasd
          </Button>
          <Button color={'dark'} variant={'outlined'} size={'md'} disabled>
            asdasd
          </Button>
          <Button color={'dark'} variant={'outlined'} size={'lg'} disabled>
            asdasd
          </Button>
          <Button color={'dark'} variant={'outlined'} size={'sm'} icon>
            asdasd
          </Button>
        </div>
      </div>

      <div className={'flex flex-col gap-2'}>
        <div className={'flex gap-2'}>
          <Button color={'adaptive'} size={'sm'}>
            asdasd
          </Button>
          <Button color={'adaptive'} size={'md'}>
            asdasd
          </Button>
          <Button color={'adaptive'} size={'lg'}>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'adaptive'} size={'sm'} disabled>
            asdasd
          </Button>
          <Button color={'adaptive'} size={'md'} disabled>
            asdasd
          </Button>
          <Button color={'adaptive'} size={'lg'} disabled>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'adaptive'} variant={'outlined'} size={'sm'}>
            asdasd
          </Button>
          <Button color={'adaptive'} variant={'outlined'} size={'md'}>
            asdasd
          </Button>
          <Button color={'adaptive'} variant={'outlined'} size={'lg'}>
            asdasd
          </Button>
        </div>

        <div className={'flex gap-2'}>
          <Button color={'adaptive'} variant={'outlined'} size={'sm'} disabled>
            asdasd
          </Button>
          <Button color={'adaptive'} variant={'outlined'} size={'md'} disabled>
            asdasd
          </Button>
          <Button color={'adaptive'} variant={'outlined'} size={'lg'} disabled>
            asdasd
          </Button>
          <Button color={'adaptive'} variant={'outlined'} size={'sm'} icon>
            asdasd
          </Button>
        </div>
      </div>
    </div>
  );
}
