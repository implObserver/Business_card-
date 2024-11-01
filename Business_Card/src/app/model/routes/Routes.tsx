import { MainLayout } from "@/app/ui/layouts/MainLayout";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <></>,
            },

        ],
    },
];

export default routes;