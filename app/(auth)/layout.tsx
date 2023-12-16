import { Logo } from "./_components/Logo";

const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
