import styles from './styles.module.scss';
import logoImg from '../../assets/logo.jpg';

export function Header() {

    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src={logoImg} alt="Seu Evento" />
            <h1 className={styles.title}>Heat Comments</h1>
        </div>
    )
}