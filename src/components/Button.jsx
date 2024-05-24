export default function Button({children, id, ...props}){

    return(
        <button {...props} className="btn" id={id}>{children}</button>
    )
}