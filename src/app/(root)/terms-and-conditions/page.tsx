import React from "react";

const TermsPage = () => {
  return (
    <div>
      <section className="w-full space-y-12">
        <div className="text-left pt-8 md:pt-20 p-5 md:ml-[20px]  md:px-[200px] md:mx-auto md:pb-2 bg-adron-gray">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 w-full leading-0">
            Terms and Conditions
          </h1>
          <p className="text-adron-black font-bold text-left text-[14px] md:text-[15px] leading-relaxed">
            At Adron Homes, we are committed to delivering quality, accessible,
            and affordable housing solutions. Our mission is to <br /> make
            homeownership a reality for everyone.
          </p>
        </div>

        <div className="flex flex-col bg-white rounded-[45px] md:rounded-[90px] py-10 md:py-14 w-[98%] md:w-[80%] mx-auto space-y-10 md:space-y-20 md:px-18 mb-10">
          <div className="">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Disclaimer</h2>
            <div className="text-sm">
              The information contained in this website is for general
              information purposes only. The information is provided by Adron
              Homes and while we endeavor to keep the information up to date and
              correct, we make no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability,
              suitability or availability with respect to the website or the
              information, products, services, or related graphics contained on
              the website for any purpose. Any reliance you place on such
              information is therefore strictly at your own risk. In no event
              will we be liable for any loss or damage including without
              limitation, indirect or consequential loss or damage, or any loss
              or damage whatsoever arising from loss of data or profits arising
              out of, or in connection with, the use of this website. Through
              this website you are able to link to other websites which are not
              under the control of Adron Homes. We have no control over the
              nature, content and availability of those sites. The inclusion of
              any links does not necessarily imply a recommendation or endorse
              the views expressed within them. Every effort is made to keep the
              website up and running smoothly. However, Adron Homes takes no
              responsibility for, and will not be liable for, the website being
              temporarily unavailable due to technical issues beyond our
              control.
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Estates & Homes
            </h2>
            <div className="text-sm">
              A prospective buyer of any of our home units is expected to obtain
              an application form for a cost of N10,000.00 only from our
              marketing officers or any of our branches. Once a full payment of
              the purchase price is effected, Adron Homes & Properties Limited
              will deliver the house within a maximum period of 6 months. Adron
              Homes & Properties Limited is not liable for losses sustained
              through payments not made through any of our designated banks. The
              legal department of Adron Homes & Properties Limited will hand
              over all documents in favour of the buyer within 30 days after
              allocation of the house and Contract of Sales immediately after
              the first payment. For maintaining a lasting beautiful and
              organised environment in the estate, no alteration will be allowed
              on the structure on ground. All occupants are expected to comply
              with the rules and regulations of the estate as contained in the
              estate Deed of Restriction. The Micro payment Housing Plan is
              exclusively for clients who are ready to build immediately after
              allocation without a breach in payment within the agreed payment
              period. A breach in payment will equal revocation and the house
              re-allocated to another subscriber with a penalty fee of 35%
              deduction from previous payment. Refund is not applicable in this
              contract. Other prototypes like duplexes mansions and detached
              houses are also available on the same terms and conditions. All
              prices are exclusive of VAT.{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
