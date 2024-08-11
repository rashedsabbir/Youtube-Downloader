/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center items-center">
                <h3 className=" text-black font-bold font-mono text-xl ">
                  Developed By
                </h3>
              </div>
              <div className="flex lg:flex-row flex-col gap-2 w-auto">
                <div className="card border rounded-l-full w-full hover:shadow-2xl relative flex flex-col mx-auto shadow-lg bg-gray-200">
                  <div className="buttons flex flex-col gap-1 absolute top-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                    <a
                      className="font-bold text-xs text-gray-500"
                      href="https://www.linkedin.com/in/mushfiqur--rahman/"
                    >
                      <div className="add border rounded-l-2xl rounded-r-sm bg-gray-300 border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white flex flex-row gap-1 items-center justify-center">
                        <img
                          className="w-4 h-4"
                          src="../../linkedin.svg"
                          alt=""
                        />
                        <span className="text-md">LinkedIn</span>
                      </div>
                    </a>
                    <a
                      className="font-bold text-xs text-gray-500"
                      href="https://github.com/Mushfiqur-Rahman-Robin"
                    >
                      <div className="add border rounded-l-2xl rounded-r-sm bg-gray-300 border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white flex flex-row gap-1 items-center justify-center">
                        <img
                          className="w-4 h-4"
                          src="../../github.svg"
                          alt=""
                        />
                        <span className="text-md">GitHub</span>
                      </div>
                    </a>
                  </div>
                  <div className="profile w-full flex m-3 ml-4 text-gray-500">
                    <img
                      className="w-28 h-28 p-1 bg-white rounded-full"
                      src="../../mushfiq.jpeg"
                      alt=""
                    />
                    <div className="title mt-11 ml-3 font-bold flex flex-col justify-end">
                      <div className="name break-words">
                        Md. Mushfiqur Rahman
                      </div>
                      <div className="add font-semibold text-sm italic dark">
                        Data Scientist
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border rounded-l-full rounded-r-sm w-full hover:shadow-2xl relative flex flex-col mx-auto shadow-lg bg-gray-200 ">
                  <div className="buttons flex flex-col gap-1 absolute top-0 right-0 font-bold text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                    <a
                      className="font-bold text-xs text-gray-500"
                      href="https://www.linkedin.com/in/rashedsabbir"
                    >
                      <div className="add border rounded-l-2xl rounded-r-sm bg-gray-300 border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white flex flex-row gap-1 items-center justify-center">
                        <img
                          className="w-4 h-4"
                          src="../../linkedin.svg"
                          alt=""
                        />
                        <span className="text-md">LinkedIn</span>
                      </div>
                    </a>
                    <a
                      className="font-bold text-xs text-gray-500"
                      href="https://github.com/rashedsabbir"
                    >
                      <div className="add border rounded-l-2xl rounded-r-sm bg-gray-300 border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white flex flex-row gap-1 items-center justify-center">
                        <img
                          className="w-4 h-4"
                          src="../../github.svg"
                          alt=""
                        />
                        <span className="text-md">GitHub</span>
                      </div>
                    </a>
                  </div>
                  <div className="profile w-full flex m-3 ml-4 text-gray-500">
                    <img
                      className="w-28 h-28 p-1 bg-white rounded-full"
                      src="../../rashed.jpeg"
                      alt=""
                    />
                    <div className="title mt-11 ml-3 font-bold flex flex-col justify-end">
                      <div className="name break-words">
                        Rashedul Hassan Sabbir
                      </div>
                      <div className="add font-semibold text-sm italic dark">
                        Full-Stack Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
