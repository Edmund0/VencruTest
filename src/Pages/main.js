import styles from './main.module.css';
import SideNav from '../Components/SideNav';
import SettingHeader from '../Components/SettingHeader';
import BillingHistory from '../Components/Billing_Section/BillingHistory';
import PaymentMethod from '../Components/Billing_Section/PaymentMethod';
import { useState, useRef, useEffect } from 'react';

const Main = () => {

    /* The code below obtains the height of the sideNav and sets the height of the appContainer to that height (only Desktop)*/
    /* The code below obtains the height of the screen and sets the height of the appContainer to that height (only Mobile)*/
    const firstElementRef = useRef(null);
    const zerothElementRef = useRef(null);
    const [siblingHeight, setSiblingHeight] = useState(0);
    useEffect(() => {
      if (firstElementRef.current) {
        const firstElementHeight = firstElementRef.current.offsetHeight;
        const zerothElementWidth = zerothElementRef.current.offsetWidth;
        setSiblingHeight(firstElementHeight);
        if (zerothElementWidth <= 640) {
            setSiblingHeight("100vh");
        } else {
            setSiblingHeight(firstElementHeight);
        }
      }
    }, []);

    return ( 
    
        <div className={styles.appContainer} ref={zerothElementRef}>

            <nav className={styles.appNav} ref={firstElementRef}><SideNav/></nav>
            <main className={styles.appMainContainter} style={{ position: 'relative', height: siblingHeight,  overflowY: 'scroll' }}>
                <div className={styles.appMain} style={{ position: 'absolute', top: '24px' }}>
                    <SettingHeader/>
                    <PaymentMethod/>
                    <BillingHistory/>
                </div>
            </main>

        </div> 
    
    );
}
 
export default Main;

