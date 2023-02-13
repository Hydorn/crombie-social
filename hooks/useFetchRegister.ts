import { url } from "@/utilities/endopoint";
import { FetchRegisterType } from "@/utilities/types";
import toast from "react-hot-toast";

export const useFetchRegister: FetchRegisterType = (formData) => {
  try {
    const response = fetch(url + "user/register", {
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      console.log(res);

      if (!res.ok) throw new Error(res.statusText);
      res.json();
    });

    toast.promise(response, {
      loading: "Registering User",
      success: `${formData.username} user created`,
      error: (error) => `${error.toString().slice(6)}`,
    });
  } catch (error: any) {
    console.error(error);
  }
};
