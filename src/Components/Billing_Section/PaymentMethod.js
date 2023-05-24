import styles from'./PaymentMethod.module.css';
import CardDetail from './CardDetail';
import '../../Common/fontStandard.tw.css';
import { ReactComponent as PlusSVG     } from '../../Resources/svg/PlusSVG.svg';
import { ReactComponent as MailSVG     } from '../../Resources/svg/MailSVG.svg';
import { useState, useRef } from 'react';

const PaymentMethod = () => {

    const [isActiveState, setIsActive] = useState(true);

    const toggleClass = (event) => {
  
        setIsActive(!isActiveState);

    };


    const accountName = "Olivia Rhye";
    const accountEmail = "olivia@untitledui.com";
    return ( 
    
        <div className={styles.moduleContainer}>
            <div className={styles.paymentMethod}>
                <div className={styles.paymentText}>
                    <div className={`${styles.paymentTextTitle} lgMediumHeavy`}>Payment Method</div>
                    <div className={`${styles.paymentTextTitle} smNormalFaint`}>Update your billing details and address</div>
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.contactEmail}>
                    <div className={styles.contactEmailHeader}>
                        <div className={`${styles.contactEmailTitle} smMediumLight`}>Contact email</div>
                        <div className={`${styles.contactEmailText} smNormalFaint`}>Where should invoices be sent?</div>
                    </div>
                    <fieldset className={styles.contactEmailForm}>
                        <div className={styles.MainEmail}>
                            <div className={styles.MainEmailPadding}>
                                <input type="radio" id="main" name="drone" value="main"/>
                            </div>
                            <label for="main" className={styles.MainEmailLabel}>
                                <div className={`${styles.MainEmailTitle} smMediumLight`}>Send to my account email</div>
                                <div className={`${styles.MainEmailText} smNormalFaint`}>{accountEmail}</div>
                            </label>
                        </div>

                        <div className={styles.AltEmail}>
                            <div className={styles.AltEmailRadio}>
                                <input type="radio" id="alt" name="drone" value="alt"/>
                                <label for="alt" className={styles.AltEmailLabel}>
                                    <div className="smMediumLight">Send to an alternative email </div>
                                </label>
                            </div>

                            <div className={styles.AltEmailInput}>
                                <div className="relative">
                                    <input className={`pl-10`} type="email" placeholder="billing@untitledui.com"/>
                                    <div className={`${styles.SVG} absolute left-1 top-2 h-5 w-5 mt-2 ml-2 text-gray-400`}><MailSVG/></div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.cardDetails}>
                    <div className={styles.cardDetailsHeader}>
                        <div className={`${styles.cardDetailsTitle} smMediumLight`}>Card details</div>
                        <div className={`${styles.cardDetailsText} smNormalFaint`}>Select default payment method.</div>
                    </div>
                    <div className={styles.cardDetailsForm}>
                        <fieldset className={styles.cardGroup} onChange={toggleClass} >
                            <CardDetail key={1} entry={"Visa ending in 1234"} exp={"06/2024"} isActive={isActiveState} logo={"Visa"}></CardDetail>
                            <CardDetail key={2} entry={"Mastecard ending in 1234"} exp={"06/2024"} isActive={!isActiveState} logo={"Mastercard"}></CardDetail>
                        </fieldset>
                        <div className={`${styles.cardAction} smMediumFaint`}> 
                            <div className={styles.SVG}><PlusSVG/></div>
                            <div className={styles.cardActionText}>Add new payment method</div></div>
                    </div>
                </div>
            </div>
        </div> 
    
    );
}
 
export default PaymentMethod;