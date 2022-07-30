/* eslint-disable linebreak-style */
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NextLinkButton from '../components/NextLinkButton/NextLinkButton';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <NextLinkButton />
    </>
  );
}
