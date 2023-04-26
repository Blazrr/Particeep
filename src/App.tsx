import { Provider } from "react-redux"
import Form from "./components/Form"
import { store } from "../store/store";
import {motion} from "framer-motion"

function App() {

  return (
    <Provider store={store}>

    <motion.div className="bg-[#FAFAFA] min-h-screen min-w-screen"
    initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0}}
    transition={{duration:1.2}}>
    <div className="max-w-[1440px] mx-auto w-4/5">
      <Form/>
      <p className="text-center font-semibold mt-10">We inform you that data gathered will be manage by computer only by providers of offers</p>
    </div>
    </motion.div>
    </Provider>

  )
}

export default App
