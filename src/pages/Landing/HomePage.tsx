import {FC} from "react";
import {Link} from "react-router-dom";
import PageLayout from "../../components/ui/PageLayout.tsx";

const HomePage: FC = () => {
    return (
        <PageLayout>
            <h2 className="text-4xl font-bold mb-4">Welcome to Event Manager</h2>
            <p className="text-lg mb-6">This is a simple and responsive landing page.</p>
            <Link to={'/dashboard'} className="bg-blue-600 text-white py-2 px-4 rounded-full">
                Get Started
            </Link>
        </PageLayout>
    )
}
export default HomePage
