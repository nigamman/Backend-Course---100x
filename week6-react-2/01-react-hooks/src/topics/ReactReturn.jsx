function ReactReturn() {
    return (
        <div>
            <Header title = "i am john" />
            <Header title = "john banega don" />
        </div>
    )
}

function Header({title}) {
    return(
        <div>
            {title}
        </div>
    )
}

export default ReactReturn;