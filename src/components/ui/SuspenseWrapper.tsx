import { Suspense, ReactNode } from 'react';
import Loader from "../../ui/Loader.tsx";

const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
    return <Suspense fallback={<Loader/>}>{children}</Suspense>;
};

export default SuspenseWrapper;
