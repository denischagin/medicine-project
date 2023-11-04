import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { routes } from "@/pages/routes.tsx";

export const Routing = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}
            >
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Route>
        </Routes>
    );
};
