import { faker } from '@faker-js/faker';
import { IoCall, IoCloseCircle } from 'react-icons/io5';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { IoMdClose } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/im";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';


function GroupCall() {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-gray-200 shadow-xl border-gray-50 space-y-2 grid gap-4 auto-rows-auto">

            {/* Top Bar with Call Action */}
            <div className="text-white col-span-6 flex items-center justify-between">
                <button
                    className="flex items-center bg-green-400 hover:bg-green-500 space-x-1 px-6 py-2.5 rounded-full"
                >
                    <IoCall className="text-base" />
                    <span className="uppercase text-sm font-medium tracking-wider">Calling</span>
                    <IoMdClose className="text-xl" />
                </button>
                
                <div className="flex space-x-2">
                    <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full h-10 w-10 flex items-center justify-center">
                        <BiDotsHorizontalRounded 
                            className="text-gray-700 text-2xl" 
                        />
                    </button>
                    
                    <button className="bg-red-400 hover:bg-red-500 p-1 rounded-full h-10 w-10 flex items-center justify-center">
                        <ImPhoneHangUp className="text-lg" />
                    </button>
                </div>
            </div>

            {/* User Names */}
            <div className="col-span-6 flex space-x-4">
                <img 
                    src={`${faker.image.avatar()}`} 
                    alt="Randy and Thomas" 
                    className="w-14 h-14 rounded-full"
                />
                <div className="">
                    <h4 className="text-xl text-gray-700 font-medium">
                        Randy and Thomas
                    </h4>
                    <p className="text-lg font-medium text-gray-400">
                        Calling to others adds to this group
                    </p>
                </div>
            </div>

            {/* Avatars Grid */}
            <div className="col-span-5 grid grid-cols-5 gap-4">
                
                {[...Array(2)].map((user, i) => (
                    <div 
                        key={i}
                        className="relative"
                    >
                        <div className="bg-green-400 h-6 w-6 absolute -bottom-1 -right-1 rounded-full border-4 border-white" />
                        <img 
                            src={faker.image.avatar()} 
                            alt="user" 
                            className="w-14 h-14 rounded-full"
                        />
                    </div>
                ))}

                {[...Array(6)].map((user, i) => (
                    <div 
                        key={i}
                    >
                        <div className="bg-green-400 h-4 w-4 absolute bottom-0 right-0 rounded-full border-2 border-white" />
                        <img 
                            src={faker.image.avatar()} 
                            alt="user" 
                            className="w-14 h-14 rounded-full"
                        />
                    </div>
                ))}

                <div style={{ width: 68, height: 68}} className="relative z-0"> 
                    <div className="absolute top-0 -right-2 z-10 bg-white rounded-full p-1 shadow-sm shadow-gray-400">
                        <IoMdClose className="text-xl text-gray-400" />
                    </div>
                    
                    <CircularProgressbarWithChildren
                        value={42}
                        text={`${66}%`}
                        strokeWidth={6}
                        styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(79,203,132, ${66 / 100})`,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.0turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#d6d6d6',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '#f88',
                                    // Text size
                                    fontSize: '16px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '#4fcb84 ',
                                },
                        }}
                    >
                        <div className="w-14 h-14">
                            <img 
                                src={faker.image.avatar()} 
                                alt="user" 
                                className="rounded-full"
                            />
                        </div>
                </CircularProgressbarWithChildren>
                </div>

                
                
                {/* Gauge */}
                {/* https://www.youtube.com/watch?v=FnUkVcQ_3CQ&ab_channel=dcode */}
            </div>
        </div>
    );
}

export default GroupCall;