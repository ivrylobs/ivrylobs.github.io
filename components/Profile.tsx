import { Icon } from "@iconify/react";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  return (
    <>
      <img src="/profile.jpg" alt="" className="rounded-full w-40  mb-3" />
      <h1 className="font-name text-center lg:text-end uppercase text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-50">
        Roongpetch
        <br />
        <span className="text-3xl">Kunthakuldusadee</span>
      </h1>
      <p className="mt-2 text-xl text-zinc-50 text-center lg:text-end font-jp">
        私のニックネームは アイス です。
      </p>
      <div className="flex justify-center">
        <div className="font-raleway text-zinc-900 bg-gradient-to-r from-orange-500 to-red-500 w-48 text-center p-2 rounded-full mt-3 font-bold drop-shadow-2xl">
          Fullstack Developer
        </div>
      </div>
      <div className=" flex items-center font-raleway text-zinc-900 justify-center  bg-gradient-to-r from-emerald-300 to-emerald-600 drop-shadow-2xl  text-center p-2 rounded-full w-72 mt-4 font-bold ">
        <Icon icon="ic:round-email" className="w-6 h-6 mr-1" />
        roongpetch.kun@gmail.com
      </div>
      <div className="flex font-raleway items-center justify-end text-zinc-50 my-3">
        <Icon icon="ant-design:copyright-circle-filled" className="mr-1" />
        <p>2022 Roongpetch K. All rights reserved.</p>
      </div>
    </>
  );
};

export default Profile;
