import { Button } from "@/components/ui/button"
import { Header } from "./header"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[350px] md:w-[1220px] md:h-[500px] lg:h-[650px] md:px-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-12 md:mt-[100px] lg:mt-[130px] px-4">
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight text-balance">
          Aidera – AI-Powered Health Assistant
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto text-pretty">
          Understand your health data in clear, simple language with AI that cares.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg">
          Get Started Free
        </Button>
        <Button
          variant="outline"
          className="border-border text-foreground hover:bg-accent px-8 py-3 rounded-full font-medium text-base bg-transparent"
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}
