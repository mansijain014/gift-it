import { firebaseAuth, db } from "../firebase";
import { signIn, signOut, signUp } from "../redux/actions";

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

  if (!error) {
    console.log(error);
    await firebaseAuth.currentUser.updateProfile({
      displayName: name,
    });
  }

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

export const userSignOut = async (dispatch) => {
  await firebaseAuth.signOut().then(() => {
    dispatch(signOut(false));
  });
};

export function fetchDetails(callback) {
  return checkUserAuthState((authData) => {
    if (authData === null) {
      callback.call(null, { isLoggedIn: false });
    } else {
      db.collection("users")
        .doc(authData.uid)
        .get()
        .then((doc) => {
          callback.call(null, {
            ...authData,
            isLoggedIn: true,
          });
        });
    }
  });
}

export function checkUserAuthState(callback) {
  return firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      callback.call(null, getAuthData(user));
    } else {
      callback.call(null, null);
    }
  });
}

export function getAuthData(user) {
  const userProfile = Object.assign({}, user.providerData[0]);

  // Update uid inside providerData to user's uid
  userProfile.uid = user.uid;

  return userProfile;
}
