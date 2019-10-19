import {all} from "redux-saga/effects";
import Auth from "./Auth";
import Normal from "./Normal";
import Admin from "./Admin";
import Organ from "./Organ";

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Normal(),
    Admin(),
    Organ()
  ]);
}
