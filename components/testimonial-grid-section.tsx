import Image from "next/image"

const testimonials = [
  {
    quote:
      "Aidera's ability to analyze patient data and provide instant insights has transformed our diagnostic workflow. The AI suggestions feel like having a specialist consultant available 24/7.",
    name: "Dr. Sarah Chen",
    company: "Mayo Clinic",
    avatar: "/professional-female-doctor-headshot.png",
    type: "large-teal",
  },
  {
    quote:
      "Integrating Aidera with our EHR system was seamless. It saved us weeks of manual data entry and improved our patient care coordination.",
    name: "Dr. Michael Rodriguez",
    company: "Johns Hopkins",
    avatar: "/professional-male-doctor.png",
    type: "small-dark",
  },
  {
    quote:
      "The medical document analysis feature has been revolutionary. We're processing lab results and medical reports in minutes instead of hours.",
    name: "Nurse Patricia Williams",
    company: "Cleveland Clinic",
    avatar: "/professional-female-nurse-headshot.png",
    type: "small-dark",
  },
  {
    quote:
      "Aidera brought all our medical systems together in one intelligent interface. Our clinical workflow has never been more efficient.",
    name: "Dr. Robert Kim",
    company: "Kaiser Permanente",
    avatar: "/professional-male-doctor.png",
    type: "small-dark",
  },
  {
    quote:
      "We started with the trial just to test it, but within days we upgraded to the full system. Now it's essential to our daily practice.",
    name: "Dr. Lisa Thompson",
    company: "Mount Sinai",
    avatar: "/professional-female-doctor-headshot.png",
    type: "small-dark",
  },
  {
    quote:
      "Patient consultations are more thorough now. With Aidera's real-time health insights, we catch potential issues earlier than ever.",
    name: "Dr. James Foster",
    company: "Mass General",
    avatar: "/professional-male-doctor.png",
    type: "small-dark",
  },
  {
    quote:
      "The HIPAA-compliant AI analysis gives us confidence in data security while providing unprecedented clinical decision support for complex cases.",
    name: "Dr. Maria Gonzalez",
    company: "Cedars-Sinai",
    avatar: "/professional-female-doctor-headshot.png",
    type: "large-light",
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type }) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8"
    nameClasses += " text-primary-foreground text-base font-normal leading-6"
    companyClasses += " text-primary-foreground/60 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-2xl font-medium leading-8"
    nameClasses += " text-foreground text-base font-normal leading-6"
    companyClasses += " text-muted-foreground text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6"
    nameClasses += " text-foreground text-sm font-normal leading-[22px]"
    companyClasses += " text-muted-foreground text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex justify-start items-center gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`w-${avatarSize / 4} h-${avatarSize / 4} ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Healthcare made smarter
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Hear how healthcare professionals improve patient care, streamline workflows,"} <br />{" "}
            {"and make better clinical decisions using Aidera's AI-powered health assistant"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}
