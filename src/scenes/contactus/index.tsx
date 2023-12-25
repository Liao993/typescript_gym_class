
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"






const ContactUs = () => {
  const {register, trigger, formState: {errors}} = useForm()

  const inputStyles = `w-full bg-primary-300 rounded-lg mt-5 px-5 py-3 placeholder-white`
  const errorStyles = `my-1 text-primary-500`

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e : any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
    
  }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <div className="md:w-3/5">
        <HText>
          <span className="text-primary-500">Join Now</span> TO GET INTO SHAPE
       </HText>
       <p className="my-5">Discover serenity in our yoga classes—mindful postures, expert guidance, and a supportive community await, fostering strength, flexibility, and inner peace.</p>
      </div>

      {/*Form */}
      <div className="mt-10  justify-between gap-8 md:flex">
       
          <form className="md:w-2/3" target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/happyen@email.com" method="POST">
            <input className={inputStyles} type="text" placeholder="Name" {...register("name", {required:true, maxLength:100})}/>
            {errors.name && 
            (<p className={errorStyles}>
              {errors.name.type === "required" && "This field is required"}
              {errors.name.type === "maxLength" && "This field should be less than 100 characters"}
            </p>)}

            <input className={inputStyles} type="email"  placeholder="Email" {...register("email", {required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}/>
            {errors.email && 
            (<p className={errorStyles}>
              {errors.email.type === "required" && "This field is required"}
              {errors.email.type === "pattern" && "This is not valid email"}
            </p>)}

            <textarea rows={4} cols={50} className={inputStyles}  placeholder="Messages" {...register("message", {required:true, maxLength:200})}/>
            {errors.message && 
            (<p className={errorStyles}>
              {errors.message.type === "required" && "This field is required"}
              {errors.message.type === "maxLength" && "This field should be less than 200 characters"}
            </p>)}

            <button type="submit" className="mt-5  rounded-lg bg-secondary-500 px-20 py-3 transtion duration-500 hover:text-white">
              Submit
            </button>

          </form>
          <div className="mt-20 md:mt-5">
            <img className="w-full" src={ContactUsPageGraphic} alt="ContactGraphic"/>
          </div>
       
      </div>
    </section>
  )
}

export default ContactUs