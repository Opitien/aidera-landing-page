export function VisionStatement() {
  return (
    <section className="w-full px-5 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl blur-3xl" />
          <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed text-balance">
              "Our mission is to make healthcare easier, clearer, and more human — powered by AI you can trust."
            </blockquote>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
