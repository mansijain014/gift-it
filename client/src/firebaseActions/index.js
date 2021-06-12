import { firebaseAuth, db } from "../firebase";
import { signUp } from "../redux/actions";

export const userSignUp = async (data, dispatch) => {
  const { email, password, name } = data;
  const error = await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch(signUp({ email, name, uid: res.user.uid }));
      db.collection("users").doc(res.user.uid).set({ email, name });
      return null;
    })
    .catch((err) => err.message);

  return error;
};
