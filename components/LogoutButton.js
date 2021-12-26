import {useAuth} from '../contexts/auth'

export default function LogoutButton() {
    const { logout } = useAuth();

    return (
        <button onClick={logout} className="p-1 rounded-md font-color-white text-white bg-green-700 text-center w-24">
            Sign Out
        </button>
    );
  }