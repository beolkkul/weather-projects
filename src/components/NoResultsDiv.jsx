const NoResultsDiv = () => {

    return <div className="no-results">
        <img src="./icons/icons/no-result.svg" alt="No results found" 
        className="icon" />
        <h3 className="title"> something went wrong </h3>
        <p className="message"> we&apos;re unable to retrieve the weather details. 
            Enure you&apos;ve entered a valid city or try again later.</p>
        </div>;
}; 

export default NoResultsDiv