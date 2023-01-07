import NavigationFooter from '../Navigation/NavigationFooter';
import NavigationFooterCategories from '../Navigation/NavigationFooterCategories';

import logoFooterMb from '../../img/logo/logoFooterMb.png';
import logoFooterMbText from '../../img/logo/logoFoterMbText.png';
import logoFooterDesc from '../../img/logo/logoFooterDesc.png';
import logoFooterDescText from '../../img/logo/logoFooterDescText.png';

import FooterFacebookIcon from '../FooterFacebookIcon/FooterFacebookIcon';
import FooterInstagramIcon from '../FooterInstagramIcon/FooterInstagramIcon';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainerDesc}>
        <div className={styles.logoFooterMobilePosition}>
          <div className={styles.logoFooterWrapperMobile}>
            <img src={logoFooterMb} alt="logo" />
            <img
              className={styles.logoFooterImgMobileText}
              src={logoFooterMbText}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.logoFooterDescPosition}>
          <div className={styles.logoFooterWrapperDesc}>
            <img src={logoFooterDesc} alt="logo" />
            <img
              className={styles.logoFooterImgDescText}
              src={logoFooterDescText}
              alt="logo"
            />
          </div>
        </div>

        <div className={styles.footerWrapperBlokeInfo}>
          <div className={styles.footerMenuWrapper}>
            <h2 className={styles.footerMenuText}>Menu</h2>
            <NavigationFooter />
          </div>

          <div className={styles.footerCategoriesWrapper}>
            <h2 className={styles.footerCategoriesText}>Categories</h2>
            <NavigationFooterCategories />
          </div>

          <div className={styles.footerSocialWrapperDesc}>
            <h2 className={styles.footerSocialtextDesc}>
              We are in social networks
            </h2>
            <div className={styles.footerSocialWrapperLinksDesc}>
              <a
                className={styles.footerSocialIconFacebookDesc}
                href="https://uk-ua.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FooterFacebookIcon />
              </a>
              <a
                className={styles.footerSocialIconInstagramDesc}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FooterInstagramIcon />
              </a>
            </div>
          </div>

          <div className={styles.footerWrapperBlokeContacts}>
            <h2 className={styles.footerContacts}>Contacts</h2>
            <div className={styles.footerWrapperBlokeContactsPosition}>
              <div>
                <p className={styles.footerContactsAddress}>Address</p>
                <p className={styles.footerContactsCity}>Dnipro</p>
                <p className={styles.footerContactsStreet}>
                  <span className={styles.footerContactsCitySpan}>Dnipro</span>
                  Yavornytskogo Dmytra ( Marksa Karla ) ave., 48.
                  <br />
                  entrance 1, office 6
                </p>
              </div>
              <div className={styles.footerMailAndTelPositionDesc}>
                <div>
                  <h2 className={styles.footerContactsEmailText}>E-mail</h2>
                  <a
                    className={styles.footerContactsEmailLink}
                    href="mailto:HomeDecoPostTest@gmail.com"
                  >
                    HomeDecoPostTest@gmail.com
                  </a>
                </div>
                <div>
                  <p className={styles.footerContactsEmailPhone}>Phone</p>
                  <a
                    className={styles.footerContactsEmailPhoneLink}
                    href="tel:+ 375 (29) 922-29-99"
                  >
                    + 375 (29) 922-29-99
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSocialWrapper}>
        <h2 className={styles.footerSocialtext}>We are in social networks</h2>
        <div className={styles.footerSocialWrapperLinks}>
          <a
            className={styles.footerSocialIconFacebook}
            href="https://uk-ua.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FooterFacebookIcon />
          </a>
          <a
            className={styles.footerSocialIconInstagram}
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FooterInstagramIcon />
          </a>
        </div>
      </div>

      <div className={styles.footerTextCopyWrapper}>
        <p className={styles.footerTextCopy}>
          &copy; 2022. All rights reserved
          {' '}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
