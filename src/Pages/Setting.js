import React from "react";
import SettingForm from "../parts/SettingForm";
import SideBar from "../parts/SideBar";

const Setting = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <main className="flex-1 h-screen overflow-y-auto">
        <div className="px-10 py-3">
          <section className="mt-8 w-full lg:w-4/12">
            <SettingForm></SettingForm>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Setting;
