export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload your medical file",
      description: "Simply upload lab results, prescriptions, or any medical document you need help understanding.",
    },
    {
      number: "02",
      title: "AI interprets results",
      description:
        "Our advanced AI analyzes your documents and translates complex medical language into clear insights.",
    },
    {
      number: "03",
      title: "Get clear insights and next steps",
      description: "Receive personalized explanations, trends, and actionable recommendations for your health journey.",
    },
  ]

  return (
    <section className="w-full px-5 py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three simple steps to better understand your health data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-balance">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent transform translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
