

const Button = (props) => {
    let passingProps = props.label 
    
    if(passingProps === "linkedin"){
         passingProps = <i className="fab fa-linkedin fa-sm"><a href={props.href}>{passingProps}</a></i>
    }else if(passingProps === "github") {
         passingProps = <i className="fab fa-github fa-sm"><a href={props.href}>{passingProps}</a></i>
    }else if(passingProps === "resume"){
         passingProps = <i className="fas fa-file fa-sm"><a href={props.href}>{passingProps}</a></i>
    }

    // <Button className="btn btn-primary" type="button" label="Edit" handleClick={editPost} />
    
    return (
        <button
        className = {props.className}
        onClick={props.handleClick} 
        disabled = {props.disableCondition}><a href={props.href}>{passingProps}</a></button>
    )
}

export default Button