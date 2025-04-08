"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import { motion } from "framer-motion";
import Head from "next/head";

const ContactPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Contact Us | BrandSip - Custom Branded Water Bottles</title>
        <meta
          name="description"
          content="Get in touch with BrandSip for custom-branded water bottles for your hospitality business. Request samples, consultations, or quotes."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-wide text-center">
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to elevate your hospitality brand? Contact us for a
            consultation, to request samples, or to learn more about our custom
            water bottle solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8">Send Us A Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Company"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    I'm interested in:
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="" disabled selected>
                      Select your interest
                    </option>
                    <option value="consultation">Request a consultation</option>
                    <option value="sample">Request a sample</option>
                    <option value="quote">Get a quote</option>
                    <option value="partnership">
                      Partnership opportunities
                    </option>
                    <option value="investment">Investment information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your needs and requirements..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12"
            >
              <h2 className="mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-primary font-montserrat font-semibold mb-4">
                    Office Address
                  </h3>
                  <p className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      BrandSip Headquarters
                      <br />
                      123 Hospitality Avenue
                      <br />
                      Jodhpur, Rajasthan 342001
                      <br />
                      India
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-primary font-montserrat font-semibold mb-4">
                    Contact Details
                  </h3>
                  <p className="flex items-start mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>info@brandsip.com</span>
                  </p>
                  <p className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+91 12345 67890</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-primary font-montserrat font-semibold mb-4">
                    Business Hours
                  </h3>
                  <p className="flex items-start mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <span className="font-medium">Monday - Friday:</span> 9:00
                      AM - 6:00 PM
                    </span>
                  </p>
                  <p className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <span className="font-medium">Saturday:</span> 10:00 AM -
                      4:00 PM (By appointment only)
                    </span>
                  </p>
                </div>

                <div className="bg-light-gray p-6 rounded-lg">
                  <h3 className="text-primary font-montserrat font-semibold mb-4">
                    Schedule a Meeting
                  </h3>
                  <p className="mb-4">
                    Prefer to speak directly with our team? Schedule a meeting
                    with one of our hospitality branding specialists.
                  </p>
                  <button className="btn-outline-primary">
                    Book a Meeting
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light-gray">
        <div className="container-wide py-12">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <div className="w-full h-96 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.671493126747!2d73.02277587535722!3d26.285855176954243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4e4f161a95%3A0x9e129148f701aa1c!2sNagori%20Gate%2C%20Jodhpur%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1712867020749!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-primary font-montserrat font-semibold mb-3">
                What is the minimum order quantity?
              </h3>
              <p>
                Our minimum order is 1,000 bottles for custom branded designs.
                For hospitality chains or high-volume customers, we offer
                special pricing tiers for orders above 5,000 bottles.
              </p>
            </motion.div>

            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-primary font-montserrat font-semibold mb-3">
                How long does production take?
              </h3>
              <p>
                Typically, we can deliver your custom branded water bottles
                within 2-3 weeks from design approval. Rush orders can sometimes
                be accommodated for an additional fee.
              </p>
            </motion.div>

            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-primary font-montserrat font-semibold mb-3">
                Do you offer design assistance?
              </h3>
              <p>
                Yes! Our in-house design team can help create custom designs
                that match your brand identity. We can work from your existing
                brand guidelines or help develop a new branded look.
              </p>
            </motion.div>

            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-primary font-montserrat font-semibold mb-3">
                Can I request samples before ordering?
              </h3>
              <p>
                Absolutely. We offer sample kits that include different bottle
                sizes and label materials to help you make the best decision for
                your brand. Simply use our contact form to request samples.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
