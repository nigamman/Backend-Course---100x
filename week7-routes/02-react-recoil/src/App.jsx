import { useState } from 'react'
import {useRecoilValue, RecoilRoot} from 'recoil'
import { networkAtom } from "./atoms";


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);

  return (
      <div>
        <button>Home</button>

        <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>Jobs()</button>
        <button>Messaging()</button>
        <button>Notification()</button>

        <button>Me</button>
      </div>
  )
}

export default App
//dir\week7-routes\02-react-recoil
