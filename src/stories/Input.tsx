import "./Input.css";

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  /**
   * Input Felid Label
   */
  label: string;

  /**
   * Input Felid Placeholder
   */
  placeholder: string;

  /**
   * Input Felid Placeholder
   */
  fullWidth?: boolean;

  /**
   * Input Felid Value
   */
  value: string;

  /**
   * Input Felid On change handler
   */
  iconSrc?: string;

  /**
   * Input Felid On change handler
   */
  onChange: (value: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  placeholder = "Placeholder",
  value,
  onChange,
  label = "Input",
  iconSrc = "",
  fullWidth = false,
  ...props
}: InputProps) => {
  // Sets a click handler to change the label's value
  const fullWidthMode = fullWidth && "storybook-input--fullWidth";
  return (
    <section className={["storybook-input-section"].join(" ")}>
      <label className="storybook-input-label" htmlFor="input">
        {label}
      </label>
      <div className={["storybook-input", fullWidthMode].join(" ")}>
        <input
          value={value}
          id="input"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={placeholder}
          {...props}
        />
        {iconSrc && <img src={iconSrc} />}
      </div>
    </section>
  );
};
