import React from 'react'
import styles from '@/app/styles/page.module.css'
import Link from 'next/link'


export default function NavBar() {
  return (
    <>
    <div className={styles.pageHead}>
        <header className = {styles.header}>
            <nav className = {styles.navigation}>
                <ul className = {styles.menu}>
                    <li className = {styles.menuItem}><Link href="/">Home</Link></li>
                    <li className = {styles.menuItem} id = "acc-page"><a>View Account</a></li>
                    <li className = {styles.menuItem} id = "sell-page"><a>Sell Your Art</a></li>                       
                    <li className = {styles.menuItem}><Link href="/">About Us</Link></li>
                </ul>
            </nav>
            <h1 className = {styles.headerTitle}>Artfully Yours</h1>
            <div className = {styles.icons}>
                <Link href="/users/login" id = "login-icon"><img src="/images/user.png" alt="User" width="30" height="30" ></img></Link>
            </div>
        </header>
        <section id="home" className = {styles.mainHomeSection}>
                <p className = {styles.tag}>Fuel your creative spirit</p>
        </section>  
    </div>
    
    
    </>
  )
}

    