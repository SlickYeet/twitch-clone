import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <Toaster theme="light" position="bottom-center" />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
