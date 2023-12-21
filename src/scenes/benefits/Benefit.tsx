import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16'>
      <div className='mb-4 flex  flex-col items-center justify-center'>
        <div className='rounded-full border-gray-100 border-2 p-4 bg-primary-100'>
          {icon}
        </div>
        <h4 className="font-bold mt-2">{title}</h4>
        <p className="text-center my-3">{description}</p>
        <AnchorLink 
                  className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' 
                  onClick={ () => setSelectedPage(SelectedPage.ContactUs)}
                  href={`#${SelectedPage.ContactUs}`}
                  >
                  
                <p className='text-md'>Learn More</p>
              </AnchorLink>
        
      </div>
    </div>
  )
}

export default Benefits