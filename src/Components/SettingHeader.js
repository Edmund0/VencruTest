import styles from './SettingHeader.module.css';
import styleStates from '../Common/state.module.css';
import '../Common/fontStandard.tw.css';
import { useState } from 'react';

const SettingHeader = () => {

    const [leftPosition, setLeftPosition] = useState(-225);

    const handleScroll = (event) => {
      const scrollLeft = event.target.scrollLeft;
      setLeftPosition(scrollLeft);
    };
  
    return ( 
    
        <div className={styles.SettingHeaderContainer}>
            <div className={styles.SettingHeader}>
                <div className={styles.pageHeader}>
                    <div className={`${styles.pageHeaderTitle} xl3MediumHeavy`}>Settings</div>
                    <div className={`${styles.pageHeaderText} mdNormalFaint`}>Manage your team and preferences here.</div>
                </div>

                <div className={`${styles.buttonTab} smNormalFaint`} onScroll={handleScroll} style={{ position:'relative', overflowX: 'scroll' }} >
                    <div className={styles.buttonGroup} style={{ left: leftPosition }}>
                        <div className={styles.buttonItemStart}>My details</div>
                        <div className={styles.buttonItem}>Profile</div>
                        <div className={styles.buttonItem}>Password</div>
                        <div className={styles.buttonItem}>Team</div>
                        <div className={styles.buttonItem}>Plan</div>
                        <div className={`${styles.buttonItem} ${styleStates.activeItem}`}>Billing</div>
                        <div className={styles.buttonItem}>Notifications</div>
                        <div className={styles.buttonItem}>Integrations</div>
                        <div className={styles.buttonItemEnd}>API</div>
                    </div>
                </div>
            </div> 
        </div> 
    
    );
}
 
export default SettingHeader;