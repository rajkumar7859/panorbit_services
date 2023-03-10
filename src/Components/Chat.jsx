import { useState,useContext } from "react";
import { userContext } from "../Context/UserProvider";
import { BsChatRight ,BsChevronDown} from "react-icons/bs";

const Chat = () => {
    const { users } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const handleOpenChats = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
<div className="flex justify-end pr-[2rem]">
    <div style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }} className="w-[21%] rounded-[10px] ">
      <div
        className="text-xl text-white bg-sky-400 p-4 flex items-end justify-between gap-[2rem] rounded-t-[11px]"
        onClick={handleOpenChats}
      >
        <BsChatRight className="-mr-[8rem]" />
        <p>Chats</p>
        <BsChevronDown  />
      </div>
      {open ? <div className=" p-4 h-[16rem] overflow-y-auto scrollbar-thin">
       {
        users?.map((user)=> <div key={user.id}>
            <div className="flex gap-4 pb-[5px]">
                <img className="w-8 h-8 rounded-full" src={user.profilepicture} alt={user.username} /><p>{user.name}</p>
            </div>
        </div>)
       }
      </div> : ""}
    </div>
    </div>
  );
};

export default Chat;
