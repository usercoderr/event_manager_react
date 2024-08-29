import {FC} from "react";
import {Link} from "react-router-dom";

const Sidebar:FC =() =>{
    return(
        <div className="w-64 bg-gray-800 text-white h-screen hidden lg:block">
            <section className="p-6">
              <Link to={'/dashboard'}>
                <span className="text-2xl font-bold">Dashboard</span>
              </Link>
            </section>
            <nav className="mt-6">
                <ul>
                    <li>
                        <Link
                            to="/dashboard/events"
                            className="block py-2 px-4 hover:bg-gray-700"
                        >
                            Все мероприятия
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/create-event"
                            className="block py-2 px-4 hover:bg-gray-700"
                        >
                            Создать мероприятие
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar
