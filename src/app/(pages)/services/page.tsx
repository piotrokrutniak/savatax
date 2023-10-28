import ServicesSlider from "@/app/components/services/serviceSlider";
import ServiceTabs from "@/app/components/services/serviceTabs";
import Localization from "@/app/localization.json"

export default function ServicesPage({language = "en"}:{language: keyof typeof Localization}) {
  return (
    <>
    <section className="w-full pt-16 lg:pt-32 -top-20 relative bg-blue-400 bg-gradient-to-t from-blue-400 to-blue-600 flex place-items-center shadow-lg">
      <ServicesSlider language={language}/>
    </section>
    <section className="w-full p-2 xs:p-4 md:p-8 relative">
      <ServiceTabs language={language}/>
    </section>
    </>
  )
}