interface Props {
  Title: string,
  Content: string,
  link: string,
}

const Project: React.FC<Props> = ({Title, Content, link}) => {
  let hasLink: boolean = true;
  if(link.length == 0)
    hasLink = false
  return(
    <>
      <div className="text-2xl">
        {hasLink ? <a className="hover:cursor-pointer hover:text-blue-500 relative after:content-[''] after:bg-blue-500 after:h-[4px] after:w-[0%] after:left-0 after:-bottom-[6px] after:rounded-xl after:absolute after:duration-200 hover:after:w-[100%]" href={link}>{Title}</a> : <p>{Title}</p>}
      </div>
      <div className="text-gray-400 py-6 text-lg leading-loose">
        {Content}
      </div>
    </>
  );
}
export default Project