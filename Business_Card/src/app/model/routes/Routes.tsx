import { MainLayout } from "@/app/ui/layouts/MainLayout";
import { Main } from "@/pages/main";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Main></Main>,
            },

        ],
    },
];

export default routes;