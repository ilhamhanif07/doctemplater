import { atom } from "recoil";

export const UserDataAtom = atom({
    key: "UserData",
    default: null,
});

// usage on your component
// function atoms() {
//     const [userData,setUserData]=useRecoilState(UserDataAtom)
//   return (
//     <div>atoms</div>
//   )
// }
