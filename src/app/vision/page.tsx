"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import { motion } from "framer-motion";
import Head from "next/head";

const VisionPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Our Vision | BrandSip - Custom Branded Water Bottles</title>
        <meta
          name="description"
          content="Explore BrandSip's growth roadmap and vision for the future of custom-branded water bottles in the hospitality industry."
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
            Our Vision & Growth Roadmap
          </motion.h1>
          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From local innovator to hospitality branding leader: our journey to
            transform the guest experience through custom-branded water bottles.
          </motion.p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              To transform a basic necessity into a powerful branding
              opportunity for hospitality businesses, enhancing guest
              experiences while providing exceptional value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Value 1 */}
              <motion.div
                className="p-6 bg-light-gray rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-center">
                  Quality
                </h3>
                <p className="text-center">
                  Delivering premium products that reflect the high standards of
                  our hospitality clients.
                </p>
              </motion.div>

              {/* Value 2 */}
              <motion.div
                className="p-6 bg-light-gray rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-center">
                  Innovation
                </h3>
                <p className="text-center">
                  Constantly evolving our offerings to meet the changing needs
                  of the hospitality industry.
                </p>
              </motion.div>

              {/* Value 3 */}
              <motion.div
                className="p-6 bg-light-gray rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-center">
                  Partnership
                </h3>
                <p className="text-center">
                  Building lasting relationships with our clients and supporting
                  their branding goals.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="section bg-light-gray">
        <div className="container-wide">
          <h2 className="text-center mb-16">Our Growth Roadmap</h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Phase 1 */}
            <motion.div
              className="relative flex flex-col lg:flex-row items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary z-10 items-center justify-center text-white font-montserrat font-bold">
                1
              </div>

              {/* Content */}
              <div className="lg:w-1/2 lg:pr-12 lg:text-right mb-8 lg:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:ml-auto lg:mr-12">
                  <h3 className="text-primary font-montserrat mb-3">
                    Phase 1: Launch & Establishment
                  </h3>
                  <h4 className="text-gray-600 italic mb-4">2023-2024</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start lg:justify-end">
                      <span>
                        Direct B2B consultations with hospitality businesses in
                        Jodhpur
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600 ml-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-start lg:justify-end">
                      <span>
                        Establishing core client base in premium hotels and
                        restaurants
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600 ml-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-start lg:justify-end">
                      <span>
                        Refining our production process and delivery systems
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600 ml-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 lg:pl-12">
                <div className="h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Phase 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              className="relative flex flex-col lg:flex-row-reverse items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary z-10 items-center justify-center text-white font-montserrat font-bold">
                2
              </div>

              {/* Content */}
              <div className="lg:w-1/2 lg:pl-12 lg:text-left mb-8 lg:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:mr-auto lg:ml-12">
                  <h3 className="text-primary font-montserrat mb-3">
                    Phase 2: Service Expansion
                  </h3>
                  <h4 className="text-gray-600 italic mb-4">2024-2025</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Launch of full-service marketing support for clients
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Introduction of client dashboard for order management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Development of interactive label design tools</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 lg:pr-12">
                <div className="h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Phase 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              className="relative flex flex-col lg:flex-row items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary z-10 items-center justify-center text-white font-montserrat font-bold">
                3
              </div>

              {/* Content */}
              <div className="lg:w-1/2 lg:pr-12 lg:text-right mb-8 lg:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:ml-auto lg:mr-12">
                  <h3 className="text-primary font-montserrat mb-3">
                    Phase 3: Geographic Expansion
                  </h3>
                  <h4 className="text-gray-600 italic mb-4">2025-2026</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start lg:justify-end">
                      <span>
                        Expansion to key hospitality markets in Rajasthan
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent ml-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-start lg:justify-end">
                      <span>
                        Establishment of regional distribution centers
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent ml-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-start lg:justify-end">
                      <span>
                        Partnership with major hotel chains across India
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent ml-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 lg:pl-12">
                <div className="h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1137&q=80"
                    alt="Phase 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phase 4 */}
            <motion.div
              className="relative flex flex-col lg:flex-row-reverse items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary z-10 items-center justify-center text-white font-montserrat font-bold">
                4
              </div>

              {/* Content */}
              <div className="lg:w-1/2 lg:pl-12 lg:text-left mb-8 lg:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:mr-auto lg:ml-12">
                  <h3 className="text-primary font-montserrat mb-3">
                    Phase 4: Product Diversification
                  </h3>
                  <h4 className="text-gray-600 italic mb-4">2026-2027</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Expansion into additional branded hospitality products
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Launch of comprehensive hospitality branding services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent mr-2 mt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Exploration of sustainable packaging solutions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 lg:pr-12">
                <div className="h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt="Phase 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary py-16 px-4">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white/30 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
          </svg>
          <blockquote className="text-white text-2xl font-playfair italic mb-8">
            Our vision is to redefine hospitality branding by transforming
            everyday necessities into powerful brand touchpoints that create
            lasting impressions.
          </blockquote>
          <p className="text-white/80 font-montserrat font-semibold">
            Lucky Panwar, Founder & CEO
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Join Us on Our Journey</h2>
            <p className="mb-8">
              Whether you're a hospitality business looking to enhance your
              brand experience or an investor interested in our growth
              potential, we invite you to be part of the BrandSip story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary">Partner with Us</button>
              </Link>
              <Link href="/investors">
                <button className="btn-outline">Investor Information</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VisionPage;
