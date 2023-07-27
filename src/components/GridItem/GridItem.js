import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

export const GridItem = ({ item }) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt={item.icon} width={35} />
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>

            {item.yourIMC &&
                <div className={styles.yourIMC}>
                    Seu IMC é de {item.yourIMC} kg/m²
                </div>
            }
            <div className={styles.gridInfo}>
                {'IMC está entre ' + item.imc[0] + ' e ' + item.imc[1]}
            </div>
        </div>
    )
}