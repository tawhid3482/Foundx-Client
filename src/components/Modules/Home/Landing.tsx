import { Input } from "@heroui/input";
import { SearchIcon } from "../../../assets/icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-70px)] bg-[url('/wallet.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form action="" className="flex-1">
          <Input
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Searching"
            size="lg"
            startContent={<SearchIcon className="pointer-events-none" />}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
