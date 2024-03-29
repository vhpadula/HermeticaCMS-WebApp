import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function IconButton({
    children,
    text,
    variant = "primary",
    textColor,
    width,
    onClick, // Add onClick as a prop
}) {
    return (
        <Button
            className="text-nowrap"
            variant={variant}
            style={{
                display: "flex",
                alignItems: "center",
            }}
            onClick={onClick} // Pass onClick to the Button component
        >
            <div
                style={{
                    display: "flex-column",
                    marginRight: text ? "10%" : "0",
                    width: `${width * 2.5}vw`,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {children}
            </div>

            {text && (
                <span style={{ color: textColor, fontSize: `${width}vw` }}>
                    {text}
                </span>
            )}
        </Button>
    );
}

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired, // Specify onClick as a required function prop
};
