import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import styles from './home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Associação Naja — Home</title>
        <meta name="description" content="Associação Naja — Taekwondo, Hapkido e MMA. Treinos, eventos e inscrições." />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroText}>
            <h1 id="hero-title" className={styles.title}>
              Associação Naja — Unidade Pedregulho Guaratinguetá
            </h1>
            <p className={styles.subtitle}>
              Treinos de Taekwondo, Hapkido e MMA Vale-Tudo. A formação integral que alia técnica e respeito.
            </p>

            <div className={styles.actions}>
              <a className={styles.primary} href="/treinos">Conheça nossos treinos</a>
              <a className={styles.secondary} href="/associar">Torne-se Membro</a>
            </div>

            <div style={{ marginTop: 18 }}>
              <h4 style={{ color: 'var(--color-primary)', margin: 0, fontWeight: 700 }}>Próxima Avaliação de Faixas</h4>
              <p style={{ color: 'var(--color-muted)', margin: '6px 0 0 0' }}>
                Exame de faixa: 12/out/2025 — Inscrições até 30/set/2025
              </p>
            </div>
          </div>

          <aside className={styles.card} aria-label="Próximos eventos">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
              <Image src="/images/naja_logo.jpeg" alt="Logo Associação Naja" width={220} height={160} />
            </div>
            <h3 className={styles.cardTitle}>Eventos e Avisos</h3>
            <ul className={styles.eventList}>
              <li>Assembleia Geral — 12/out/2025</li>
              <li>Palestra: Arte e Disciplina — 25/out/2025</li>
              <li>Campeonato Regional — 10/nov/2025</li>
            </ul>
          </aside>
        </section>

        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Nossas modalidades</h2>
          <div className={styles.grid}>
            <div className={styles.feature}>
              <strong>Taekwondo</strong>
              <p className={styles.featureDesc}>Técnicas de chute, disciplina e formação de faixa.</p>
            </div>
            <div className={styles.feature}>
              <strong>Hapkido</strong>
              <p className={styles.featureDesc}>Autodefesa, articulações e controle corporal.</p>
            </div>
            <div className={styles.feature}>
              <strong>MMA Vale-Tudo</strong>
              <p className={styles.featureDesc}>Treinos integrados para competição e preparo físico.</p>
            </div>
            <div className={styles.feature}>
              <strong>Formação de Instrutores</strong>
              <p className={styles.featureDesc}>Cursos e certificações internas para formação técnica.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
