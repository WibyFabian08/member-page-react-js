import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

function Modal(props) {
  const ModalRef = useRef(null);

  const [Display, setDisplay] = useState(false);
  const [Ready, setReady] = useState(false);
  const [Allow, setAllow] = useState(true);

  // buat function allow toggle
  function toggleAllow() {
    setAllow(!Allow);
  }

  function toggle() {
    // if (props.toggleModal) {
    //   props.toggleModal();
    // } else {
        setDisplay(!Display);
    // }
  }

  function handleClickOutside(event) {
    if (
      ModalRef?.current &&
      !ModalRef?.current?.contains?.(event.target) &&
      Allow
    ) {
      toggle();
    }
  }

  // buat elemen dengan id modal
  useEffect(() => {
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", "modal");
    setReady(true);

    if (!document.getElementById("modal")) {
      document.body.appendChild(rootContainer);
    }
  }, []);

  // tambah event click pada element yang tadi dibuat
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // tambah kelas modal-open ketika Display atau props.in true
  useEffect(() => {
    if (Display || props.in) {
      document.querySelector("body").classList.add("modal-open");
    }

    return () => {
      document.querySelector("body").classList.remove("modal-open");
    };
  }, [Display, props.in]);

  if (!Ready) {
    return null;
  }

  return (
    <>
      {props.children(toggle)}
      {document && document.getElementById("modal") && (
        <div>
          {createPortal(
            <CSSTransition
              in={Display ?? props.in}
              timeout={500}
              onExit={toggleAllow}
              onExited={toggleAllow}
              classNames="overlay transition-all duration-300"
              unmountOnExit
            >
              <div className="overlay fixed inset-0 h-screen z-50">
                <div className="bg-black opacity-25 inset-0 absolute z-10"></div>
                <div className="absolute z-20 flex items-center justify-center inset-0">
                  <div
                    // style={props.modalStyle}
                    ref={ModalRef}
                    className="bg-white shadow-2xl w-full md:w-auto max-h-4xl md:max-w-3xl relative"
                  >
                    <div className="cursor-pointer absolute right-0 pr-2">
                      <span onClick={toggle}>X</span>
                    </div>

                    {props.content(toggle)}
                  </div>
                </div>
              </div>
            </CSSTransition>,
            document.getElementById("modal")
          )}
        </div>
      )}
    </>
  );
}

export default Modal;
