import { Navigate, Route, Routes } from "react-router-dom";

import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import Home from "./routes/home/home.component";
import Explore from "./routes/explore/explore.component";
import Callback from "./routes/callback/callback.component";
import Profiles from "./routes/profiles/profiles.component";
import EditProfile from "./routes/edit-profile/edit-profile.component";
import Timer from "./components/timer/timer.component";
import { useSelector } from "react-redux";
import { selectDisplayTimer } from "./store/timer/timer.selector";

const HiV = () => {
  const displayTimer = useSelector(selectDisplayTimer);

  if (displayTimer)
    return (
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="explore/" element={<Explore />} />
        <Route path="callback/" element={<Callback />} />
        <Route path="profile/*" element={<Profiles />} />
        <Route path="edit-profile/" element={<EditProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default HiV; 