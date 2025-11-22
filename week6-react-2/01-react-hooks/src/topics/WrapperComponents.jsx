function WrapperComponents() {
    return <div>
        <CardWrapper>
            hello ji
        </CardWrapper>
        <br></br>
        <CardWrapper>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
        </CardWrapper>
    </div>
}

function CardWrapper({children}) {
    return <div style={{border: "2px solid yellow", padding: 20}}>
        {children}
    </div>
}  
function TextComponent() {
    return <div>
        hi from text component
    </div>
}

export default WrapperComponents;