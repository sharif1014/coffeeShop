import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCartPlus, FaPhoneAlt } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const backgroundChange = () => {
  //   setScroll(scroll + window.scrollY);
  // };
  // window.addEventListener("scroll", backgroundChange);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.ordernow}>
          <div className={styles.orderIcon}>
            <FaPhoneAlt />
          </div>
          <div className={styles.orderTexts}>
            <span className={styles.orderText}>Order Now</span>
            <span className={styles.orderPhone}>+880 000 000</span>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <ul className={!open ? styles.menu : (styles.menu, styles.mobileMenu)}>
          <li className={styles.menuItem}>
            <a href="#home" className={styles.menuLink}>
              Homepage
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#products" className={styles.menuLink}>
              Products
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#menu" className={styles.menuLink}>
              Menu
            </a>
          </li>
          <li className={(styles.menuItem, styles.logo)}>
            <a href="#home" className={styles.menuLink}>
              <span> CAFESHOP</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#events" className={styles.menuLink}>
              Events
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#blog" className={styles.menuLink}>
              Blog
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#contact" className={styles.menuLink}>
              Contact US
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.user}>
          <li className={styles.userItem}>
            <a href="/" className={styles.menuLink}>
              <FcBusinessman />
            </a>
          </li>
          <li className={styles.cartItem}>
            <a href="/" className={styles.menuLink}>
              <FaCartPlus />
              <span className={styles.badge}>2</span>
            </a>
          </li>
          <li className={styles.hambergerItem}>
            <div
              className={styles.mobileMenuIcons}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {!open ? (
                <span className={styles.openIcon}>
                  <AiOutlineMenu />
                </span>
              ) : (
                <span className={styles.closeIcon}>
                  <AiOutlineClose />
                </span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
