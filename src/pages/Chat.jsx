import { MdAddCall } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import avatar from "../assets/avatar.svg";

const Chat = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      image: avatar,
    },
    {
      name: "Doe",
      status: "Available",
      image: avatar,
    },
    {
      name: "Mary",
      status: "Available",
      image: avatar,
    },
    {
      name: "Alexander",
      status: "Available",
      image: avatar,
    },
    {
      name: "Flemming",
      status: "Available",
      image: avatar,
    },
    {
      name: "Alexis",
      status: "Available",
      image: avatar,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%]  bg-gray-100 shadow-md">
        <div className="flex pl-10 items-center my-8">
          <img src={avatar} className="w-12" />
          <div className="ml-4">
            <h3 className="text-2xl">Tutorial Dev</h3>
            <p className="text-lg">My Account</p>
          </div>
        </div>
        <hr />
        <div className="ml-10 mt-5">
          <div className="text-gray-700">Messages</div>
          <div>
            {contacts.map((contact) => {
              return (
                <div className="flex items-center my-4 pb-2 border-b border-b-gray-400">
                  <div className="flex cursor-pointer">
                    <img src={contact.image} className="w-10" />
                    <div className="ml-4">
                      <h3 className="text-md">{contact.name}</h3>
                      <p className="text-sm text-gray-500">{contact.status}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-center">
        <div className="w-[75%]  bg-gray-100 h-[60px] mt-3 rounded-full flex justify-between items-center px-10">
          <div className="flex">
            <img src={avatar} className="w-12 items-center" />
            <div className="ml-6">
              <h3 className="text-lg">Alex</h3>
              <p className="text-sm text-gray-500">online</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <MdAddCall size={25} />
          </div>
        </div>
        <div className="w-full  overflow-y-auto border-b">
          <div className="h-[400px] p-5">
            <div className="max-w-[45%] p-2 bg-gray-100 rounded-b-lg rounded-tr-lg mb-4">
              Lorem ipsum dolor sit amet consectetur sint.
            </div>
            <div className="max-w-[45%] p-2 bg-gray-300 rounded-b-lg rounded-tl-lg ml-auto">
              Lorem ipsum dolor sit amet consectetur sint.
            </div>
          </div>
        </div>
        <div className="p-10 w-full flex items-center">
          <input
            type="text"
            placeholder="type message..."
            className="w-full p-2 px-4 border shadow-lg rounded-lg bg-gray-100 focus:border-none focus:outline-none"
          />
          <div className="cursor-pointer ml-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <IoIosSend className=" text-2xl" />
          </div>
          <div className="cursor-pointer ml-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <CiSquarePlus className=" text-2xl" />
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-gray-100 shadow-md"></div>
    </div>
  );
};

export default Chat;
