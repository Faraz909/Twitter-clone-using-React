import { useState } from "react";
// import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiNotification3Fill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegBookmark } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import twitter from "./assets/twitter.png";
import user from "./assets/user.png";
// import user2 from "./assets/users2.png";
import { BiSolidEdit } from "react-icons/bi";
import profile from "./assets/faraz.jpg";
import { FaRegComment } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { PiGif } from "react-icons/pi";
import { GrEmoji } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { GoKebabHorizontal } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { RiNotification3Line } from "react-icons/ri";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Home: React.FC<{ onEditComplete: (obj: any) => void }> = (props) => {


    const handleInputChange = (e: any) => {
        settweet(e.target.value);
    };

    const [tweet, settweet] = useState('')
    const characterLimit = 300;

    // const remaining = characterLimit - tweet.length;
    const addtweet = (event: any) => { settweet(event.target.value) };
    const circlevalue = 100;


    // onclick
    // const tweet = "Your tweet goes here";

    // Calculate the number of characters added since the last update
    // const charactersAdded = tweet.length % 2 === 0 ? 2 : 1;

    // Update the circlevalue based on the characters added
    // const updatedCircleValue = circlevalue - Math.floor(tweet.length / 2);

    // Calculate the remaining characters within the character limit
    const remaining = characterLimit - tweet.length;
    // change color 
    const circleDecreaseFactor = 3;
    const adjustedCircleValue = circlevalue - Math.floor(tweet.length / circleDecreaseFactor);
    // const color=(index: number)=>{
    // const [isRed, setIsRed] = useState(false)
    // const toggleColor = () => {
    // setIsRed(!isRed);
    // };
    // }

    // Modal

    const handleKeyPress = (event: any) => {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            // Call your onClick function or perform any action here
            handleSubmit(event);
        }
    };

    const tweethandle = (index: number) => {
        var obj: any = data[index]
        var newCount = obj['retweetNumber'] + 1
        data[index] = { ...obj, retweetNumber: newCount }
        setData([...data])
    };

    const likehandle = (index: number) => {
        var obj: any = data[index]
        var newCount = obj['like'] + 1
        data[index] = { ...obj, like: newCount }
        setData([...data])
    };


    // empty
    const handleSubmit = (event: any) => {

        settweet('');
        event.preventDefault();
    };

    const handlePush = () => {
        setData((prevData: any) => [...prevData, latest]);
    };

    const [data, setData] = useState<any>([
        // {
        //     name: 'Faraz ahmad',
        //     mail: '@faraz.fz00',
        //     time: '.1hour',
        //     heading: 'dolor sit amet consectetur, adipisicing elit. Veniam enim quo repellendus aut error nihil ',
        //     Des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam enim quo repellendus aut error nihil ',


        // },

        // {
        //     name: 'Muhammad Waqar',
        //     mail: '@waqar_656',
        //     time: '.4hour',
        //     heading: 'dolor sit amet consectetur, adipisicing elit. Veniam enim quo repellendus aut error nihil ',
        //     Des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam enim quo repellendus aut error nihil ',
        // },

    ])


    const handleTextAreaHeight = () => {
        if (tweet.length > 0) {
            const lines = tweet.length /45

            if (lines >= 2) {
                const l = lines 
                console.log(l)
                return l + 1
            } else {
                return 2
            }

        } else {
            return 2
        }

    }


    const latest = {
        name: 'Faraz Ahmad',
        mail: '@faraz.fz00',
        time: '.1hour',
        heading: tweet,
        retweetNumber: 0,
        like: 0,
        liked: ''
    }


    return (
        <>
            <div className="flex ml-[200px] ">
                <div className=" w-[20%] flex  flex-col  gap-1 text-[20px] pl-[5%] pt-4  ">
                    <div className=" fixed h-[300px] ">
                        <div className="relative">
                            <div className="flex flex-col justify-center hover:cursor-pointer absolute ">
                                <div className="pl-5 mb-2"><img src={twitter} alt="twitter" className="w-[35px]" /></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg  text-start hover:font-bold"> <div className=" text-[40px] pb-2"><GoHomeFill /></div> <p className="pl-[20px] text-2xl mt-[5px] font-bold">Home</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className=" text-[40px] pb-2"><CiSearch /></div> <p className="pl-[20px] text-2xl mt-[5px]">Explore</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg w-[250px] text-centerhover:font-bold"><div className=" text-[40px] pb-2"><RiNotification3Line /></div><p className="pl-[20px] text-2xl mt-[5px] hover:font-bold">Notification</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg hover:font-bold"><div className=" text-[40px] pb-2"><MdOutlineMail /></div> <p className="pl-[20px] text-2xl mt-[5px]">Messages</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className=" text-[40px] pb-2"><BiSolidEdit /></div><p className="pl-[20px] text-2xl mt-[5px]">Grok</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className=" text-[40px] pb-2 "><LiaClipboardListSolid /></div><p className="pl-[20px] mt-[5px] text-2xl">Lists</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className=" text-[40px] pb-2 "><FaRegBookmark /></div><p className="pl-[20px] text-2xl mt-[5px]">Bookmarks</p></div>

                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className="mb-2"><img src={twitter} alt="twitter" className="w-[35px]" /></div><p className="pl-[20px] text-2xl mt-[5px]">Premium</p></div>
                                <div className=" flex p-4 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className="mb-2"><img src={user} alt="twitter" className="w-[35px]" /></div><p className="pl-[20px] text-2xl mt-[5px]">Profile</p></div>
                                <div className=" flex p-3 hover:bg-blue-100 rounded-lg text-start hover:font-bold"><div className=" text-[40px] pb-2 "><CiCircleMore /></div><p className="pl-[20px] text-2xl mt-[5px]">More</p></div>
                                <div className="text-center text-white rounded-full bg-blue-400 pt-3 pb-4 pl-4 pr-4 font-bold cursor-pointer  text-2xl mt-[5px]">Post</div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* posting */}

                <div className=" w-[670px]  mt-4 ml-8">
                    <div className="border-[0.5px] p-2 flex flex-col  ">
                        <div className="flex pl-4  ">
                            <div className="pt-4"><img className="rounded-full w-[55px]" src={profile} alt="" /></div>
                            <div className="pl-4">
                                <form>
                                    <textarea placeholder="what is happening ?!" className="  pt-[18px] w-[500px] min-h-[80px] outline-none text-[25px]  resize-none hyphens-auto whitespace-normal "
                                        value={tweet}
                                        onChange={addtweet}
                                        maxLength={characterLimit}
                                        rows={handleTextAreaHeight()}
                                    />
                                </form>
                            </div>

                        </div>
                        {/* {tweet.length >= characterLimit && (
                            <p className="text-red-600">Text should not exceed 300 characters</p>
                        )} */}

                        <div className="flex justify-between ">
                            <div className="flex gap-[20px] ml-[90px] mt-3 text-blue-500 ">
                                <div className="text-[20px] font-bold mt-[12px]"><RiGalleryLine /></div>
                                <div className="text-[25px] pb-[20px] font-bold mt-[10px] "><PiGif /></div>
                                <div className="text-[23px] mb-2 font-bolder mt-[11px]"> <span className="border=[2px]"><GrEmoji /></span></div>
                                <div className="text-[18px]  mt-[13px]"><SlCalender /></div>
                                <div className="text-[20px] font-bold mt-[13px]"><RiGalleryLine /></div>
                                <div className="text-[20px] text-blue-500/50 flex mt-[12px]"><SlLocationPin /> <span></span></div>

                                {tweet && (<div className=" mb-[3px] flex justify-center text-[20px] items-center " style={{ width: 40, height: 40, }}>

                                    {remaining > 0 && <CircularProgressbar strokeWidth={10} value={adjustedCircleValue} text={remaining} styles={{
                                        // Customize the root svg element

                                        // Customize the circle behind the path, i.e. the "total progress"
                                        trail: {
                                            // Trail color
                                            stroke: '#FF0000',
                                            width: '20px',
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                                        },
                                        trail: {
                                            // Trail color
                                            stroke: '#FF0000',
                                            width: '20px',
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

                                        },

                                        // Customize the text
                                        text: {
                                            // Text color
                                            fill: 'black',
                                            // Text size
                                            fontSize: '25px',
                                        },
                                        // Customize background - only used when the `background` prop is true

                                    }} />}
                                    <div>{remaining < 1 && (
                                        <div className=" mb-[1px] flex justify-center text-[10px] text-red-600 border-red-500 border-4 rounded-full items-center w-[40px] h-[40px] " >0</div>
                                    )}</div>
                                </div>)}
                            </div>

                            <div className="flex justify-end pr-[10px] mt-3"><button onSubmit={handleSubmit} type="submit" className="text-white rounded-full bg-blue-300 hover:bg-blue-700 text-[18px]   pr-[25px] pl-[25px] pt-0 font-bold cursor-pointer color-red-600" onClick={() => {
                                handlePush()
                                handleSubmit('')
                            }} >Post</button>
                            </div>

                        </div>

                    </div>
                    {/* Static data here */}

                    {/* data */}

                    {data.map((x: any, i: number) => {

                        return (

                            <div className="flex border-[.5px] border-t-0  p-4 " key={i}>
                                <div className="flex flex-col ml-[2px] relative">
                                    <div className="flex  ">
                                        <div className=" ml-[5px]">
                                            <img className="rounded-full w-[60px] " src={profile} alt="" /></div>
                                        <div className="flex justify-between  w-[600px]">

                                            <div className="flex mt-2 pl-1">

                                                <div className=" ml-2 font-bold text-xl">{x.name}</div>
                                                <div className=" ml-2 text-lg text-gray-400">{x.mail}</div>
                                                <div className=" ml-2 text-lg text-gray-400">{x.time}</div>
                                            </div>
                                            <div className="mt-2 mr-2 text-2xl">
                                                <GoKebabHorizontal />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-[72px] w-[550px] s text-2xl mt-[-20px] hyphens-auto">{x.heading}</div>
                                    <div className="flex flex-col ml-[60px] w-[550px] cursor-pointer">
                                        {/* <div className="mt-2 ml-2 border-2 p-4 w-[550px] rounded-lg border-gray-300 text-xl ">{data[0].Des}</div> */}
                                        <div className="flex justify-between mt-2 pl-[10px] pr-2 " >
                                            <div className="text-[20px] mt-[2px] flex items-center gap-2" >< FaRegComment onClick={() => {
                                            }} /> <p>67</p></div>

                                            <div className={`text-[20px] mt-[2px] flex items-center gap-2 ${x['retweetNumber'] != 0 ? 'text-red-600' : 'text-black'} `}><RiLoopLeftLine onClick={() => {
                                                tweethandle(i)
                                            }} /><p>{x.retweetNumber}</p></div>

                                            <div className={`text-[20px] mt-[2px] flex items-center gap-2 ${x['like'] != 0 ? 'text-red-600' : 'text-black'}`}><FaRegHeart onClick={() => {
                                                likehandle(i)
                                            }} /><p>{x.like}</p></div>
                                            <div className="text-[20px] mt-[2px] flex items-center gap-2"><VscGraph /><p></p>18</div>
                                            <div className="flex gap-2">
                                                <div className="text-[20px]  mt-[2px]"><FaRegBookmark /></div>
                                                <div className="text-[25px] "><MdOutlineFileUpload /></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
}