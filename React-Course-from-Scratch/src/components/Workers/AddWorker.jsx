import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();

  const minimumWage = 1500;

  const addWorkerHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "Name is required!",
        message: "Please enter a name!",
      });
      return;
    }
    if (+wageInputRef.current.value < minimumWage) {
      // +workerWage is Number(workerWage)
      setError ({
        title: "Salary amount is required!",
        message: `Please enter a salary value greater than ${minimumWage}`
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Employee name
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter employee name"
            id="name"
            ref={nameInputRef}
          />
          <label htmlFor="salary" className="font-medium">
            Salary amount
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Enter salary amount"
            id="salary"
            ref={wageInputRef}
          />
          <Button className="mt-2" type="submit">
            Add
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddWorker;
