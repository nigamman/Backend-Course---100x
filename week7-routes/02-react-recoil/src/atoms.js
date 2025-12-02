import { atom, selector } from "recoil";
import axios from 'axios';


//Asynchronus data queries
export const notificationAtom = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async() => {
      await new Promise(r => setTimeout(r,1000)) //fake delay
      const res = await axios.get("http://localhost:3001/");
      return res.data;
    }
  })
});

export const totalNotificationSelector = selector({
  key:"totalNotificationSelector",
  get: ({get}) => {
    const all = get(notificationAtom);
    return all.network +
    all.jobs +
    all.messaging +
    all.notification
  }
});

//this data is hardcoded

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 104,
// });

// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 4,
// });

// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: 10,
// });

// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 0,
// });

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const networkAtomCount = get(networkAtom);
//     const jobsAtomCount = get(jobsAtom);
//     const notificationAtomCount = get(notificationAtom);
//     const messagingAtomAtomCount = get(messagingAtom);
//     return (networkAtomCount +jobsAtomCount +notificationAtomCount +messagingAtomAtomCount);
//   },
// });
