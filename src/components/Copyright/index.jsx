import { COMPANY_NAME, DOMAIN_EXTENSION } from '../../commons/constants'
import styles from './copyright.module.scss'

function Copyright() {
    const firstCharUpper = COMPANY_NAME[0].toUpperCase() + COMPANY_NAME.substring(1);
    const domainName = firstCharUpper + DOMAIN_EXTENSION;

    return (
        <div className={styles.copyright}>
            <div>&copy; Copyright {domainName}</div>
            <div>Powered by {domainName}</div>
        </div>
    )
}

export default Copyright