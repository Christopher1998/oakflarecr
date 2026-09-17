import { renderService, serviceMetadata, serviceStaticParams, type ServiceParams } from "@/lib/service-page";

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceStaticParams("es");
}
export function generateMetadata(props: ServiceParams) {
  return serviceMetadata(props, "es");
}
export default function Page(props: ServiceParams) {
  return renderService(props, "es");
}
