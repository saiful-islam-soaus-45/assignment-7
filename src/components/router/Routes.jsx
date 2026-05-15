import { createBrowserRouter } from "react-router";
import Rootlayout from "../../layout/Rootlayout";
import HomePage from "../../pages/homepage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Stats from "../../pages/stats/Stats";
import TimeLine from "../../pages/timeline/TimeLine";
import FriendDetails from "../../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Rootlayout></Rootlayout>,
      children: [
        {
          index:true,
          element: <HomePage></HomePage>
        },
        {
            path:'/friend/:id',
            element: <FriendDetails></FriendDetails>
        },

        {
          path:'/timeline',
          element: <TimeLine></TimeLine>
        },
        {
          path:'/stats',
          element: <Stats></Stats>
        }
      ],
      errorElement: <NotFoundPage></NotFoundPage>
    }
  ]
)
