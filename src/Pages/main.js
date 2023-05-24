import styles from './main.module.css';
import SideNav from '../Components/SideNav';
import SettingHeader from '../Components/SettingHeader';
import BillingHistory from '../Components/Billing_Section/BillingHistory';
import PaymentMethod from '../Components/Billing_Section/PaymentMethod';


const Main = () => {
    return ( 
    
        <div className={styles.appContainer}>

            <nav className={styles.appNav}><SideNav/></nav>
            <main className={styles.appMainContainter}>
                <div className={styles.appMain}>
                    <SettingHeader/>
                    <PaymentMethod/>
                    <BillingHistory/>
                </div>
            </main>

        </div> 
    
    );
}
 
export default Main;

