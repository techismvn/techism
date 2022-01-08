import { Button } from 'antd';
import './index.css'
import BehanceIcon from '../../assets/icons/Behance.svg'
import FacebookIcon from '../../assets/icons/Facebook.svg'
import InstagramIcon from '../../assets/icons/Instagram.svg'
import LinkedinIcon from '../../assets/icons/Linkedin.svg'
import TwitterIcon from '../../assets/icons/Twitter.svg'
import { COMPANY_NAME, DOMAIN_EXTENSION, EMAIL } from '../../commons/constants'

function Footer() {
    const firstCharUpper = COMPANY_NAME[0].toUpperCase() + COMPANY_NAME.substring(1);
    console.log(firstCharUpper);
    const domainName = firstCharUpper + DOMAIN_EXTENSION;
    return (
        <div className='footer'>
            <div className='footer_top footer_width' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='footer_contact'>
                    <div className='title'>{COMPANY_NAME.toUpperCase()}</div>
                    <div className='summary'>
                        We are always seeking people who share our values and take pride in their craft.
                        We strive to inspire you to be the best you can be, as well as give you the benefits,
                        job security, and growth opportunities you need.
                    </div>
                    <div className='Address'>
                        <strong>Địa chỉ văn phòng: </strong>
                        113/2 Hoàng Văn Thái, P.Hòa Khánh Nam, Q.Liên Chiểu, Tp.Đà Nẵng
                    </div>
                    <div className='phone'>
                        <strong>Điện thoại: </strong>
                        076 541 1541
                    </div>
                    <div className='email'>
                        <strong>Mail: </strong>
                        {EMAIL}
                    </div>
                </div>
                <div className='footer_menu'>
                    <div className='title'>Danh mục</div>
                    <div className='main_menu'>Trang chủ</div>
                    <div className='main_menu'>Giới thiệu</div>
                    <div className='main_menu'>Dịch vụ</div>
                    <div className='main_menu'>Mẫu giao diện</div>
                    <div className='main_menu'>Tin tức</div>
                    <div className='main_menu'>Liên hệ</div>
                </div>
                <div className='footer_media_contact'>
                    <div className='title'>Liên kết khác</div>
                    <div className='fb_link'>
                        <iframe title='Techism Fanpage' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FROKSLGVN&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=503877057686050" width="340" height="500" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className='media_icon'>
                        <img src={FacebookIcon} alt='Facebook Icon' />
                        <img src={TwitterIcon} alt='Twitter Icon' />
                        <img src={LinkedinIcon} alt='Linkedin Icon' />
                        <img src={InstagramIcon} alt='Instagram Icon' />
                        <img src={BehanceIcon} alt='Behance Icon' />
                    </div>
                </div>
                <div className='footer_receive_advise'>
                    <div className='summary'>
                        Hãy để <strong>{firstCharUpper}</strong> nâng tầm doanh nghiệp của bạn
                    </div>
                    <Button type="primary">NHẬN TƯ VẤN NGAY</Button>
                </div>
            </div>
            <div className='footer_bottom footer_width'>
                <div className='copyright'>Copyright {domainName}</div>
                <div className='powerby'>Powered by {domainName}</div>
            </div>
        </div>
    )
}

export default Footer