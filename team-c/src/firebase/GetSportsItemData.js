import { database } from "./firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

const HandleGetData = async () => {
  try {
    // Firestoreからデータを取得
    //   const docRef = collection(database, String(user.uid));
    const docSnap = await getDocs(collection(database, "SportsItems"));
    console.log("スポーツの数を確かめたい。");
    console.log(docSnap.length);
    // docSnap.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data().name);
    // });

    const dataArr = docSnap.docs.map(doc => ({
      SportsName: doc.id,
      title: doc.data().title,
      rule: doc.data().rule,
      highlight: doc.data().highlight,
      image: doc.data().image,
      icon: doc.data().icon,
    }));
    console.log(dataArr);
    return dataArr;

    // navigate("/talk", { state: { selectedFile } });
  } catch (error) {
    console.error(
      "Firestoreからのデータ取得時にエラーが発生しました。",
      error
    );
    console.log(error.message);
  }
};
export default HandleGetData;
