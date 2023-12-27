import React from 'react';
import { Link } from 'react-router-dom';

function SocialLink({ href, icon }) {
  return (
    <a href={href} className="hover:text-gray-500 text-white">
      <span className="sr-only">{icon}</span>
      <div className="h-16 w-16 md:h-12 md:w-12 lg:w-8 lg:h-8 xl:h-6 xl:w-6">
        <i className={`fa-brands ${icon}`}></i>
      </div>
    </a>
  );
}

function NavLink({ title, to }) {
  return (
    <Link to={to} className="text-xl leading-snug md:text-2xl md:leading-tight xl:text-base xl:leading-7">
      {title}
    </Link>
  );
}

function ContactInfo({ address, phone }) {
  return (
    <span className="text-xl leading-snug md:text-2xl xl:text-base xl:leading-7">
      {address.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p>{phone}</p>
    </span>
  );
}

function Footer() {
  return (
    <footer className="bg-[#04102a] text-[#8A99B4]" aria-labelledby="footer">
      <div className="mx-auto max-w-7xl px-10 pt-20 xl:px-8 xl:pt-32">
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 lg:grid lg:grid-cols-2 lg:gap-y-0 xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 md:space-y-10 xl:space-y-8">
            <h3 className="text-xl font-medium text-white md:text-4xl xl:text-2xl xl:leading-7">About Us</h3>
            <p className="text-xl leading-snug font-normal md:text-2xl md:leading-tight xl:text-base xl:leading-7">
              Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.
            </p>
            <div className="flex lg:space-x-12 xl:space-x-6">
              <SocialLink href="https://www.facebook.com" icon="fa-facebook" />
              <SocialLink href="https://www.instagram.com" icon="fa-instagram" />
              <SocialLink href="https://twitter.com" icon="fa-twitter" />
              <SocialLink href="https://www.linkedin.com" icon="fa-linkedin" />
              <SocialLink href="https://www.youtube.com" icon="fa-youtube" />
            </div>
          </div>
          <div className=" grid space-y-2 md:space-y-8 xl:space-y-0 xl:grid xl:gap-8">
            <h3 className="text-xl font-medium text-white xl:leading-7 xl:text-2xl">Our Services</h3>
            <NavLink title="AI Infrastructure Inspection" to="/ai-inspection" />
            <NavLink title="AI Visual Inspection" to="/visual-inspection" />
            <NavLink title="AI Data Analytics" to="/data-analytics" />
            <NavLink title="AI People Tracking" to="/people-tracking" />
          </div>
          <div className="lg:col-span-2 xl:col-span-2 md:space-y-24 md:gap-y-36 xl:space-y-0">
            <div className="flex flex-col gap-14  xl:grid xl:grid-cols-2">
              <div className="flex gap-2 flex-col xl:gap-8">
                <h3 className="font-medium text-white xl:leading-7 xl:text-2xl">Our Solutions</h3>
                <NavLink title="Asset Performance Management" to="/asset-management" />
                <NavLink title="Job Grading & Evaluation" to="/job-evaluation" />
                <NavLink title="Compensation Management" to="/compensation-management" />
              </div>
              <div className="flex flex-col gap-3 xl:gap-12">
              
                  <h3 className="leading-snug font-medium text-white md:text-4xl xl:leading-7 xl:text-2xl">Reach Us</h3>
                  <ContactInfo
                    address="United Kingdom, 53 Denton close, Redhill, Surrey, RH1 5LB"
                    phone="+44 787 999 3892"
                  />
                  <ContactInfo
                    address="Germany, Schützenstraße 51A, Lübeck, 23558"
                    phone="+49 179 512 5812"
                  />
                  <ContactInfo
                    address="India, No. 154/20, Royal Space, Third Floor TI, HSR Layout, Bangalore, Karnataka 560102"
                    phone="+91 85900 56435"
                  />
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 xl:mt-24">
        <p className="text-xs leading-5 text-gray-500">© 2020 Ombrulla, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
