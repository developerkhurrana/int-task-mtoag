"use client";
import React from "react";
import "./TrustedCompanies.css";
import Image from "next/image";

const logos = [
  <Image
    key="google"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"
    alt="Google"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="microsoft"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg"
    alt="Microsoft"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="amazon"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg"
    alt="Amazon"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="facebook"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
    alt="Facebook"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="netflix"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg"
    alt="Netflix"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="apple"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg"
    alt="Apple"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="ibm"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ibm.svg"
    alt="IBM"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="intel"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intel.svg"
    alt="Intel"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="samsung"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/samsung.svg"
    alt="Samsung"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="adobe"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg"
    alt="Adobe"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="spotify"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg"
    alt="Spotify"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="twitter"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg"
    alt="Twitter"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="linkedin"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
    alt="LinkedIn"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="github"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
    alt="GitHub"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="slack"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg"
    alt="Slack"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="dropbox"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg"
    alt="Dropbox"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="airbnb"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airbnb.svg"
    alt="Airbnb"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="uber"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/uber.svg"
    alt="Uber"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="tesla"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg"
    alt="Tesla"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
  <Image
    key="paypal"
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg"
    alt="PayPal"
    className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    width={64}
    height={64}
  />,
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-4">
      <div className="marquee-container">
        <div className="marquee">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <span
              key={idx}
              className="w-16 h-12 flex justify-center items-center hover:bg-slate-100 text-black transition-colors mx-4 cursor-pointer"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
