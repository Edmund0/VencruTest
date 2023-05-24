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

        const handleResize = () => {

            if (firstElementRef.current) {
                const firstElementHeight = firstElementRef.current.offsetHeight;
                const zerothElementWidth = zerothElementRef.current.offsetWidth;
                setSiblingHeight(firstElementHeight);
                if (zerothElementWidth <= 640) {/* This value should be the desktop: value (Please see tailwind.config.js) */
                    setSiblingHeight("100vh");
                } else {
                    setSiblingHeight(firstElementHeight);
                }
              }

        }

        // Ensures that the code runs at least once
        handleResize();

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup: remove the resize event listener
        return () => { window.removeEventListener('resize', handleResize); };

    }, []);

    return ( 
    
        <div className={styles.appContainer} ref={zerothElementRef}>

            <nav className={styles.appNav} ref={firstElementRef}><SideNav/></nav>
            <main className={styles.appMainContainter} style={{ position: 'relative', height: siblingHeight,  overflowY: 'scroll' }}>
                <div className={styles.appMain} style={{ position: 'absolute' }}>
                    <SettingHeader/>
                    <PaymentMethod/>
                    <BillingHistory/>
                </div>
            </main>

        </div> 
    
    );
}
 
export default Main;

