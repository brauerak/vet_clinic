import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  surname: string;
  petsName: string;
  email: string;
  phoneNumber: number;
  info: string;
  date: string | number;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
        <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              placeholder="Imię"
              {...register("name", {
                required: {
                  value: true,
                  message: "Imię jest wymagane",
                },
                minLength: {
                  value: 3,
                  message: "Długość imienia musi mieć ponad 3 znaki",
                },
                maxLength: {
                  value: 15,
                  message: "Długość imienia musi mieć poniżej 15 znaków",
                },
              })}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="surname">
            <label htmlFor="surname"></label>
            <input
              id="surname"
              type="text"
              placeholder="Nazwisko"
              {...register("surname", {
                required: {
                  value: true,
                  message: "Nazwisko jest wymagane",
                },
                minLength: {
                  value: 2,
                  message: "Długość nazwiska musi mieć ponad 5 znaki",
                },
                maxLength: {
                  value: 20,
                  message: "Długość nazwiska musi mieć poniżej 20 znaków",
                },
              })}
            />
            <p>{errors.surname?.message}</p>
          </div>
        
          <div>
              <label htmlFor="petsName"></label>
              <input
                id="petsName"
                type="text"
                placeholder="Imię zwierzęcia"
                {...register("petsName", {
                  required: {
                    value: true,
                    message: "Imię jest wymagane",
                  },
                  minLength: {
                    value: 3,
                    message: "Długość imienia zwierzęcia musi mieć ponad 3 znaki",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Długość imienia zwierzęcia musi mieć poniżej 15 znaków",
                  },
                })}
              />
              <p>{errors.petsName?.message}</p>
              </div>
              <div>
              <label htmlFor="date"></label>
              <input
                type="date"
                id="date"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Data jest wymagana",
                  },
                })}
              />
              <p>{errors.date?.message}</p>
          </div>

          <div>
            <label htmlFor="phoneNumber"></label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Numer kom."
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Numer telefonu jest wymagany",
                },
              })}
            />
            <p>{errors.phoneNumber?.message}</p>
            </div>
            
            <div>  
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: {
                  value: true,
                  message: "E-mail jest wymagany",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="info"></label>
            <textarea
              id="info"
              placeholder="Wpisz objawy, problemy, dodatkowe informacje"
              {...register("info", {
                required: {
                  value: true,
                  message: "Pole jest wymagane",
                },
              })}
            ></textarea>
          </div>
          <div>
            <button type="submit">Wyślij</button>
          </div>
        </form>
    </>
  );
};

export default Form;
