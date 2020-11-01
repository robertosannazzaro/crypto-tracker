import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

export default async () => {
  const history = useHistory();
  await Auth.signOut();
  history.push("/signin");
};
