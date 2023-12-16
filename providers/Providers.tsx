import { ThemeProvider } from "./ThemeProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
