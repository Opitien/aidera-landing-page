import Image from "next/image"

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-600 text-sm font-medium leading-tight">
        Trusted by leading healthcare institutions
      </div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        <Image
          src="/mayo-clinic-logo.jpg"
          alt="Mayo Clinic"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/johns-hopkins-logo.jpg"
          alt="Johns Hopkins Medicine"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/cleveland-clinic-logo.jpg"
          alt="Cleveland Clinic"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/kaiser-permanente-logo.jpg"
          alt="Kaiser Permanente"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/mount-sinai-logo.jpg"
          alt="Mount Sinai Health System"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/mass-general-logo.jpg"
          alt="Massachusetts General Hospital"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/cedars-sinai-logo.jpg"
          alt="Cedars-Sinai Medical Center"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
        <Image
          src="/stanford-health-logo.jpg"
          alt="Stanford Health Care"
          width={400}
          height={120}
          className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
        />
      </div>
    </section>
  )
}
