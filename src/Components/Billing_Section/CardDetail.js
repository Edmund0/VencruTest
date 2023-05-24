import styles from './CardDetail.module.css';
import { ReactComponent as Visa    } from '../../Resources/svg/Visa.svg';
import { ReactComponent as Mastercard    } from '../../Resources/svg/Mastercard.svg';
import '../../Common/fontStandard.tw.css';

const CardDetail = ({entry, exp, isActive, logo}) => {

    /*
    const [isActive, setIsActive] = useState(active); */

    /* REVIEW */

    /*
    const toggleClass = (event) => {
  
        setIsActive(!isActive);

    };

    */
  

    return ( 
    
        <div className={`${styles.cardContainer} ${isActive ? styles.active : ''}`}>
            <div className={styles.cardInformation}>
                <div className={styles.SVG}>
                        {(logo == "Visa") ? <Visa/> : <Mastercard/>}
                </div>
                <div className={styles.cardData}>
                    <div className={styles.cardEnding}>
                        <div className={`${styles.entry} smMediumLight`}>{entry}</div>
                        <div className={`${styles.expiry} smNormalFaint`}>Expiry {exp}</div>
                    </div>                    
                    <div className={styles.cardEdit}>
                        <div className={`${styles.default} smMediumFaint`}>Set as default</div>
                        <div className={`${styles.edit} smMediumLight`}>Edit</div>
                    </div>
                </div>
            </div>
            <div className={styles.cardRadio}>
                <input type="radio" id="alt" name="drone" value="alt" checked={isActive}/>
            </div>
        </div> 
    
    );
}
 
export default CardDetail;