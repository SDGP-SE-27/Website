import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Button } from "./ui/button";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  heading?: string;
  description?: string;
  items?: FAQItem[];
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
    id: "faq-1",
    question: "How accurate is the price prediction?",
    answer: "Accuracy of the model is 86%, but the value still may vary.",
  },
  {
    id: "faq-2",
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
  supportButtonUrl = "/",
  supportButtonText = "Contact Us",
}: FAQProps) => {
  return (
    <div className="py-32 flex justify-center items-center">
      <div className="container space-y-16 flex flex-col items-center">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-black">
            {heading}
          </h2>
          <p className="text-black lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 text-black">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-black lg:text-lg">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-black">
            {moreSupport}
          </h3>
          <p className="mb-8 max-w-3xl text-black lg:text-lg">
            {supportDescription}
          </p>
          <AnimatedTooltip items={teamMembers} className="mt-8" />
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row mt-8">
            <Button
              className="w-full sm:w-auto px-6 py-3 text-lg bg-gradient-to-r from-[#402630] to-[#287823] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              asChild
            >
              <a href={supportButtonUrl}>{supportButtonText}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
