import { User } from "@/types/User";
import React from "react";

interface UserDetailsProps {
    user:User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    return (
        <div>
      <p>
        名前: {user.name}
      </p>
      <p>
        メールアドレス: {user.email}
      </p>
      <p>
        役職: {user.role}
      </p>
    </div>
    )
}

export default UserDetails;