import TextType from "./textType";

const TextTypeComponent = ({ text, typingSpeed }) => {
    return (
        <TextType 
            text={text}
            typingSpeed={75} //* add typingSpeed from props
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            // texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
            deletingSpeed={100}
            // variableSpeedEnabled={false}
            // variableSpeedMin={10}
            // variableSpeedMax={50}
            // cursorBlinkDuration={0.9}
        />
    )
}

export default TextTypeComponent;