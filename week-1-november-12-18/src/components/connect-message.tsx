import { Cross2Icon } from "@radix-ui/react-icons";
import { AiFillYoutube } from 'react-icons/ai';
import { FaSoundcloud } from 'react-icons/fa';

function ConnectMessage() {
    return (
        <div className="w-[380px] p-4 border border-gray-50 shadow-xl shadow-gray-200 bg-white flex flex-col rounded-2xl hover:cursor-pointer">
            <span className="ml-auto bg-gray-400 p-1 rounded-3xl">
                <Cross2Icon className="text-white font-extrabold w-3 h-3" />
            </span>

            <h2 className="text-xl mb-2 font-semibold text-gray-800">
                Find the Music you love
            </h2>

            <p className="text-gray-400/75 mb-4">
                Pair your Youtube and SoundCloud accounts to get personalized recommendations.
            </p>

            <div className="flex space-x-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex space-x-2 items-center transition">
                    <span className="p-1 bg-white rounded-full">
                        <AiFillYoutube className="text-red-500" />
                    </span>
                    <span>Connect</span>
                </button>
                <button className="bg-orange-100 text-orange-500 hover:text-orange-600 hover:bg-orange-200 font-medium px-4 py-2 rounded flex items-center space-x-2 transition">
                    <span className="p-1 bg-orange-500 rounded-full">
                        <FaSoundcloud className="text-white" />
                    </span>
                    <span>Connected</span>
                </button>
            </div>
        </div>
    );
}

export default ConnectMessage;