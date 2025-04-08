"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import { motion } from "framer-motion";
import Head from "next/head";

const InvestorsPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>
          Investor Information | BrandSip - Custom Branded Water Bottles
        </title>
        <meta
          name="description"
          content="Investment opportunities with BrandSip - Learn about our growth plans and how to partner with us."
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
            Investment Opportunities
          </motion.h1>
          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us in revolutionizing hospitality branding with a high-margin
            business opportunity in the growing custom water bottle market.
          </motion.p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-center mb-12">The Market Opportunity</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-primary mb-4">A Growing Untapped Market</h3>
                <p className="mb-4">
                  The hospitality industry in Jodhpur is thriving with over 500
                  hotels, restaurants, and bars serving both tourists and
                  locals. Yet, most establishments still use generic water
                  bottles that fail to reinforce their brand.
                </p>
                <p>
                  With the rising trend of experiential hospitality and
                  attention to detail, branded water bottles represent a
                  significant untapped opportunity to enhance guest experience
                  while creating new revenue streams.
                </p>
              </motion.div>

              <motion.div
                className="bg-light-gray p-8 rounded-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-primary mb-6">Market Size & Potential</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        500+ hospitality businesses
                      </span>{" "}
                      in Jodhpur with potential for custom bottles
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Average consumption:
                      </span>{" "}
                      5,000+ bottles per month for mid-size hotels
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Target market capture:
                      </span>{" "}
                      30-50% of Jodhpur's hospitality market within 3 years
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gold mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Expansion potential:
                      </span>{" "}
                      Regional growth across Rajasthan's tourist destinations
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="section bg-light-gray">
        <div className="container-wide">
          <h2 className="text-center mb-12">Our Business Model</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Model Overview */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-primary mb-6">How We Generate Revenue</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Direct B2B Sales
                  </h4>
                  <p>
                    We work directly with hospitality businesses to develop
                    custom-branded water bottles that match their branding
                    requirements, selling them at a profitable margin while
                    still offering value compared to generic alternatives.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Recurring Revenue
                  </h4>
                  <p>
                    Our business model focuses on establishing long-term
                    relationships with clients, creating a reliable, recurring
                    revenue stream through regular reorders.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Low Overhead
                  </h4>
                  <p>
                    By partnering with established water bottling facilities and
                    optimizing our design and distribution processes, we
                    maintain low overhead costs while delivering premium
                    products.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Future Revenue Streams
                  </h4>
                  <p>
                    As we grow, we'll expand into additional branded products
                    and services, creating new revenue opportunities from our
                    established client base.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Financial Metrics */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-primary mb-6">Key Financial Metrics</h3>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-light-gray p-6 rounded-lg">
                    <h4 className="text-sm text-gray-600 uppercase mb-2">
                      Cost Per Bottle
                    </h4>
                    <p className="text-3xl font-montserrat font-bold text-primary">
                      ₹7.50
                    </p>
                  </div>

                  <div className="bg-light-gray p-6 rounded-lg">
                    <h4 className="text-sm text-gray-600 uppercase mb-2">
                      Selling Price
                    </h4>
                    <p className="text-3xl font-montserrat font-bold text-primary">
                      ₹10.50
                    </p>
                  </div>

                  <div className="bg-light-gray p-6 rounded-lg">
                    <h4 className="text-sm text-gray-600 uppercase mb-2">
                      Profit Margin
                    </h4>
                    <p className="text-3xl font-montserrat font-bold text-gold">
                      ~30%
                    </p>
                    <p className="text-sm text-gray-600">(₹3 per bottle)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-montserrat font-semibold mb-4">
                    Projected Revenue Growth
                  </h4>

                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-primary">
                          Year 1
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          ₹30L
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-primary">
                          Year 2
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          ₹75L
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="relative pt-1 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-primary">
                          Year 3
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          ₹1.5Cr
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic">
                  Note: These projections are based on conservative market
                  penetration estimates and do not include potential revenue
                  from geographic expansion or additional product lines.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section bg-white">
        <div className="container-wide">
          <h2 className="text-center mb-12">Our Competitive Advantage</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                First Mover Advantage
              </h3>
              <p>
                We're the first company in Jodhpur specifically focused on
                custom-branded water bottles for the hospitality sector, giving
                us a significant head start in building relationships and market
                share.
              </p>
            </motion.div>

            {/* Advantage 2 */}
            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Cost Efficiency
              </h3>
              <p>
                Our local production and distribution model eliminates middlemen
                and reduces logistics costs, allowing us to offer premium
                products at competitive prices while maintaining healthy
                margins.
              </p>
            </motion.div>

            {/* Advantage 3 */}
            <motion.div
              className="bg-light-gray p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Customization Expertise
              </h3>
              <p>
                We specialize exclusively in custom branding for hospitality,
                allowing us to develop industry-specific expertise and design
                capabilities that generic water suppliers cannot match.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Investment Opportunity</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-gold mb-6">Current Investment Round</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Seeking:
                      </span>{" "}
                      ₹25 Lakhs in seed funding
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Equity offered:
                      </span>{" "}
                      20-30% stake in the business
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Minimum investment:
                      </span>{" "}
                      ₹5 Lakhs
                    </div>
                  </li>
                </ul>

                <h4 className="font-montserrat font-semibold mt-8 mb-4">
                  Use of Funds
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Production setup and initial inventory (40%)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Sales and marketing (30%)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Technology and online platform development (20%)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Working capital and operations (10%)</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-gold mb-6">Investor Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Strong ROI potential:
                      </span>{" "}
                      Targeting 3-4x return within 5 years
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Quick path to profitability:
                      </span>{" "}
                      Projected break-even within 12-18 months
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent mr-3 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-montserrat font-semibold">
                        Exit opportunities:
                      </span>{" "}
                      Potential for acquisition by larger beverage or
                      hospitality companies
                    </div>
                  </li>
                </ul>

                <h4 className="font-montserrat font-semibold mt-8 mb-4">
                  Timeline to Exit
                </h4>
                <ol className="space-y-3">
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mr-3 font-montserrat font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-montserrat font-semibold">
                        Years 1-2: Market Establishment
                      </p>
                      <p className="text-white/80">
                        Securing key clients and establishing operational
                        excellence
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mr-3 font-montserrat font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-montserrat font-semibold">
                        Years 3-4: Expansion Phase
                      </p>
                      <p className="text-white/80">
                        Geographic growth and diversification of product
                        offerings
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mr-3 font-montserrat font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-montserrat font-semibold">
                        Years 4-5: Exit Preparation
                      </p>
                      <p className="text-white/80">
                        Preparing for acquisition or second funding round
                      </p>
                    </div>
                  </li>
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Interested in Investing?</h2>
            <p className="mb-8">
              We're looking for strategic investors who share our vision for
              revolutionizing hospitality branding. Schedule a meeting with our
              founder to discuss this opportunity in detail.
            </p>
            <Link href="/contact">
              <button className="btn-gold">Request Investor Information</button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestorsPage;
