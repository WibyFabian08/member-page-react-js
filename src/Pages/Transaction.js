import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate";
import formatThousand from "../helpers/formatThousand";
import SideBar from "../parts/SideBar";
import Status from "../parts/Status";
import { myCourseAction } from "../redux/action/courseAction";
import { orderAction } from "../redux/action/orderAction";

const Transaction = () => {
  const myCourse = useSelector((state) => state.myCourseReducer);
  const status = useSelector((state) => state.statusReducer);
  const message = useSelector((state) => state.messageReducer);

  const orders = useSelector((state) => state.orderReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("BWAMICRO:token"));

    dispatch(myCourseAction(token.refresh_token));
    dispatch(orderAction());
  }, [dispatch]);

  return (
    <div className="flex">
      <SideBar></SideBar>
      <main className="flex-1 h-screen overflow-y-auto">
        {status === "loading" && (
          <Status label="Wait! we are doing some research!!!"></Status>
        )}
        {status === "error" && <Status label={message}></Status>}
        {status === "ok" && (
          <>
            <section className="p-5 flex-col">
              <h1
                className="text-3xl font-semibold mt-5 md:mt-0 px-5"
                style={{ color: "#132B50" }}
              >
                Transactions
              </h1>
              <p className="text-sm text-gray-400 px-5">
                Keep on track what you've invested
              </p>
            </section>
            <section className="flex flex-wrap flex-col px-6">
              {orders?.data.map((order, index) => {
                console.log(order);
                console.log(JSON.parse(order.meta_data));
                const data = JSON.parse(order.meta_data);

                return (
                  <div
                    key={index}
                    className="flex flex-wrap justify-start items-center mt-5 mb-4 sm:mb-6"
                  >
                    <div className="w-full sm:w-2/12 px-4">
                      <img src={data.course_thumbnail} alt="" />
                    </div>
                    <div className="w-auto sm:w-3/12 px-4">
                      <h1
                        className="text-lg font-semibold"
                        style={{ color: "#132B50" }}
                      >
                        {data.course_name}
                      </h1>
                      <p className="text-gray-400 text-sm capitalize">
                        {data.course_level}
                      </p>
                    </div>
                    {/* <div className="w-full sm:w-2/12 px-4">
                      <p className="font-semibold" style={{ color: "#132B50" }}>
                        Rp. {formatThousand(data.course.price)}
                      </p>
                    </div> */}
                    <div className="w-auto sm:w-2/12 px-4">
                      <p className="font-semibold" style={{ color: "#132B50" }}>
                        {formatDate(order.created_at)}
                      </p>
                    </div>
                    <div className="w-3/12 px-4">
                      {order.status === "success" && (
                        <Link
                          to={`courses/${order.course_id}`}
                          className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 text-gray-400"
                        >
                          Lihat Kelas
                        </Link>
                      )}
                      {order.status === "PENDING" && (
                        <a
                          href={`${order.snap_url}`}
                          className="button-form px-4 py-2 text-white mt-5"
                        >
                          Bayar Kelas
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Transaction;
