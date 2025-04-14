import { Navbar } from "@/src/components/Ui/navbar";

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
