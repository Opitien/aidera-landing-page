"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is Aidera?",
    answer:
      "Aidera is an AI-powered health assistant that helps you understand medical documents, track your health trends, and receive personalized medical advice — all explained in simple, clear language.",
  },
  {
    question: "Does Aidera provide medical advice?",
    answer:
      "Yes. Aidera can provide personalized health guidance, reminders, and consultancy based on your medical data and inputs. ⚠️ Disclaimer: Aidera does not replace professional medical care. Always consult a licensed doctor for diagnoses, prescriptions, or treatment decisions.",
  },
  {
    question: "How does Aidera work?",
    answer:
      "You can upload medical files (lab results, prescriptions, scans) or simply ask health-related questions. Aidera interprets your data, explains results in plain language, and provides health recommendations to support your next steps.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Absolutely. Aidera uses end-to-end encryption and strict privacy standards to ensure that your sensitive medical information is always safe.",
  },
  {
    question: "Who can use Aidera?",
    answer:
      "Patients who want clear explanations of their results, individuals managing chronic conditions needing regular tracking, anyone looking for AI-guided health advice with easy-to-understand insights, and healthcare providers who want to save time explaining test results.",
  },
  {
    question: "Can I use Aidera instead of seeing a doctor?",
    answer:
      "No. Aidera is designed to support and guide you, but it is not a replacement for medical professionals. For urgent issues, diagnoses, or treatments, please consult a licensed physician.",
  },
  {
    question: "Does Aidera offer consultancy?",
    answer:
      "Yes. Aidera can provide ongoing health insights and advice tailored to your data. In future updates, licensed physicians may verify AI-generated insights for added reliability.",
  },
  {
    question: "Can Aidera connect with wearables or apps?",
    answer:
      "Not yet, but future versions will integrate with wearables like smartwatches and glucose monitors for real-time health monitoring.",
  },
  {
    question: "How much does Aidera cost?",
    answer:
      "There will be a free version with essential features, plus premium plans for advanced tools like consultancy tracking, trend reports, and future doctor-collaboration features.",
  },
  {
    question: "How do I get started?",
    answer: "Sign up, upload a health document or ask a question, and let Aidera provide you with insights in seconds.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about Aidera and how it can support your health journey
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
