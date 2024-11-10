import React, { useRef, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTelegram, FaUserCircle } from "react-icons/fa";
import src from "/img/android-chrome-512x512.png";

const Modal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setisOpen] = useState<boolean>(false);

  const openModal = () => {
    modalRef.current?.showModal();
    setisOpen((prev) => !prev);
  };
  const handelClose = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="btn hover:text-primary text-secondary animate-bounce"
        onClick={openModal}
      >
        <FaUserCircle size={26} />
      </button>
      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={handelClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello👋</h3>
          <div className="space-y-10">
            <div className="flex items-center justify-center">
              <img
                src={src}
                alt="logo"
                className={`w-24 cursor-pointer duration-500 ${
                  isOpen && "rotate-[360deg]"
                }`}
              />
            </div>
            <div className="text-center">
              <h1
                className={`origin-left font-semibold text-xl duration-300 ${
                  !isOpen && "scale-0"
                }`}
              >
                Mohammadreza{" "}
                <span className="text-2xl duration-300 italic text-primary">
                  Nadirkhanloo
                </span>
              </h1>
            </div>
            <div
              className={`flex items-center justify-center mx-3 mt-2 mb-3.5 gap-x-7 duration-500 ${
                !isOpen && "scale-0"
              }`}
            >
              <a
                target="_blank"
                href="https://github.com/MohammadrezaNadirkhanloo"
              >
                <FaGithub className="w-6 h-6 hover:text-secondary" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohammadreza-nadirkhanloo/"
              >
                <FaLinkedin className="w-6 h-6 hover:text-primary" />
              </a>
              <a target="_blank" href="mailto:m.nadirkhanloo1380@gmail.com">
                <BiLogoGmail className="w-6 h-6 hover:text-secondary" />
              </a>
              <a target="_blank" href="https://t.me/+989222032902">
                <FaTelegram className="w-6 h-6 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handelClose}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
