import Link from "next/link";
import { DarkLayout } from "../../components/layout/DarkLayout";
import { MainLayout } from "../../components/layout/MainLayout";

export default function PricingPage() {
   return (
      <>
         <h1>Pricing Page</h1>
         <h1 className="title">
            Go to <Link href="/">Home</Link>
         </h1>

         <p className="description">
            Get started by editing{" "}
            <code className="code">pages/pricing/</code>
         </p>
      </>
   );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
   return (
      <MainLayout>
         <DarkLayout>
            { page }
         </DarkLayout>
      </MainLayout>
   )
}
