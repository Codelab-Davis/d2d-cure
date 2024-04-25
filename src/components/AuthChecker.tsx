import { ReactNode } from "react"
import { useUser } from "./UserProvider";

export const AuthChecker = (
    props: {
        minimumStatus: String   // "ADMIN", "student", "professor", "other"
        children: ReactNode
    }
) => {
    const { user, loading } = useUser();

    function validStatus() {
        if (!user) {
            return false;
        }

        if (user.status === "ADMIN" ||
            props.minimumStatus === "professor" && user.status === "professor" ||
            props.minimumStatus === "student" && user) {
            return true;
        } else {
            return false;
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return (
            <div>
                <h1>Please login to gain access to this page.</h1>
            </div>
        );
    }

    if (!validStatus()) {
        return (
            <div>
                <h1>You do not have permission to access this page.</h1>
            </div>
        );
    }

    return props.children;
}