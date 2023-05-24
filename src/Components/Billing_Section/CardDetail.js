import styles from './CardDetail.module.css';
import { ReactComponent as Visa    } from '../../Resources/svg/Visa.svg';
import { ReactComponent as Mastercard    } from '../../Resources/svg/Mastercard.svg';

const CardDetail = ({entry, exp, active, logo}) => {

    return ( 
    
        <div className={styles.cardContainer}>
            <div className={styles.cardInformation}>
                <div className={styles.SVG}>
                        {(logo == "Visa") ? <Visa/> : <Mastercard/>}
                </div>
                <div className={styles.cardData}>
                    <div className={styles.cardEnding}>
                        <div>{entry}</div>
                        <div>Expiry {exp}</div>
                    </div>                    
                    <div className={styles.cardEdit}>
                        <div>Set as default</div>
                        <div>Edit</div>
                    </div>
                </div>
            </div>
            <div className={styles.cardRadio}>
                {
                (active)
                ?
                <input type="radio" id="alt" name="drone" value="alt" checked/>
                :
                <input type="radio" id="alt" name="drone" value="alt"/>
                }
            </div>
        </div> 
    
    );
}
 
export default CardDetail;