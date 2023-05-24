import styles from './BillingHistory.module.css';
import BillCard from './BillCard';
import '../../Common/fontStandard.tw.css';
import { ReactComponent as DownloadSVG     } from '../../Resources/svg/DownloadSVG.svg';

const BillingHistory = () => {
    return ( 
    
        <div className={styles.billContainer}>
            <div className={styles.billHeader}>
                <div className="lgMediumHeavy">Billing history</div>
                <div className={styles.billDownload}>
                    <div className={styles.SVG}><DownloadSVG/></div>
                    <div className="smMediumLight">Download all</div>
                </div>
            </div>

            <div className={styles.billTable}>
                <BillCard></BillCard>
            </div>
        </div> 
    
    );
}
 
export default BillingHistory;