import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Gir cow ghee, and why is it special?',
      answer: 'Gir cow ghee is clarified butter made from the milk of Gir cows, known for its high nutritional value and purity. It\'s special due to its rich aroma, golden color, and traditional significance in Ayurveda.'
    },
    {
      question: 'How is Gir cow ghee different from other types of ghee?',
      answer: 'Gir cow ghee stands out for its unique flavor profile, which is rich and distinct. It is also prized for its high content of essential nutrients and vitamins, making it a preferred choice for health-conscious consumers.'
    },
    {
      question: 'What are the health benefits of consuming Gir cow ghee?',
      answer: 'Gir cow ghee is believed to boost immunity, support digestion, enhance skin health, and provide essential vitamins like A, D, E, and K. It also aids in maintaining cholesterol levels and promoting overall well-being.'
    },
    {
      question: 'Is Gir cow ghee suitable for lactose-intolerant individuals?',
      answer: 'Yes, Gir cow ghee is typically safe for lactose-intolerant individuals. During the clarification process, the milk solids containing lactose are removed, leaving behind mainly butterfat.'
    },
    {
      question: 'How should Gir cow ghee be stored to maintain its freshness?',
      answer: 'Gir cow ghee should be stored in a cool, dry place away from direct sunlight. It does not require refrigeration but should be kept in an airtight container to preserve its flavor and aroma.'
    },
    {
      question: 'Do you offer different packaging sizes for Gir cow ghee?',
      answer: 'Yes, we offer Gir cow ghee in various packaging sizes to cater to different needs and preferences, ensuring convenience and freshness for our customers.'
    },
    {
      question: 'Is your Gir cow ghee organic or sourced from free-range cows?',
      answer: 'Yes, our Gir cow ghee is sourced from cows that are pasture-raised and fed a natural diet. While not certified organic, we prioritize ethical and sustainable practices in sourcing our ingredients.'
    },
    {
      question: 'Can Gir cow ghee be used for cooking at high temperatures?',
      answer: 'Yes, our Gir cow ghee is sourced from cows that are pasture-raised and fed a natural diet. While not certified organic, we prioritize ethical and sustainable practices in sourcing our ingredients.'
    },
    {
      question: 'Do you offer international shipping for Gir cow ghee?',
      answer: 'Currently, we primarily offer shipping within India. For international orders, please contact our customer service for more information and shipping options.'
    },
    {
      question: 'What is your policy on returns and refunds for Gir cow ghee?',
      answer: 'Due to the nature of our products, we do not accept returns or offer refunds once Gir cow ghee has been dispatched. However, if you receive a damaged or defective item, please contact us within 48 hours of delivery with photographic evidence for assistance.'
    }
  ];

  return (
    <div
      id="faqs" // Add this ID for the smooth scrolling target
      className="faq-section bg-[#ECE5DF] py-8"
    >
      <div className="px-4 py-8 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#81452E] mb-12 mt-[-7%] text-center">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item text-[#81452E] pb-4 mb-4">
            <div
              className="question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <p className="font-['Tenor Sans'] text-[24px] font-normal leading-[40px]">
                {item.question}
              </p>
              {openIndex === index ? (
                <IoIosArrowUp className="text-xl text-[#81452E]" />
              ) : (
                <IoIosArrowDown className="text-xl text-[#81452E]" />
              )}
            </div>
            {openIndex !== index && (
              <div className="border-b-[0.5px] border-[#81452E] mt-2 mb-2"></div>
            )}
            {openIndex === index && (
              <div className="answer mt-2 text-[#81452E] text-lg">
                {item.answer}
              </div>
            )}
            {openIndex === index && (
              <div className="border-b-[0.5px] border-[#81452E] mt-2 mb-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
