"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "Can I visit the estate before making payment? ",
    answer:
      "Yes, you can. We carryout physical site inspection. Also, in other to improve our customer's experience we have virtual tour guide for various estate locations, where you can view the estate from the comfort residence. Likewise, GPS coordinates to better locate the estate from your internet devices.",
  },
  {
    question:
      "After the payment of my land, is there any other charges (hidden charges)?",
    answer:
      "There is no hidden charges. After the full payment for land, you expected to pay infrastructural fees: legal document, survey, architectural plan, development fee. And this can be done upon your readiness to building.",
  },
  {
    question: "How legit is your properties? ",
    answer:
      "our properties ranging from landed properties to housing and commercial units are 100 percent legit. As we have legal document that shows the originality of our products like contract of sales, receipts (payment invoice), provisional letter of allocation, deeds of assignment, red copy survey.",
  },
  {
    question: "Hope your company does not have omo onile issue?",
    answer: "here is no omo onile issue in our various estate locations.",
  },
  {
    question: "How can I make payment?",
    answer:
      "We have company's designated bank accounts you can make payment to preferably our Gtbank and Zenith bank to aid prompt confirmation of payment.",
  },
  {
    question: "IS THE ESTATE WATER-LOGGED OR DRY LAND?",
    answer: "The Estate Is A Dry Land.",
  },
  {
    question:
      "WOULD I GET PHYSICAL ALLOCATION UPON COMPLETION OF MY LAND PAYMENT? ",
    answer:
      "No.. You will not get physical allocation upon completion of land payment. However, When you show readiness to build and you pay for the other charges + Developmental/ Infrastructure, You will be allocated.",
  },
  {
    question:
      "WHAT ARE THE BASIC AMENITIES A CLIENT STANDS TO ENJOY IN THIS ESTATE? ",
    answer:
      "Sport center for both adult and children, Dedicated Power supply, Standard Drainage System, Good Road Network.",
  },
  {
    question: "WHAT ARE THE TITLE DOCUMENTS FOR ADRON ESTATES? ",
    answer:
      "THE TITLE DOCUMENTS FOR ADRON ESTATES IS A GLOBAL C OF O WHICH COVERS INDIVIDUAL ESTATES.",
  },
  {
    question: "Is it compulsory for your Engr. to build for me",
    answer: "No... YOU CAN BRING YOUR CERTIFIED ENGINEER",
  },
  {
    question:
      "Do you allocate your plot to your clients immediately after purchase of the land",
    answer:
      "WE ALLOCATE TO PEOPLE THAT HAVE PAID FOR THE LAND AND INFRASTRUCTURE FEE AND ARE TO BUILD WE DONT ALLOCATE TO PEOPLE THAT BUY FOR INVESTMENT, YOU ONLY GET YOUR RECEIPT, COS AND PLOA DOCUMENT",
  },
  {
    question: "What is another name for infrastructural fees?",
    answer: "Another name for infrastructural fees is Developmental fees",
  },
  {
    question: "What are the other charges involved?",
    answer:
      "Asides the infrastructural or developmental fees, other charges to be paid by the customer includes:Survey, Legal Documentation, Architectural plan(Duplex/Bungalow), Mechanical & Electrical Drawing(Duplex/Bungalow), Building Plan Approval (To be determined after physical allotment), Stage Certification",
  },
  {
    question: "IS THE ESTATE WATER-LOGGED OR DRY LAND?",
    answer: "The Estate Is A Dry Land.",
  },
  {
    question: "How are infrastructure fees calculated?",
    answer:
      "These are calculated by the total cost of providing amenities such as the perimeter fencing, secured gate houses, drainages, estate major roads and ancillary roads, streetlights, playing grounds, sporting facilities etc.",
  },
  {
    question: "How often are infrastructural fees reviewed or adjusted?",
    answer:
      "Yes, the fees may be adjusted periodically to accommodate inflation and increase in government statutory rates, costs are often associated with the price of goods and services in a given area of property, these are determined by open market factors and by market conditions. We majorly review when current prices of materials have increased.",
  },
  {
    question: "Is there a provision for a payment plan on these fees?",
    answer:
      "Infrastructure payment is outright (for estate not on allocation now to avoid future review) and for estate on allocation, 50% is required with 100% payment of other fees. The balance of 50% of the infrastructure is spread after physical allocation.",
  },
  {
    question: "Are there penalties for late payment of infrastructure fees?",
    answer:
      "No penalties or defaults, however, the client pays the revised fees when price changes.",
  },
  {
    question: "How often do I have to pay infrastructure/developmental fees?",
    answer: "It is a one-off payment.",
  },
  {
    question:
      "Am I required to pay full infrastructure and other fees before physical allocation?",
    answer:
      "You are only required to pay 50% of the applicable infrastructure fee and 100% of the other fees i.e legal, architectural drawing, structural drawing, stage certification/ supervisory/ security, building plan approval and survey to qualify for physical allocation while the balance of the infrastructure fee can be paid in instalments after the physical allotment (*this is applicable to estates already been allocated)",
  },
  {
    question:
      "Can I pay the infrastructure and other fees when I am not ready to build?",
    answer:
      "It is advised that you pay your other fees and infrastructure when you are ready to build. However, for estates that are being allocated or close to be allocated, full infrastructure fees ONLY can be paid even when the customer is not ready to build, others fees will be paid in full when the client or the estate is ready/available.",
  },
  {
    question:
      "How long does physical allocation take after I have paid the required amount and met all other criteria?",
    answer: "It takes 8-12 weeks.",
  },
  {
    question:
      "I have paid part of the required fees for physical allocation, will I still be affected by the upward review of the fees?",
    answer:
      "In order not to be affected by any increment in other fees and infrastructure, you are required to pay 100% of the other fees(I.e survey, legal documentation, architectural plan, stage certification, Ma& E, and at least 50% of the infrastructure before the increment( for Estates that are ready to be allocated) But 100% of the infrastructure fees only (if the Estate is not ready yet for physical allocation)",
  },
  {
    question:
      "I have my architect; do I still need to pay architectural and structural drawing fees to Adron Homes?",
    answer:
      "Yes, you have to still pay the fees, because whatever your Architect designs is still subjected to the scrutiny and approval of our in-house Architects to ensure it is appropriate and in line with the regulations.",
  },
  {
    question:
      "I am building one house and I have more than one plot, can I get a waiver on other fees?",
    answer:
      "Clients building just one house on more than one plot may enjoy some waiver on the other fees except for infrastructure and survey fees subject to management approval which is premised on the kind and number of buildings the client intends to build.",
  },
  {
    question: "Can I pay other fees in instalments?",
    answer:
      "Clients are expected to pay up to the required % before being allocated and to avoid any future price increment.",
  },
  {
    question:
      "Can I get my physical allocation by paying only infrastructure fees?",
    answer:
      "No, other fees must be paid physical allocation is done. Paying for infrastructure fees only does not guarantee the physical allocation of land.",
  },
  {
    question: "Why the increase on infrastructure fees?",
    answer:
      "Infrastructure fees are determined by inflationary pressures that are driven primarily by market forces. We do not have control over these costs, hence the review to match the quality of developmental works on site.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full space-y-12">
      <div className="text-left pt-8 md:pt-20 p-5 md:ml-[20px]  md:px-[200px] md:mx-auto md:pb-2 bg-adron-gray">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 w-full leading-0">
          Frequently Asked Questions
        </h1>
        <p className="text-adron-black font-bold text-left text-[14px] md:text-[15px] leading-relaxed">
          At Adron Homes, we are committed to delivering quality, accessible,
          and affordable housing solutions. Our mission is to <br /> make
          homeownership a reality for everyone.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl mx-auto divide-y divide-gray-300 w-[98%] md:w-[80%] mb-20">
        <div className="">
          <div className="flex gap-1 items-center mb-4">
            <div className="h-8 w-1 bg-orange-500"></div>
            <h4 className="text-lg font-semibold text-gray-800">FAQs</h4>
          </div>
          <h4 className="text-3xl text-gray-900 mb-10">
            Answers to your common questions
          </h4>
        </div>
        <div className="divide-y divide-gray-300">
          {faqData.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
              >
                <span
                  className={`font-semibold capitalize ${
                    openIndex === index ? "text-green-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="py-2 text-gray-700 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
