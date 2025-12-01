import {useRecoilValue, RecoilRoot} from 'recoil'
import { networkAtom,jobsAtom, messagingAtom, notificationAtom, totalNotificationSelector} from "./atoms";


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notifyNotificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
      <div>
        <button>Home</button>

        <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>Jobs({jobsNotificationCount})</button>
        <button>Messaging({messagingNotificationCount})</button>
        <button>Notification({notifyNotificationCount})</button>

        <button>Me({totalNotificationCount})</button>
      </div>
  )
}

export default App
//dir\week7-routes\02-react-recoil
