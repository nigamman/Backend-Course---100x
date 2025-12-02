import {useRecoilValue, RecoilRoot} from 'recoil'
import { notificationAtom, totalNotificationSelector} from "./atoms";


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const all = useRecoilValue(notificationAtom);
  const total = useRecoilValue(totalNotificationSelector);

  // const networkNotificationCount = useRecoilValue(networkAtom);
  // const jobsNotificationCount = useRecoilValue(jobsAtom);
  // const messagingNotificationCount = useRecoilValue(messagingAtom);
  // const notifyNotificationCount = useRecoilValue(notificationAtom);
  // const totalNotificationCount = useRecoilValue(totalNotificationSelector);

   if (!all) return <h3>Loading...</h3>;

  return (
      <div>
        <button>Home</button>

        <button>My Network ({all.network})</button>
        <button>Jobs ({all.jobs})</button>
        <button>Messaging ({all.messaging})</button>
        <button>Notification ({all.notification})</button>

        <button>Me ({total})</button>
      </div>
  )
}

export default App;

//dir\week7-routes\02-react-recoil
//make sure server.js file from backend folder is running