

const Button = (props) => {
    let passingProps = props.label 
    
    if(passingProps === "linkedin"){
         passingProps = <i class="fab fa-linkedin fa-sm">LinkedIn</i>
    }else if(passingProps === "github") {
         passingProps = <i class="fab fa-github fa-sm">Github</i>
    }else if(passingProps === "resume"){
         passingProps = <i class="fas fa-file fa-sm">Resume</i>
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