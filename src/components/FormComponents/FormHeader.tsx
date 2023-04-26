const FormHeader = () => {
  return (
    <header className="flex justify-center">
      <div className="flex mt-32 flex-col">
        <h1 className="text-6xl font-bold  ">
          <span className="bg-[#DF6857] text-white px-6">P</span>lug{" "}
        </h1>
        <div className="ml-auto flex items-center space-x-2 mt-4">
          <span className="font-bold">By</span>
          <img
            src="images/particeep-logo.jpg"
            alt=""
            className="h-4 w-4 rounded"
          />
          <span className="font-semibold text-slate-700">Particeep</span>
        </div>
      </div>
    </header>
  );
};

export default FormHeader;
