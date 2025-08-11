"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero} data-aos="fade-up">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Get In Touch</h1>
              <p>
                Ready to start your next woodworking project? Contact us today for 
                a free consultation and quote. Our expert team is here to help bring 
                your vision to life.
              </p>
            </div>
            <div className={styles.heroImage}>
              <img src="/images/heroimg.jpg" alt="Contact Us" />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className={styles.contactInfo} data-aos="fade-up">
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <h3>Phone</h3>
              <p>+254 702 648 36</p>
              <p>Mon-Fri: 8AM-6PM</p>
            </div>
            
            <div className={styles.contactCard}>
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <h3>Email</h3>
              <p>info@stagexafrica.com</p>
              <p>support@stagexafrica.com</p>
            </div>
            
            <div className={styles.contactCard}>
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <h3>Address</h3>
              <p> Along Kericho-Mau Summit Road, 500m before Londiani Junction.</p>
            </div>
            
            <div className={styles.contactCard}>
              <i className="fa-solid fa-clock" aria-hidden="true"></i>
              <h3>Hours</h3>
              <p>Monday - Friday: 8AM-6PM</p>
              <p>Saturday: 9AM-4PM</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.contactForm} data-aos="fade-up">
          <ContactForm className={styles.form} />
        </section>

        {/* Map Section */}
        <section className={styles.mapSection} data-aos="fade-up">
          <h2>Find Us</h2>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1644262070010!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
