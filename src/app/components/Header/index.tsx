import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <Link href="/" className={styles.brand}>
          <Image
              src="/images/naja_logo.jpeg"
              alt="Associação Naja"
              width={75}
              height={48}
              priority
            />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={styles.link} href="/sobre">Sobre</Link>
          <Link className={styles.link} href="/eventos">Treinos</Link>
          <Link className={styles.link} href="/eventos">Eventos</Link>
        </nav>
      </div>
    </header>
  );
}
