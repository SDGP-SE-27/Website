import { FaqAccordion } from "./ui/faq-chat-accordion";
import { TypingAnimation } from "./ui/typing-animation";

interface FAQProps {
  heading?: string;
  description?: string;
  items?: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  moreSupport?: string;
  supportDescription?: string;
  supportButtonUrl?: string;
  supportButtonText?: string;
}

const teamMembers = [
  {
    id: 1,
    name: "Ravinidi Welagedara",
    designation: "Team Leader",
    image: "/images/logo.jpg",
  },
  {
    id: 2,
    name: "Lavindya Rathnayaka",
    designation: "UI/UX Designer",
    image: "/images/logo.jpg",
  },
];

const faqItems = [
  {
    id: "1",
    question: "How accurate is the price prediction?",
    answer: "Accuracy of the model is 86%, but the value still may vary.",
  },
  {
    id: "2",
    question: "Can it identify any disease?",
    answer: "Yes it can identify any disease of the specified crop.",
  },
];

export const FAQ = ({
  heading = "Frequently Asked Questions",
  description = "Answers to common questions about our services.",
  items = faqItems,
  moreSupport = "Need more support?",
  supportDescription = "Contact us for assistance.",
  supportButtonUrl = "/contact-us#contact-form",
  supportButtonText = "Contact Us",
}: FAQProps) => {
  const faqData = items.map((item) => ({
    id: parseInt(item.id, 10),
    question: item.question,
    answer: item.answer,
  }));

  return (
    <div className="py-32 flex justify-center items-center">
      <div className="container space-y-16 flex flex-col items-center">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <TypingAnimation
            text={heading}
            className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-white"
          />
          <p className="text-white lg:text-lg">{description}</p>
        </div>

        <FaqAccordion
          data={faqData}
          className="w-full lg:max-w-3xl"
          questionClassName="bg-secondary/20 text-white hover:bg-secondary/30"
          answerClassName="bg-secondary/20 text-white"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-white">
            {moreSupport}
          </h3>
          <p className="mb-8 max-w-3xl text-white lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row mt-8">
            <a
              href={supportButtonUrl}
              className="w-full sm:w-auto px-6 py-3 text-lg bg-gradient-to-r from-[#402630] to-[#287823] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {supportButtonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
