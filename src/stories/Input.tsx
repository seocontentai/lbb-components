import "./Input.css";

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * Input Felid Placeholder
   */
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  placeholder = "Placeholder",
  value,
  onChange,
  ...props
}: InputProps) => {
  // Sets a click handler to change the label's value

  return (
    <section>
      <label htmlFor="input">First name </label>
      <input
        value={value}
        id="input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder} // className={["storybook-button", `storybook-button--${size}`].join(" ")}
        // style={{}}
        {...props}
      />
    </section>
  );
};
