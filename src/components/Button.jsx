export default function Button({children, id}){

    return(
        <button className="btn" id={id}>{children}</button>
    )
}