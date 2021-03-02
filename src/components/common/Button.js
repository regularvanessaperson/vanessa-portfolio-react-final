

const Button = (props) => {
    let passingProps = props.label 
    
    if(passingProps === "linkedin"){
         passingProps = <i class="fab fa-linkedin fa-lg"> LinkedIn</i>
    }else if(passingProps === "github") {
         passingProps = <i class="fab fa-github fa-lg"> Github</i>
    }else if(passingProps === "resume"){
         passingProps = <i class="fas fa-file fa-lg"> Resume</i>
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