import styles from './SideNav.module.css';
import styleStates from '../Common/state.module.css';
import { ReactComponent as HomeSVG      } from '../Resources/svg/navigationSVG/HomeSVG.svg';
import { ReactComponent as DashboardSVG } from '../Resources/svg/navigationSVG/DashboardSVG.svg';
import { ReactComponent as ProjectsSVG  } from '../Resources/svg/navigationSVG/ProjectsSVG.svg';
import { ReactComponent as TasksSVG     } from '../Resources/svg/navigationSVG/TasksSVG.svg';
import { ReactComponent as ReportingSVG } from '../Resources/svg/navigationSVG/ReportingSVG.svg';
import { ReactComponent as UsersSVS     } from '../Resources/svg/navigationSVG/UsersSVS.svg';
import { ReactComponent as SupportSVG   } from '../Resources/svg/navigationSVG/SupportSVG.svg';
import { ReactComponent as SettingsSVG     } from '../Resources/svg/navigationSVG/SettingsSVG.svg'
import { ReactComponent as AccountSVG     } from '../Resources/svg/navigationSVG/AccountSVG.svg';
import { ReactComponent as MenuSVG     } from '../Resources/svg/navigationSVG/MenuSVG.svg';
import { ReactComponent as SearchSVG     } from '../Resources/svg/navigationSVG/SearchSVG.svg';
import PHOTOJPG from '../Resources/img/Photo.jpg';
import Box from '../Resources/img/box-24.png';
import '../Common/fontStandard.tw.css';

import { useState } from 'react';



const SideNav = () => {

    const accountName = "Olivia Rhye";
    const accountEmail = "olivia@untitledui.com";

    const [isHidden, setIsHidden] = useState(false);

    const toggleClass = () => {

        setIsHidden(!isHidden);

    };
    
    return ( 
    
        <div className={`${styles.sideNavContainer}`}>

            <div className={styles.sideNav}>

                <div className={styles.mainSideNav}>

                    <div className={styles.nav}>
                        <div className={styles.header}>
                            <div className={styles.logo}>
                                <div className={styles.logoBox}>
                                    <div className={styles.logoIcon}>
                                        <img src={Box} alt="purplebox" />
                                        <div className="xl2MediumHeavy">Untitled UI</div>
                                    </div>
                                    <div className={styles.logoButton} onClick={toggleClass}><MenuSVG/></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`${styles.search} ${isHidden ? styles.mobileHidden : ""}`}> {/* Internal HTML Framework Incomplete */}
                            <div className={styles.searchBox}>
                                <div className="relative">
                                <input  className={`pl-10 w-full`} type="text" placeholder="Search" id="myInput"></input>
                                <div className={`${styles.SVG} absolute left-1 top-1 h-5 w-5 mt-2 ml-2 text-gray-400`}><SearchSVG/></div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.navigation} ${isHidden ? styles.mobileHidden : ""}`}> {/*You need to create a conditional for the action box (i.e. hidden or not) || Add hidden as default */}
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}> 
                                    <div className={styles.SVG}><HomeSVG/></div><div>Home</div>             
                                </div>
                            </div></div>
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}>
                                    <div className={styles.SVG}><DashboardSVG/></div><div>Dashboard</div>   
                                </div>
                                <div className={styles.navAction}></div>
                            </div></div>
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}>
                                    <div className={styles.SVG}><ProjectsSVG/></div><div>Projects</div>     
                                </div>
                                <div className={styles.navAction}></div>
                            </div></div>
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}>
                                    <div className={styles.SVG}><TasksSVG/></div><div>Tasks</div>           
                                </div>
                                <div className={styles.navAction}></div>
                            </div></div>
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}>
                                    <div className={styles.SVG}><ReportingSVG/></div><div>Reporting</div>   
                                </div>
                                <div className={styles.navAction}></div>
                            </div></div>
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}>
                                    <div className={styles.SVG}><UsersSVS/></div><div>Users</div>           
                                </div>
                                <div className={styles.navAction}></div>
                            </div></div>
                        </div>
                    </div>
                    

                    <div className={`${styles.footer} ${isHidden ? styles.mobileHidden : ""}`}>
                        <div className={styles.footerNavigation}>
                            <div className={styles.navCard}><div className={styles.navItem}>
                                <div className={styles.navObject}> 
                                    <div className={styles.SVG}><SupportSVG/></div><div>Support</div>             
                                </div>
                            </div></div>
                            <div className={`${styles.navCard} ${styleStates.activeItem}`}><div className={styles.navItem}>
                                <div className={styles.navObject}> 
                                    <div className={styles.SVG}><SettingsSVG/></div><div>Settings</div>             
                                </div>
                            </div></div>
                        </div>

                        <div className={styles.footerMain}>
                            <div className={styles.feature}>
                                <div className={styles.featureContent}>
                                    <div>New features available!</div>
                                    <div>Check out the new dashboard view. Pages now load faster. </div>
                                </div>
                                <div className={styles.featureImage}><img src={PHOTOJPG} alt=""/></div>
                                <div className={styles.featureAction}>
                                    <div>Dismiss</div>
                                    <div><a>What's new?</a></div>
                                </div>
                            </div>

                            <div className={styles.footerDivider}> </div>

                            <div className={styles.accountContainer}>
                                <div className={styles.account}>
                                    <div className={styles.accountCard}>
                                        <div className={styles.accountImage}><img src={PHOTOJPG} alt=""/></div>
                                        <div className={styles.accountData}>
                                            <div className={styles.accountName}>{accountName}</div>
                                            <div className={styles.accountEmail}>{accountEmail}</div>
                                        </div>
                                    </div>
                                    <div className={styles.AccountSVG}><AccountSVG/></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={styles.divider}> </div>

            </div> 

        </div>
    
    );
}
 
export default SideNav;