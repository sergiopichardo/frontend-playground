import { User } from "./users"

type ContactItemProps = {
  user: User
}

export default function ContactItem({ user }: ContactItemProps) {
  return (
      <div className="flex">
        <div className="relative mr-3">
          <div className="h-4 w-4 bg-green-500 absolute bottom-0 right-0 rounded-full border-2 border-white" />
          <img 
            src={user.avatar} 
            alt={`${user}`} 
            className="w-12 h-12 rounded-3xl"
          />
        </div>

        <div className="mr-6">
          <h4 className="text-base font-semibold">
            {`${user.firstName} ${user.lastName}`}
          </h4>
          <p className="text-gray-400">
            Has {user.friendsCount} Friends on Airtime
          </p>
        </div>

        <button
          className="bg-gray-100 hover:bg-gray-200 rounded-3xl py-2 px-3 self-center ml-auto transition duration-200"
        >
          Invite
        </button>
      </div>
  )
}