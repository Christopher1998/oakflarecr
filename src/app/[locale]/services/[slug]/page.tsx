import { renderService, serviceMetadata, serviceStaticParams, type ServiceParams } from "@/lib/service-page";

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceStaticParams("en");
}
export function generateMetadata(props: ServiceParams) {
  return serviceMetadata(props, "en");
}
export default function Page(props: ServiceParams) {
  return renderService(props, "en");
}
