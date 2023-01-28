import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  surname: string;
  petsName: string;
  email: string;
  phoneNumber: string;
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
        <form id="formId" className="form__group" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input className="form__field"
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
              <label className="form__label" htmlFor="name">Imię</label>

            <p className="errors">{errors.name?.message}</p>
          </div>
          <div className="form__group field">
            <input className="form__field"
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
             <label className="form__label" htmlFor="surname">Nazwisko</label>

            <p className="errors">{errors.surname?.message}</p>
          </div>
        
          <div className="form__group field">
              <input className="form__field"
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
              <label className="form__label" htmlFor="petsName">Imię pupila</label>

              <p className="errors">{errors.petsName?.message}</p>
              </div>
              <div className="form__group field">
              <input className="form__field"
                type="date"
                id="date"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Data jest wymagana",
                  },
                })}
              />
              <label className="form__label" htmlFor="date">Data wizyty</label>

              <p className="errors">{errors.date?.message}</p>
          </div>

          <div className="form__group field">
            <input className="form__field"
              id="phoneNumber"
              type="text"
              placeholder="Numer kom."
              
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Numer telefonu jest wymagany",
                },
                validate: {
                  phoneNumberValidation: (value)  => {
                    const phoneNumberFormat =/^(\d{3})(\d{3})(\d{3})$/;
                    const prefixNumberFormat =/^(\d{2})(\d{3})(\d{3})(\d{3})$/;
                    if (value.match(phoneNumberFormat))
                    {
                      return (true)
                    } else if (value.match(prefixNumberFormat))
                    {
                      return (true)
                    }
                      alert("Numer telefonu jest nieprawidłowy")
                      return (false)
                  }}
              })}
            />
            <label className="form__label" htmlFor="phoneNumber">Numer kontaktowy</label>

            <p className="errors">{errors.phoneNumber?.message}</p>
            </div>
            
            <div className="form__group field">  

            <input className="form__field"
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: {
                  value: true,
                  message: "E-mail jest wymagany",
                },
                validate: {
                  emailValidation: (value)  => {
                    const mailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (value.match(mailFormat))
                    {
                      return (true)
                    }
                      alert("Adres email jest nieprawidłowy")
                      return (false)
                  }
                }
              })}
            />
            <label className="form__label" htmlFor="email">E-mail</label>            
            <p className="errors">{errors.email?.message}</p>
          </div>
          <div className="form__group field">
            <input type="text" className="form__field"
              id="info"
              placeholder="Wpisz objawy, problemy, dodatkowe informacje"
              {...register("info", {
                required: {
                  value: true,
                  message: "Pole jest wymagane",
                },
              })}
            ></input>
            <label className="form__label" htmlFor="info">Wpisz objawy i dodatkowe informacje</label>

          </div>
          <div>
            <button type="submit">Wyślij</button>
          </div>
        </form>
    </>
  );
};

export default Form;
