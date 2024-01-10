import { FaRegComment } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineFileUpload } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";
import profile from "./assets/faraz.jpg";
import { FaRegBookmark } from "react-icons/fa6";
import { Home } from "./Home";
export const Tweet = (props: any) => {
    return (
        <>
            <div className="flex border-[.5px]   p-4 ">


                <div className="flex flex-col">
                    <div className="flex ">
                        <div className="flex justify-between w-[630px]">

                            <div className="flex mt-2 pl-2">
                                <div>
                                    <img className="rounded-full w-[50px] " src={profile} alt="" /></div>
                                <div className=" ml-2 font-bold text-xl">{props.name}</div>
                                <div className=" ml-2 text-lg text-gray-400">{props.mail}</div>
                                <div className=" ml-2 text-lg text-gray-400">{props.time}</div>
                            </div>
                            <div className="mt-2 text-2xl">
                                <GoKebabHorizontal />
                            </div>
                        </div>
                    </div>
                    <div className="ml-[60px] w-[570px] text-2xl">{props.Des}</div>
                    <div className="flex flex-col ml-[60px] w-[550px]">
                        {/* <div className="mt-2 ml-2 border-2 p-4 w-[550px] rounded-lg border-gray-300 text-xl ">{data[0].Des}</div> */}
                        <div className="flex justify-between mt-2 pl-[10px] pr-2 cursor-pointer">
                            <div className="text-[20px] mt-[2px]"><FaRegComment /></div>
                            <div className="text-[20px] mt-[2px]"><RiLoopLeftLine /></div>
                            <div className="text-[20px] mt-[2px]"><FaRegHeart /></div>
                            <div className="text-[20px] mt-[2px]"><VscGraph /></div>
                            <div className="flex gap-2">
                                <div className="text-[20px]  mt-[2px]"><FaRegBookmark /></div>
                                <div className="text-[25px] "><MdOutlineFileUpload /></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}