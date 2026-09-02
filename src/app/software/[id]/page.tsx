import { SOFTWARE_CATALOG } from "@/data/software";
import SoftwareDetailClient from "./SoftwareDetailClient";

// Tells Next.js to pre-render every software page at build time (required for static export)
export async function generateStaticParams() {
  return SOFTWARE_CATALOG.map((s) => ({ id: s.id }));
}

export default function SoftwareDetailPage({ params }: { params: { id: string } }) {
  const software = SOFTWARE_CATALOG.find((s) => s.id === params.id) || SOFTWARE_CATALOG[0];
  return <SoftwareDetailClient software={software} />;
}
