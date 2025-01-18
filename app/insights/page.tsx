import InsightsPage from "@/components/Insight";
import { Suspense } from "react";


export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InsightsPage />
    </Suspense>
  );
}
