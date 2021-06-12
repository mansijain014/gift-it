import { firebaseAuth, db } from "../firebase";
import { signIn, signUp } from "../redux/actions";

export const userSignUp = async (data, dispatch) => {
  const { email, password, name } = data;
  const error = await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const userData = { email, name, uid: res.user.uid };
      dispatch(signUp(userData));
      db.collection("users").doc(res.user.uid).set(userData);
      return null;
    })
    .catch((err) => err.message);

  return error;
};

export const userSignIn = async (data, dispatch) => {
  const { email, password } = data;
  firebaseAuth.signInWithEmailAndPassword(email, password).then((res) => {
    db.collection("users")
      .doc(res.user.uid)
      .get()
      .then((doc) => dispatch(signIn(doc.data())));
  });
};
