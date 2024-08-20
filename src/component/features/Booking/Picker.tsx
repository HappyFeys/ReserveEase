import { CalendarRange, CalendarMonth } from "./Cally";

interface PickerProps {
    value: string
    onChange: () => void
}
function Picker({ value, onChange } : PickerProps) {

    const todayDate = new Date()
    const month = todayDate.getMonth()
    const year = todayDate.getFullYear()
    const day = todayDate.getDate()
    const dateFormated = `${year}-${month<10? "0"+(month+1) : (month+1)}-${day}`
    console.log(dateFormated);

  return (
    <CalendarRange value={value} onChange={onChange} min={dateFormated}>
        <svg
    aria-label="Previous"
    slot="previous" //fonctionne comme je le souhaite, tant pis !
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
  </svg>
  <svg
    aria-label="Next"
    slot="next" //fonctionne comme je le souhaite, tant pis !
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
  </svg>
      <CalendarMonth />
      <CalendarMonth offset={1} />
    </CalendarRange>
  );
}

export default Picker