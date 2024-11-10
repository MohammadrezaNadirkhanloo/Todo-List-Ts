import src from "/img/Layer.svg";
import InputForm from "../ui/InputForm";

function Header() {
  return (
    <div className="container relative flex items-center justify-center h-full gap-x-2 ">
      <img className="w-7" src={src} alt="icon" />

      <h1 className="text-5xl font-semibold">
        <span className="text-primary">to</span>
        <span className="text-secondary">do</span>
      </h1>
      <div className="absolute inset-x-0 -bottom-6 ">
        <InputForm />
      </div>
    </div>
  );
}

export default Header;

