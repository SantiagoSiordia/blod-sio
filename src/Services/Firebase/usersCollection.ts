import { firestore } from "@config";
import { FirebaseEnum } from "@constants";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { ErrorReporting } from "../Errors";

export const usersCollection = collection(
  firestore,
  FirebaseEnum.Firestore.Collections.Users
);

export const getUsers = async () => {
  const users = await getDocs(usersCollection);
  return users;
};

export const getUser = async (id?: string) => {
  if (!id) return null;
  const user = await getDoc(doc(usersCollection, id));
  return user.data();
};

export const createUser = async ({
  id,
  name,
  location,
  bloodType,
}: // birthDate,
{
  id: string | undefined;
  name: string;
  location: string;
  bloodType: string;
  // birthDate: string;
}) => {
  if (!id) return null;

  try {

    const document = {
      age: 18,
      litersDonated: 0,
      avatar: "https://i.pravatar.cc/300",
      name,
      location,
      bloodType,
      // birthDate,
    };

    Object.keys(document).forEach(key =>
      // @ts-expect-error - This is a bug in the firebase types
      document[key] === undefined ? delete document[key] : {}
    );

    await setDoc(doc(usersCollection, id), document);

    const user = await getDoc(doc(usersCollection, id));
    return user.data();
  } catch (error) {
    ErrorReporting(error);
  }
};

export const updateUser = async (id: string | undefined, data: Record<string, unknown>) => {
  if (!id) return null;
  Object.keys(data).forEach(key =>
    data[key] === undefined ? delete data[key] : {}
  );
  await setDoc(doc(usersCollection, id), data, { merge: true });
  const user = await getDoc(doc(usersCollection, id));
  return user.data();
};
