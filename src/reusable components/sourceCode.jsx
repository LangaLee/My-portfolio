const SourceCode = ({ link, value }) => {
  return (
    <a className="sourceLink" href={link} target="_blank">
      {value}
    </a>
  );
};

export default SourceCode;
