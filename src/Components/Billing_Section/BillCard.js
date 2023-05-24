import styles from './BillCard.module.css';
import '../../Common/fontStandard.tw.css';
import { ReactComponent as DownloadSVG     } from '../../Resources/svg/DownloadSVG.svg';
import { ReactComponent as DownArrowSVG     } from '../../Resources/svg/DownArrowSVG.svg';
import { ReactComponent as PaidSVG     } from '../../Resources/svg/PaidSVG.svg';
import { ReactComponent as UnpaidSVG     } from '../../Resources/svg/UnpaidSVG.svg';
import { useState } from 'react';
import USERJPG from '../../Resources/img/User.jpg';

  const Paid = () => {

    return ( 
    
      <div className={styles.CheckStatus}>
        <div className={styles.InvoiceSVG}>
          <PaidSVG/>
        </div>Paid
      </div>
    
    );
  }

  const Unpaid = () => {

    return ( 
    
      <div className={`${styles.CheckStatus}`}>
        <div className={styles.InvoiceSVG}>
          <UnpaidSVG/>
        </div>Unpaid
      </div>
    
    );
  }

const Table = ({ data }) => {

    const [allCheck, setAllCheck] = useState(false);

    const toggleClass = () => {

        setAllCheck(!allCheck);

    };

    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.invoice} xsMediumFaint`}><div><input type="checkbox" onChange={toggleClass}/><div className={styles.InvoiceTitle}>Invoice<div className={styles.InvoiceSVG}><DownArrowSVG/></div></div></div></th>
            <th className={`${styles.amount} xsMediumFaint`}>Amount</th>
            <th className={`${styles.date} xsMediumFaint`}>Date</th>
            <th className={`${styles.status} xsMediumFaint`}>Status</th>
            <th className={`${styles.users} xsMediumFaint`}>Users on plan</th>
            <th className={`${styles.download} xsMediumFaint`}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className={`${styles.invoice} smMediumHeavy`}><div><input type="checkbox"/>Basic Plan - {item.date.m} {item.date.y}</div></td>
              <td className={`${styles.amount} smNormalFaint`}><div>USD ${item.amount}</div></td>
              <td className={`${styles.date} smNormalFaint`}><div>{item.date.m} {item.date.d}, {item.date.y}</div></td>
              <td className={`${styles.status}`}>
                <div className={`${styles.statusCheck}`}>
                   {item.active ? <Paid/> : <Unpaid/>}
                </div>
              </td>
              <td className={`${styles.users}`}>
                <div className={styles.userImage}><img src={USERJPG} alt=""/></div>
                </td>
              <td className={`${styles.download}`}><div><div className={styles.SVG}><DownloadSVG/></div></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

const BillCard = () => {
    const tableData = [
        { id: 1, date: {m: "Dec", d: "1", y: "2022",}, amount: '10.00', active:true },
        { id: 2, date: {m: "Nov", d: "1", y: "2022",}, amount: '10.00', active:true },
        { id: 3, date: {m: "Oct", d: "1", y: "2022",}, amount: '10.00', active:true },
        { id: 4, date: {m: "Sep", d: "1", y: "2022",}, amount: '10.00', active:true },
        { id: 5, date: {m: "Aug", d: "1", y: "2022",}, amount: '10.00', active:true },
        { id: 6, date: {m: "Jul", d: "1", y: "2022",}, amount: '10.00', active:true },
        { id: 7, date: {m: "Jun", d: "1", y: "2022",}, amount: '10.00', active:true },
    ];
    return ( 
    
        <Table data={tableData} />
    
    );
}
  
export default BillCard;