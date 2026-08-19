import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div>
          © {new Date().getFullYear()} Associação Naja — Mestre Naja
        </div>
        <div style={{ marginTop: 8 }}>
          Endereço: Rua Guaicurus, 313 - Pedregulho, Guaratinguetá - SP
        </div>
        <div style={{ marginTop: 8 }}>
          Contato: (12) 9 98834 - 9404 — email@associacaonaja.org
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: 'var(--color-muted)' }}>
          Direitos e imagens pertencem à Associação Naja.
        </div>
      </div>
    </footer>
  );
}
