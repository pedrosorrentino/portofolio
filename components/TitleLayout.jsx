import { FiraCode } from './Fonts'

const TitleLayout = ({ title }) => {
  return (
    <h2 className={`${FiraCode.className} text-2xl mb-2 font-semibold`}>
      {title}
    </h2>
  )
}

export default TitleLayout
