import { FiraCode } from './Fonts'

const TitleLayout = ({ title }) => {
  return (
    <h2
      className={`${FiraCode.className} text-2xl mb-2 text-slate-800 font-bold border-l-4 border-[#02F3A0] pl-2 rounded-lg`}
    >
      {title}
    </h2>
  )
}

export default TitleLayout
