import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[800px] lg:w-[900px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/medical-dashboard-showing-patient-health-metrics--.jpg"
          alt="Medical dashboard preview showing patient data and AI health insights"
          width={900}
          height={540}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
