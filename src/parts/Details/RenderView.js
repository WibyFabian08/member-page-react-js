import React, { useState } from "react";
import Accordion from "../../components/Accordion";
import Item from "../../components/Accordion/Item";

import Youtube from "react-youtube";
import Modal from "../../components/Modal";

import IconLock from "../../../public/images/icon-lock.svg";
import IconPlay from "../../../public/images/icon-play-blue.svg";

function RenderView({ previews }) {
  return (
    <div>
      <Accordion>
        {(Active, toggle) => {
          return previews.map((item, index) => {
            return (
              <Item
                name={item.name}
                id={item.id}
                child={item.lesson}
                Active={Active}
                toggle={toggle}
                key={index}
              >
                {item.lesson.length > 0 &&
                  item.lesson.map((child, index2) => {
                    return (
                      <div
                        key={index2}
                        className="relative flex justify-between items-center hover:bg-gray-300 pl-8 pr-4 cursor-pointer"
                      >
                        <span className="text-gray-600 py-2">{child.name}</span>
                        {index2 === 0 && (
                          <Modal
                            content={(toggle) => (
                              <Youtube
                                className="w-full"
                                videoId={child.video}
                                id={child.video}
                                opts={{
                                  playerVars: {
                                    autoplay: 1,
                                    controls: 1,
                                    showinfo: 1,
                                    enablejsapi: 1
                                  },
                                }}
                              ></Youtube>
                            )}
                          >
                            {(toggle) => (
                              <span
                                onClick={toggle}
                                className="link-wrapped"
                              ></span>
                            )}
                          </Modal>
                        )}

                        {index2 == 0 && <IconPlay width={25}></IconPlay>}

                        {index2 !== 0 && <IconLock></IconLock>}
                      </div>
                    );
                  })}
              </Item>
            );
          });
        }}
      </Accordion>
    </div>
  );
}

export default RenderView;
