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
      <div className="text-2xl underline underline-offset-4">
        {hasLink ? <a className='hover:cursor-pointer hover:text-blue-500' href={link}>{Title}</a> : <p>{Title}</p>}
      </div>
      <div className="text-gray-500 py-6 text-lg leading-loose">
        {Content}
      </div>
    </>
  );
}
export default Project