export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Finally, I can understand my lab results without waiting for my doctor's appointment. Aidera explains everything in simple terms.",
      author: "Sarah M.",
      role: "Patient",
    },
    {
      quote:
        "As someone with diabetes, tracking my health trends has never been easier. The AI insights help me stay on top of my condition.",
      author: "Michael R.",
      role: "Chronic Condition Patient",
    },
    {
      quote:
        "Aidera saves me so much time explaining test results to patients. They come to appointments already informed and engaged.",
      author: "Dr. Jennifer L.",
      role: "Primary Care Physician",
    },
  ]

  return (
    <section className="w-full px-5 py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Trusted by Patients & Providers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how Aidera is transforming healthcare understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm">
              <p className="text-foreground leading-relaxed mb-6 text-pretty">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
