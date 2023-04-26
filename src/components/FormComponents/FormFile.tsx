import { FileUploader } from "react-drag-drop-files";

type Props = {
  handleChange: (file: { name: string }) => void;
  file: { name: string } | null;
};

const fileTypes = ["JPG", "PNG"];

function FormFile({ handleChange, file }: Props) {
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      maxSize={1}
      required
    >
      <div className="border-2 border-[#B3B8C0] border-dashed h-36 rounded-lg flex justify-center items-center">
        {!file ? (
          <div className="flex justify-center items-center flex-col">
            <img
              src="images/upload.png"
              alt="upload image"
              className="h-12 w-12"
            />
            <p className="text-[#7F858F] font-semibold">
              Glissez votre fichier dans cette zone
            </p>
          </div>
        ) : (
          <p className="text-[#7F858F] font-semibold">
            {" "}
            Votre fichier {file.name} a bien été déposé
          </p>
        )}
      </div>
    </FileUploader>
  );
}

export default FormFile;
