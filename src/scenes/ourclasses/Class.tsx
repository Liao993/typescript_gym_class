

type Props = {
  name: string;
  description?:string;
  image:string;
}

const Class = ({name, description, image}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex flex-col h-[380px] w-[450px] items-center justify-center whitespace-normal  bg-primary-500 text-center opacity-0 transition duration-500 hover:opacity-90 hover:border-2 hover:border-primary-100`
  return (
   <li className="relative mr-8 inline-block h-[380px] w-[450px]">
    <div className={overlayStyles}>
      <p className="text-2xl">{name}</p>
      <p className="mt-5">{description}</p>
    </div>
    <img src={image} alt={`${image}`}/>
   </li>
  )
}

export default Class