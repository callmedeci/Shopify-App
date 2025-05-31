import AppNav from './AppNav';
import Logo from './Logo';

function Header() {
  return (
    <header className='bg-zinc-700/20 h-24 w-full flex items-center px-2 md:px-5 border-b border-zinc-600/50'>
      <Logo />

      <AppNav />
    </header>
  );
}

export default Header;
