import { Suspense } from "react";

import { Navbar } from "./_components/navbar";
import { SidebarSkeleton, Sidebar } from "./_components/sidebar";
import { Container } from "./_components/Container";

const BrowseLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
