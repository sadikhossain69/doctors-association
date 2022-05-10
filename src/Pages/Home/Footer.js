import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{ background: `url(${footer})`, backgroundSize: 'cover' }}
        >
            <div className=" flex justify-around p-10">
                <div className=' flex flex-col items-center justify-center'>
                    <span className="footer-title">Services</span>
                    <button className="link link-hover">Branding</button>
                    <button className="link link-hover">Design</button>
                    <button className="link link-hover">Marketing</button>
                    <button className="link link-hover">Advertisement</button>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <span className="footer-title">Company</span>
                    <button className="link link-hover">About us</button>
                    <button className="link link-hover">Contact</button>
                    <button className="link link-hover">Jobs</button>
                    <button className="link link-hover">Press kit</button>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <span className="footer-title">Legal</span>
                    <button className="link link-hover">Terms of use</button>
                    <button className="link link-hover">Privacy policy</button>
                    <button className="link link-hover">Cookie policy</button>
                </div>
            </div>
            <div className=' text-center mb-5'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;