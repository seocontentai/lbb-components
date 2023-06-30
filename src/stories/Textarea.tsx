import "./Textarea.css";

interface TextAreaProps {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * Input Felid Placeholder
   */
  placeholder: string;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Textarea = ({
  placeholder = "Placeholder",
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder} // className={["storybook-button", `storybook-button--${size}`].join(" ")}
      // style={{}}
      {...props}
    />
  );
};
