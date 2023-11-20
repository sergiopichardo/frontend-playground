import { Cross2Icon } from "@radix-ui/react-icons";
import { AiFillYoutube } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";

function FindMusic() {
    return (
        <div className="bg-white rounded-2xl p-3 flex flex-col shadow-gray-200 shadow-xl border-gray-50">
            <div className="bg-gray-400 p-1 rounded-3xl self-end hover:cursor-pointer">
                <Cross2Icon 
                className="text-white font-extrabold w-2.5 h-2.5" 
                />
            </div>

            <div className="space-y-2 mb-3">
                <h3 className="font-semibold text-sm">
                Find the Music you love
                </h3>
                <p className="text-gray-400/95 text-xs">
                Pair your YouTube and SoundCloud accounts to get personalized recommendations.
                </p>
            </div>

            <div className="flex space-x-2">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded flex space-x-2 items-center transition grow">
                    <span className="p-px bg-white rounded-full">
                        <AiFillYoutube className="text-red-500" />
                    </span>
                    <span className="text-xs">Connect</span>
                </button>
                <button className="bg-orange-100 text-orange-500 hover:text-orange-600 hover:bg-orange-200 font-medium px-4 py-1.5 rounded flex items-center space-x-2 transition grow">
                    <span className="p-0.5 bg-orange-500 rounded-full">
                        <FaSoundcloud 
                            className="text-white w-3 h-3" 
                        />
                    </span>
                    <span className="text-xs">Connected</span>
                </button>
            </div>
        </div>
    );
}

export default FindMusic;