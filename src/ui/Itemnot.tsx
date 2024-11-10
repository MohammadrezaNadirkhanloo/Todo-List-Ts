import src from "/img/Clipboard.svg";

const Itemnot: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-5 py-12 border-t border-gray-400 rounded-t-lg">
      <img src={src} alt="icon" className="w-20" />
      <div className="text-center">
        <p className="font-bold text-lg text-gray-300">
          You do not have any registered tasks yet.
        </p>
        <p className="text-gray-300">
          Create tasks and organize your to-do items
        </p>
      </div>
    </div>
  );
};

export default Itemnot;
