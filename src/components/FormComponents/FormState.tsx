import Stage1 from "../FormStages/Stage1";
import { RootState } from "../../../store/store.ts";
import {useSelector} from 'react-redux';
import Stage2 from "../FormStages/Stage2.tsx";
import {AnimatePresence} from "framer-motion"

const FormState = () => {

  const stage  = useSelector((state: RootState) => state.form.stage);

  return (
    <div className="flex justify-center mt-16 flex-col bg-white rounded-b-lg">
      <div className="w-full h-2 bg-[#F0C3BE] rounded-t-lg  relative ">
        <div
          style={{ width: `${(stage / 16) * 100}%` }}
          className="absolute bg-[#DF6857] h-2 rounded-tl-lg transition-all  duration-150 overflow-hidden ease-in-out"
        ></div>
      </div>

      <div className="mx-auto mt-6 bg-[#DF6857] font-semibold text-white px-2 rounded-3xl py-1">
        {stage}/16
      </div>
      <AnimatePresence>{stage === 1 && <Stage1 />}   </AnimatePresence>
      <AnimatePresence>{stage === 2 && <Stage2 />}   </AnimatePresence>
    </div>
  );
};

export default FormState;
