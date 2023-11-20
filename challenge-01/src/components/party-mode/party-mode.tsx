"use client"

import { AiFillYoutube } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { MediaItem, Member } from "./data";

type PartyModeProps = {
    media: MediaItem
}

import { GiPartyPopper } from 'react-icons/gi';

function PartyMode({ media }: PartyModeProps) {

    console.log(media)
    return (
        <div className="bg-white rounded-3xl bg-clip-border overflow-hidden shadow-lg shadow-gray-200">
            <div
                className="h-48 w-[500px] bg-top p-4 flex flex-col place-self-start"
                style={{ 
                    backgroundImage: `url(${media.bannerUrl})`,
                }}
            >
                
                <div 
                    className="flex items-center bg-gradient-to-r from-orange-400 to-pink-500 rounded-md uppercase py-1.5 px-3 space-x-2 text-sm text-white tracking-wider z-10 hover:bg-red-500 self-start"
                >
                    <GiPartyPopper className="w-4 h-4" />
                    <span>Party Mode</span>
                </div>

                <div className="flex items-center space-x-2 mt-auto">
                    <span className="p-1 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                        <AiFillYoutube className="text-white text-xl" />
                    </span>
                    <p className="text-xl text-white capitalize">{media.name} - Trailer</p>
                </div>
                
            </div>
            

            <div className="p-4 space-y-4">
                <div className="flex space-x-4 items-center">
                    <img 
                        alt="avatar" 
                        src={media.groups[0].avatar} 
                        className="w-16 h-16 rounded-full"
                    />

                    <div className="">
                        <h3 className="text-xl font-semibold capitalize">
                            {media.groups[0].name}
                        </h3>
                        <p className="text-gray-400">
                            Active for {media.groups[0].latestActivity} minutes
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex pl-4 items-center">
                        {media.groups[0].members.map((member: Member) => (
                            <img 
                                src={member.avatar}
                                alt={member.avatar} 
                                className="h-12 w-12 rounded-full -ml-4 border-white border-[3px]"
                            />
                        ))}
                        <div className="h-12 w-12 p-2 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold -ml-4 border-white border-[3px]">
                            <span className="text-sm">
                                +{media.groups[0].members.length}
                            </span>
                        </div>
                    </div>

                    <button className="flex items-center space-x-2 ml-auto bg-green-400 py-2 px-4 self-center rounded-full hover:bg-green-500 transition">
                        <BsCameraVideoFill className="h-6 w-6 text-white" />
                        <span className="text-white">Join</span>
                    </button>
                </div>
            </div>

            
            {/* group */}
                {/* Avatar */}
                {/* Big Little Lies fanboys */}
                {/* Active */}
            {/* 5 avatars and +5 placeholder */}
            {/* join button */}
        </div>
    );
}

export default PartyMode;