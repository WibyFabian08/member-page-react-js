import React, { useEffect, useState } from "react";
import SideBarClass from "../parts/SideBarClass";

import YouTube from "react-youtube";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Status from "../parts/Status";

const DetailClass = ({ match }) => {
  const [data, setData] = useState({});

  const status = useSelector((state) => state.statusReducer);
  const message = useSelector((state) => state.statusReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_STATUS", value: "loading" });
    axios
      .get(`http://localhost:4000/courses/${match.params.class}`)
      .then((result) => {
        dispatch({ type: "SET_STATUS", value: "ok" });
        setData(result.data.data);
      })
      .catch((err) => {
        dispatch({ type: "SET_MESSAGE", value: err?.response?.data?.message });
        console.log(err.response.data.message);
      });
  }, [dispatch, match.params.class]);

  let currentLesson, currentChapter;

  if (status === "ok" && data?.chapter) {
    currentChapter =
      data?.chapter.find((chapter) => +chapter?.id === +match.params.chapter) ??
      data.chapter[0];
    if(currentChapter?.lesson) {
      currentLesson =
        currentChapter?.lesson?.find(
          (lesson) => lesson.video === match.params.uid
        ) ?? currentChapter.lesson[0];
    }
  }

  return (
    <div className="flex">
      <SideBarClass
        data={data}
        defaultURI={`/courses/${match.params.class}/${currentChapter?.id}/${currentLesson?.video}`}
      ></SideBarClass>
      <main className="flex-1 ">
        {status === "loading" && (
          <Status label="Wait! we are doing some research!!!"></Status>
        )}
        {message === "error" && <Status label={message}></Status>}
        <div className="px-5 py-10 ">
          <section className="flex flex-col">
            <h1
              className="text-3xl font-semibold mt-8 md:mt-0"
              style={{ color: "#132B50" }}
            >
              {currentLesson?.name ?? "Chapter Name"}
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Materi bagian dari {currentChapter?.name ?? "Chapter Name"}
            </p>
          </section>
          <section className="mt-8 flex flex-col">
            <div className="flex justify-start items-center">
              <div className="w-full">
                <div className="relative">
                  <div className="video-wrapper">
                    <YouTube
                      videoId={currentLesson?.video}
                      id={currentLesson?.video}
                      opts={{
                        playerVars: {
                          autoplay: 1,
                          controls: 1,
                          showinfo: 0,
                          rel: 0,
                        },
                      }}
                    ></YouTube>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DetailClass;
