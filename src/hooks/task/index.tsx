import { useSessionExipred } from "~hooks/auth";
import { addTaskService } from "~services/task";
import { IAddTaskProps } from "~services/task/types";
import { Constants } from "~theme/Constants";
import { ScreensName, Strings } from "~theme/Strings";
import { back, navigate } from "~utils/NavigationUtils";
import Toast from "~utils/Toast";
import { useStore } from "~zustand";



export const useAddTaskService = () => {
    const {
      setAppLoader,
    } = useStore(state => state);
    const {logoutUser} = useSessionExipred();

    const addTask = async (data: IAddTaskProps) => {
      setAppLoader(true);
      try {
          const addTaskresponse = await addTaskService(data);
          if (addTaskresponse?.error === Constants.INVALID_SESSION) {
            logoutUser();
          }
          if (addTaskresponse?.success) {
            Toast.successor(Strings.SUCCESS,addTaskresponse?.data?.message);
            back();
          }
          else {
            Toast.errorList(Strings.ERROR, [
                addTaskresponse?.error?.message,
             ]);
        }
        setAppLoader(false);
      } catch (e) {
        setAppLoader(false);
        Toast.errorList(Strings.ERROR, ['Error', e]);
        console.log(e);
      }
    };
    return { addTask };
  };