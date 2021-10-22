import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img className={styles.logoImg} src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam molestiae blanditiis adipisci provident ad corrupti nostrum ab, libero nisi esse quis consequuntur aliquam facere. Eligendi commodi ipsa aliquid dignissimos nulla!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/dwbarros.png" alt="Foto de perfil do usuário" />
                        </div>
                        <span>David Barros</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam molestiae blanditiis adipisci provident ad corrupti nostrum ab, libero nisi esse quis consequuntur aliquam facere. Eligendi commodi ipsa aliquid dignissimos nulla!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/dwbarros.png" alt="Foto de perfil do usuário" />
                        </div>
                        <span>David Barros</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam molestiae blanditiis adipisci provident ad corrupti nostrum ab, libero nisi esse quis consequuntur aliquam facere. Eligendi commodi ipsa aliquid dignissimos nulla!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/dwbarros.png" alt="Foto de perfil do usuário" />
                        </div>
                        <span>David Barros</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}