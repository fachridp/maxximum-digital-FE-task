import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import components
import Header from "./layouts/Header";

// Import icons/logos
import illustration from "./assets/illustration.svg";
import amazon from "./assets/amazon.svg"
import dribbble from "./assets/dribbble.svg"
import hubspot from "./assets/hubspot.svg"
import notion from "./assets/notion.svg"
import netflix from "./assets/netflix.svg"
import zoom from "./assets/zoom.svg"
import card1 from "./assets/card-1.svg";
import card2 from "./assets/card-2.svg";
import card3 from "./assets/card-3.svg";
import card4 from "./assets/card-5.svg";
import card5 from "./assets/card-5.svg";
import card6 from "./assets/card-6.svg";
import illustration7 from "./assets/illustration-7.svg";
import illustration8 from "./assets/illustration-8.svg";
import iconLineArrow from "./assets/icon-line-arrow.svg";
import logoFooter from "./assets/logo-footer.svg";
import iconLinkedIn from "./assets/linkedin.svg";
import iconFb from "./assets/fb.svg";
import iconTwitter from "./assets/twitter.svg"

// Import RTK features
import { setAccordion } from "./rtk/features/accordionDropdownManager";

export default function App() {
  const dispatch = useDispatch();

  const [checkedContactUs, setCheckedContactUs] = useState("");

  // RTK store
  const accordionDropdownManager = useSelector((state) => state.accordionDropdownManager);

  const handleToggleAccordion = useCallback((event) => {
    const { dataset } = event.currentTarget;
    dispatch(setAccordion({ keyAccordion: dataset.accordionName, valueAccordion: true }));
  }, [dispatch]);

  const handleCheckingContactUs = useCallback((event) => {
    const { value } = event.currentTarget;

    setCheckedContactUs(value);
  }, []);

  useEffect(() => {
    const handleCloseAccordion = (event) => {
      Object.keys(accordionDropdownManager).map(key => {
        if (accordionDropdownManager[key]) {
          if (!event.target.closest(`.${key}-wrap`)) {
            dispatch(setAccordion({ keyAccordion: key }));
          }
        }
      })
    }

    Object.keys(accordionDropdownManager).some(key => accordionDropdownManager[key]) && window.addEventListener('click', handleCloseAccordion);

    return () => {
      window.removeEventListener('click', handleCloseAccordion);
    }
  }, [accordionDropdownManager, dispatch])

  return (
    <>
      <Header />

      <main className="max-w-[1140px] mx-auto mt-10">
        <div className="mx-5 lg:mx-10">
          <section className="lg:flex">
            <div className="max-lg:text-center">
              <h1 className="text-4xl font-semibold md:w-[400px] max-lg:mx-auto md:text-[2.3rem]">Navigating the digital landscape for success</h1>

              <p className="my-5 md:w-[500px] max-lg:mx-auto">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

              <button className="text-white bg-[#191A23] py-3 px-5 rounded-xl">
                Book a consultation
              </button>
            </div>

            <div className="ml-auto max-lg:mt-5">
              <img className="mx-auto w-96" src={illustration} alt="image horn" />
            </div>
          </section>

          <section className="mt-5">
            <div className="flex flex-wrap justify-center lg:justify-between gap-x-5 max-lg:gap-y-2">
              <img className="w-24 lg:w-28" src={amazon} alt="Logo amazon" />
              <img className="w-24 lg:w-28" src={dribbble} alt="Logo dribbble" />
              <img className="w-24 lg:w-28" src={hubspot} alt="Logo hubspot" />
              <img className="w-24 lg:w-28" src={notion} alt="Logo notion" />
              <img className="w-24 lg:w-28" src={netflix} alt="Logo netflix" />
              <img className="w-24 lg:w-28" src={zoom} alt="Logo zoom" />
            </div>
          </section>

          <section className="mt-10 lg:mt-16">
            <div className="max-lg:text-center lg:flex lg:gap-x-6 lg:items-start">
              <h2 className="text-2xl font-medium bg-[#B9FF66] inline-block px-1 rounded-md">Services</h2>

              <p className="my-5 lg:mt-0 md:w-[31.25rem] lg:w-[32.1rem] max-lg:mx-auto md:text-lg lg:text-base lg:leading-[1.1rem]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include :</p>
            </div>

            <div className="grid justify-center grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <img className="block mx-auto cursor-pointer w-96 md:w-[25rem]" src={card1} alt="card1" />
              <img className="block mx-auto cursor-pointer w-96 md:w-[25rem]" src={card3} alt="card3" />
              <img className="block mx-auto cursor-pointer w-96 md:w-[25rem]" src={card5} alt="card4" />

              <img className="block mx-auto cursor-pointer w-96 md:w-[25rem]" src={card2} alt="card5" />
              <img className="block mx-auto cursor-pointer w-96 md:w-[25rem]" src={card4} alt="card6" />
              <img className="block mx-auto cursor-pointer w-96 md:w-[25rem]" src={card6} alt="card7" />
            </div>
          </section>

          <section className="p-8 relative rounded-3xl mt-16 md:flex bg-[#F3F3F3]">
            <div className="max-md:text-center">
              <h1 className="text-4xl md:text-xl font-semibold md:w-[400px] max-md:mx-auto">Let&apos;s make things happen</h1>

              <p className="my-5 md:w-[400px] max-lg:mx-auto">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

              <button className="text-white bg-[#191A23] py-3 px-5 rounded-xl">
                Get your free proposal
              </button>
            </div>

            <div className="ml-auto md:absolute md:top-0 md:right-0 max-md:mt-5">
              <img className="mx-auto w-60" src={illustration7} alt="image horn" />
            </div>
          </section>

          <section className="mt-10 lg:mt-16">
            <div className="max-lg:text-center lg:flex lg:gap-x-6 lg:items-start">
              <h2 className="text-2xl font-medium bg-[#B9FF66] inline-block px-1 rounded-md">Case Studies</h2>

              <p className="my-5 lg:mt-0 md:w-[31.25rem] lg:w-[30rem] max-lg:mx-auto md:text-lg lg:text-base lg:leading-[1.1rem]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>

            <div className="bg-[#191A23] text-white p-4 rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="max-lg:pb-5 lg:p-5 max-lg:border-b lg:border-r">
                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>

                <button type="button" className="flex font-bold text-[#B9FF66] mt-5 items-center gap-x-2">
                  Learn more

                  <img aria-hidden="true" role="img" src={iconLineArrow} alt="arrow" />
                </button>
              </div>

              <div className="lg:p-4 max-lg:pb-5 max-lg:border-b lg:border-r">
                <p>For B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>

                <button type="button" className="flex items-center gap-x-2 text-[#B9FF66] font-bold mt-5">
                  Learn more

                  <img src={iconLineArrow} aria-hidden="true" role="img" alt="arrow" />
                </button>
              </div>

              <div className="max-lg:pb-5 lg:p-4">
                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>

                <button type="button" className="mt-5 flex items-center gap-x-3 text-[#B9FF66] font-bold">
                  Learn more

                  <img src={iconLineArrow} alt="arrow" aria-hidden="true" role="img" />
                </button>
              </div>
            </div>
          </section>

          <section className="mt-10 lg:mt-16">
            <div className="max-lg:text-center lg:flex lg:gap-x-6 lg:items-start">
              <h2 className="text-2xl font-medium bg-[#B9FF66] inline-block px-1 rounded-md">Our Working Progress</h2>

              <p className="my-5 lg:mt-0 md:w-[31.25rem] lg:w-[18rem] max-lg:mx-auto md:text-lg lg:text-base lg:leading-[1.1rem]">Step-by-step Guide to Achieving Your Business Goals</p>
            </div>

            <div className="mt-5 space-y-5">
              <div className={`p-5 rounded-2xl border border-black shadow-md accordion1-wrap ${!accordionDropdownManager.accordion1 ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66]'}`}>
                <div className={`flex items-center gap-x-4 ${accordionDropdownManager.accordion1 && 'pb-4'}`}>
                  <h3 className="text-4xl font-bold">01</h3>
                  <p className="font-medium">Consultation</p>

                  <span data-accordion-name="accordion1" onClick={handleToggleAccordion} className="inline-block ml-auto cursor-pointer accordion1-wrap">

                    {!accordionDropdownManager.accordion1 ?
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="plus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23" />
                        </svg>
                      )
                      :
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="minus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                        </svg>
                      )
                    }
                  </span>
                </div>

                <div className={` pt-4 border-t border-black ${!accordionDropdownManager.accordion1 && 'hidden'}`}>
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </div>
              </div>

              <div className={`p-5 rounded-2xl border border-black shadow-md accordion2-wrap ${!accordionDropdownManager.accordion2 ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66]'}`}>
                <div className={`flex items-center gap-x-4 ${accordionDropdownManager.accordion2 && 'pb-4'}`}>
                  <h3 className="text-4xl font-bold">02</h3>
                  <p className="font-medium">Research & Strategy Development</p>

                  <span data-accordion-name="accordion2" onClick={handleToggleAccordion} className="inline-block ml-auto cursor-pointer accordion2-wrap">
                    {!accordionDropdownManager.accordion2 ?
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="plus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23" />
                        </svg>
                      )
                      :
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="minus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                        </svg>
                      )
                    }
                  </span>
                </div>

                <div className={`pt-4 border-t border-black ${!accordionDropdownManager.accordion2 && 'hidden'}`}>
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </div>
              </div>

              <div className={`p-5 rounded-2xl border border-black shadow-md accordion3-wrap ${!accordionDropdownManager.accordion3 ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66]'}`}>
                <div className={`flex items-center gap-x-4 ${accordionDropdownManager.accordion3 && 'pb-4'}`}>
                  <h3 className="text-4xl font-bold">03</h3>
                  <p className="font-medium">Implementation</p>

                  <span data-accordion-name="accordion3" onClick={handleToggleAccordion} className="inline-block ml-auto cursor-pointer accordion3-wrap">
                    {!accordionDropdownManager.accordion3 ?
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="plus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23" />
                        </svg>
                      )
                      :
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="minus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                        </svg>
                      )
                    }
                  </span>
                </div>

                <div className={`pt-4 border-t border-black ${!accordionDropdownManager.accordion3 && 'hidden'}`}>
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </div>
              </div>

              <div className={`p-5 rounded-2xl border border-black shadow-md accordion4-wrap ${!accordionDropdownManager.accordion4 ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66]'}`}>
                <div className={`flex items-center gap-x-4 ${accordionDropdownManager.accordion4 && 'pb-4'}`}>
                  <h3 className="text-4xl font-bold">04</h3>
                  <p className="font-medium">Monitoring and Optimization</p>

                  <span data-accordion-name="accordion4" onClick={handleToggleAccordion} className="inline-block ml-auto cursor-pointer accordion4-wrap">
                    {!accordionDropdownManager.accordion4 ?
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="plus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23" />
                        </svg>
                      )
                      :
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="minus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                        </svg>
                      )
                    }
                  </span>
                </div>

                <div className={`pt-4 border-t border-black ${!accordionDropdownManager.accordion4 && 'hidden'}`}>
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </div>
              </div>

              <div className={`p-5 rounded-2xl border border-black shadow-md accordion5-wrap ${!accordionDropdownManager.accordion5 ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66]'}`}>
                <div className={`flex items-center gap-x-4 ${accordionDropdownManager.accordion5 && 'pb-4'}`}>
                  <h3 className="text-4xl font-bold">05</h3>
                  <p className="font-medium">Reporting and Communication</p>

                  <span data-accordion-name="accordion5" onClick={handleToggleAccordion} className="inline-block ml-auto cursor-pointer accordion5-wrap">
                    {!accordionDropdownManager.accordion5 ?
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="plus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23" />
                        </svg>
                      )
                      :
                      (
                        <svg className="w-8" aria-hidden="true" focusable="false" role="img" data-icon="minus" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                          <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                        </svg>
                      )
                    }
                  </span>
                </div>

                <div className={`pt-4 border-t border-black ${!accordionDropdownManager.accordion5 && 'hidden'}`}>
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 lg:mt-16">
            <div className="max-lg:text-center lg:flex lg:gap-x-6 lg:items-start">
              <h2 className="text-2xl font-medium bg-[#B9FF66] inline-block px-1 rounded-md">Contact Us</h2>

              <p className="my-5 lg:mt-0 md:w-[31.25rem] lg:w-[18rem] max-lg:mx-auto md:text-lg lg:text-base lg:leading-[1.1rem]">Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</p>
            </div>

            <form className="bg-[#f9f9f9] p-8 lg:p-12 relative rounded-3xl shadow-md max-md:text-center max-md:h-[35rem] md:flex md:gap-x-2 md:overflow-x-hidden">
              <div className="md:basis-96">
                <label htmlFor="say-hi" className="cursor-pointer">
                  <input onChange={handleCheckingContactUs} value="say-hi" checked={checkedContactUs === "say-hi"} type="radio" className="cursor-pointer" name="say-hi" id="say-hi" />
                  <p className="inline-block pl-2">Say Hi</p>
                </label>

                <label htmlFor="get-a-quote" className="ml-5 cursor-pointer">
                  <input onChange={handleCheckingContactUs} value="get-a-quote" checked={checkedContactUs === "get-a-quote"} type="radio" className="cursor-pointer" name="get-a-quote" id="get-a-quote" />
                  <p className="inline-block pl-2">Get a quote</p>
                </label>

                <div className="mt-5 text-sm max-md:flex max-md:flex-col max-md:items-center">
                  <label htmlFor="name" className="block">
                    Name
                    <input type="text" className="block p-2 border border-black rounded-md focus:outline-none md:w-full" name="name" id="name" placeholder="Name" autoComplete="false" />
                  </label>
                  <label htmlFor="email" className="block my-5">
                    Email*
                    <input type="email" className="block p-2 border border-black rounded-md focus:outline-none md:w-full" name="email" id="email" placeholder="Email" autoComplete="false" />
                  </label>
                  <label htmlFor="message">
                    Message*
                    <input type="message" className="block p-2 border border-black rounded-md focus:outline-none md:w-full" name="message" id="message" placeholder="Message" autoComplete="false" />
                  </label>
                </div>

                <button type="button" className="bg-[#191A23] text-white py-2 rounded-md px-4 mt-5 md:w-full">
                  Send Message
                </button>
              </div>

              <div className="absolute max-md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:-right-[11rem] max-md:-bottom-[10.4rem] w-96 max-md:left-1/2">
                <img src={illustration8} className="w-full max-md:rotate-90" alt="illustration" />
              </div>
            </form>
          </section>

          <section className="mt-10 lg:mt-16 py-5 px-5 bg-[#191A23] text-white rounded-tr-2xl rounded-tl-2xl lg:pt-5 lg:pb-0 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <img src={logoFooter} className="max-md:mx-auto max-md:w-44 md:w-28" alt="Footer logo" />

              <div className="flex justify-center max-md:mt-5 gap-x-4">
                <p className="underline cursor-pointer">About Us</p>
                <p className="underline cursor-pointer">Services</p>
                <p className="underline cursor-pointer">Use Cases</p>
                <p className="underline cursor-pointer">Pricing</p>
                <p className="underline cursor-pointer">Blog</p>
              </div>

              <div className="flex justify-center max-md:mt-5 gap-x-5">
                <img src={iconLinkedIn} alt="linkedin icon" />
                <img src={iconFb} alt="fb icon" />
                <img src={iconTwitter} alt="twitter icon" />
              </div>
            </div>

            <div className="mt-5 border-b border-white md:flex md:items-center md:justify-between md:pb-8 lg:pb-5 lg:mt-8">
              <div className="space-y-2 max-md:text-center">
                <h2 className="text-lg bg-[#B9FF66] inline-block px-1 rounded-md text-black font-medium md:mb-2">Contact us</h2>

                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>

              <div className="bg-[#292A32] py-4 text-center max-lg:mt-5 rounded-md mb-4 max-w-[420px] md:max-w-[320px] max-md:mx-auto md:px-3 lg:max-w-full lg:p-8">
                <label htmlFor="footer-email">
                  <input type="email" name="footer-email" id="footer-email" placeholder="Email" className="border border-white bg-[#292A32] rounded-md py-3 px-2 focus:outline-none placeholder:text-white text-sm md:w-full lg:w-fit" autoComplete="false" />
                </label>

                <button className="text-black bg-[#B9FF66] font-medium max-md:ml-5 rounded-md text-sm p-2 md:mt-5 lg:mt-0 md:w-full lg:w-fit lg:ml-5">
                  Subscribe to news
                </button>
              </div>
            </div>

            <div className="max-lg:pt-5 lg:py-5">
              <p className="inline">
                2023 Positivus. All Rights Reserved.
              </p>

              <p className="inline ml-3 underline">Privacy Policy</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}