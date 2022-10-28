import { Container } from '../ui/container';
import { ThemeButton } from '../ui/theme-button';
import Tooltip from '../ui/tooltip';

export function Header() {
  return (
    <header className={'py-2'}>
      <Container className={'flex justify-between items-center'}>
        <div />

        <Tooltip title={'DarkMode'}>
          <ThemeButton />
        </Tooltip>
      </Container>
    </header>
  );
}
