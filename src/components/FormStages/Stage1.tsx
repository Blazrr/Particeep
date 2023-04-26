import { useForm } from "react-hook-form";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Input from "@mui/joy/Input";
import FormCountries from "../FormComponents/FormCountries.tsx";
import FormDatePicker from "../FormComponents/FormDatePicker.tsx";
import Radio from "@mui/joy/Radio";
import { RadioGroup } from "@mui/joy";
import { Button, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import FormFile from "../FormComponents/FormFile.tsx";
import { nextStage } from "../../../reducers/formSlice.ts";
import { useDispatch } from "react-redux";
import { motion} from "framer-motion"

const Stage1 = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phoneError, setPhoneError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [getDate, setGetDate] = useState<{ $y: number } | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<{code: string, label: string, phone: string} | null>(null);
  const [file, setFile] = useState<{ name: string } | null>(null);
  const handleChange = (file: { name: string }) => {
    setFile(file);

  };

  const onSubmit = () => {
    if (!birthError && !phoneError) {
      dispatch(nextStage());
    }
  };


  useEffect(() => {
    if (
      getDate === null ||
      (getDate && !(getDate.$y > 1900 && getDate.$y < 2015))
    ) {
      setBirthError(true);
      return;
    } else {
      setBirthError(false);
    }

    if (selectedCountry === null) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }
  }, [getDate, selectedCountry]);


  return (

    <motion.div className="mt-12"
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:-100}}
    transition={{duration:1.2}}
    >
      <h3 className="text-center font-semibold">Vos informations</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 p-8"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="prenom" className="font-semibold">
            PRÉNOM *
          </label>
          <Input
            type="text"
            id="prenom"
            className="border-[1px] rounded p-2"
            placeholder="Donnez votre r&eacute;ponse ici"
            {...register("prenom", { required: true })}
          />
          {errors.prenom && (
            <p className="text-red-400 mt-1">Un prenom valide est requis</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="nom" className="font-semibold">
            NOM *
          </label>
          <Input
            type="text"
            id="nom"
            className="border-[1px] rounded p-2"
            placeholder="Donnez votre r&eacute;ponse ici"
            {...register("nom", { required: true })}
          />
          {errors.nom && (
            <p className="text-red-400 mt-1">Un nom valide est requis</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="adresse" className="font-semibold">
            ADRESSE COMPLÈTE *
          </label>
          <Input
            type="text"
            id="adresse"
            className="border-[1px] rounded p-2"
            placeholder="Donnez votre r&eacute;ponse ici"
            {...register("adresse", { required: true })}
          />
          {errors.adresse && (
            <p className="text-red-400 mt-1">Un nom valide est requis</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-semibold">
            DATE DE NAISSANCE *
          </label>
          <FormDatePicker setGetDate={setGetDate} />
          {birthError && (
            <p className="text-red-400 mt-1">N'oubliez pas l'age requis</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="numero" className="font-semibold">
            NUMÉRO DE TÉLÉPHONE *
          </label>
          <div className="border-[1px] rounded  flex">
            <FormCountries
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />

            <Input
              type="number"
              id="numero"
              className=" pl-2 w-full"
              placeholder="06 01 02 03 04"
              {...register("numero", { required: true })}
            />
          </div>
          {(errors.numero || phoneError) && (
            <p className="text-red-400 mt-1">Un numéro valide est requis</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="question" className="font-semibold">
            QUESTION À CHOIX MULTIPLES *
          </label>
          <RadioGroup
            defaultValue="medium"
            {...register("question", { required: true })}
          >
            <Radio value="oui" label="Oui" size="md" />
            <Radio value="non" label="Non" size="md" />
          </RadioGroup>
          {errors.question && (
            <p className="text-red-400 mt-1">Une réponse est requise</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="mail" className="font-semibold">
            ADRESSE MAIL *
          </label>
          <Input
            type="text"
            id="mail"
            className="border-[1px] rounded p-2"
            placeholder="Donnez votre r&eacute;ponse ici"
            {...register("mail", { required: true })}
          />
          {errors.mail && (
            <p className="text-red-400 mt-1">Une adresse mail est requise</p>
          )}
        </div>

        <div className="flex  space-x-2 items-center">
          <label htmlFor="mail" className="font-semibold">
            Voulez-vous recevoir les notifications mail ?{" "}
          </label>
          <Switch {...register("recevoir")} />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="mail" className="font-semibold">
            PIÈCE D'IDENTITÉ. *
          </label>
          <FormFile handleChange={handleChange} file={file} />
        </div>
        <hr className=" !-ml-[33px] !-mr-[33px] " />
        <div className="ml-auto">
          <Button variant="contained" color="warning" type="submit">
            Suivant
          </Button>
        </div>
      </form>
    </motion.div>

  );
};

export default Stage1;
