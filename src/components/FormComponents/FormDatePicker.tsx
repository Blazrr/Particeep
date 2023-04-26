import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type Props = {
  setGetDate: (e:{ $y: number } | null ) => void;
};

export default function FormDatePicker({ setGetDate }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          className="w-full"
          onChange={(e) => setGetDate(e)}
          defaultValue={null}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
