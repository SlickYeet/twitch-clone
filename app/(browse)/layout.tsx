import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
