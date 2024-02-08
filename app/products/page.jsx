import { Suspense } from "react";
import SkeletonChildren from "../components/api/installImages";
import Loading from "../loading/loading";

export default async function Products() {
  return (
    <Suspense fallback={<Loading />}>
      <SkeletonChildren />
    </Suspense>
  );
}
