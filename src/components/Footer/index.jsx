import { useState } from 'react'

import styles from './footer.module.scss'
import BehanceIcon from '../../assets/icons/Behance.svg'
import FacebookIcon from '../../assets/icons/Facebook.svg'
import InstagramIcon from '../../assets/icons/Instagram.svg'
import LinkedinIcon from '../../assets/icons/Linkedin.svg'
import TwitterIcon from '../../assets/icons/Twitter.svg'
import { COMPANY_NAME, DOMAIN_EXTENSION, EMAIL, ADDRESS, PHONE } from '../../commons/constants'
import ConsultModal from '../ConsultModal'

const mediaDatas = [
    {
        img: FacebookIcon,
        link: 'https://www.facebook.com/TechismITSolution',
        alt: 'Facebook'
    },
    {
        img: TwitterIcon,
        link: 'https://www.google.com/',
        alt: 'Twitter'
    },
    {
        img: LinkedinIcon,
        link: 'https://www.google.com/',
        alt: 'Linkedin'
    },
    {
        img: InstagramIcon,
        link: 'https://www.google.com/',
        alt: 'Instagram'
    },
    {
        img: BehanceIcon,
        link: 'https://www.google.com/',
        alt: 'Behance'
    }
]

function Footer() {
    const firstCharUpper = COMPANY_NAME[0].toUpperCase() + COMPANY_NAME.substring(1);
    const domainName = firstCharUpper + DOMAIN_EXTENSION;

    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.footer}>
            <div className={styles.footerContact}>
                <div className={styles.title}>{COMPANY_NAME.toUpperCase()}</div>
                <div>
                    We are always seeking people who share our values and take pride in their craft.
                    We strive to inspire you to be the best you can be, as well as give you the benefits,
                    job security, and growth opportunities you need.
                </div>
                <div>
                    <strong>Địa chỉ văn phòng: </strong>
                    {ADDRESS}
                </div>
                <div>
                    <strong>Điện thoại: </strong>
                    {PHONE}
                </div>
                <div>
                    <strong>Mail: </strong>
                    {EMAIL}
                </div>
            </div>
            <div className={styles.footerMenu}>
                <div className={styles.title}>Danh mục</div>
                <div>Trang chủ</div>
                <div>Giới thiệu</div>
                <div>Dịch vụ</div>
                <div>Mẫu giao diện</div>
                <div>Tin tức</div>
                <div>Liên hệ</div>
            </div>
            <div className={styles.footerMedia}>
                <div className={styles.title}>Liên kết khác</div>
                <div>
                    <iframe title='Techism' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTechismITSolution&tabs=timeline&width=310&height=189&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=503877057686050" width="310" height="189" style={{ 'border': 'none', 'overflow': 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className={styles.mediaIcon}>
                    {mediaDatas.map((mediaData, index) => (
                        <a key={index} href={mediaData.link} target='_blank' rel='noreferrer'>
                            <img src={mediaData.img} alt={mediaData.alt} />
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.footerReceiveAdvise}>
                <div>
                    Hãy để <strong>{firstCharUpper}</strong> nâng tầm doanh nghiệp của bạn
                </div>
                <button
                    className={styles.btnReceiveAdvise}
                    type='button'
                    onClick={() => setVisible(true)}
                >
                    NHẬN TƯ VẤN NGAY
                </button>
                {visible && <ConsultModal toggleVisible={[visible, setVisible]} />}
            </div>
        </div>
            
    )
}

export default Footer

/* <div className='footer_bottom footer_width'>
                <div className='copyright'>Copyright {domainName}</div>
                <div className='powerby'>Powered by {domainName}</div>
            </div> */