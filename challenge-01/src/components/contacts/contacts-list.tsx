"use client";

import { useEffect, useState } from "react";
import { USERS, User } from "./users";
import ContactItem from "./contact-item";

function ContactsList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers(USERS)
    }, [])

    return (
        <div className="bg-white p-5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">
                Contacts
            </h2>

            <div className="space-y-6">
                {users.map((user: User) => (
                    <ContactItem user={user} />
                ))}
            </div>
        </div>
    );
}

export default ContactsList;