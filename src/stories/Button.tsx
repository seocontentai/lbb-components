import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * Width of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * Button contents
   */
  label: string;

  /**
   * SVG Icon Path
   */
  beforeIcon?: string;

  /**
   * Svg Icon Path
   */
  afterIcon?: string;

  /**
   * size of the button
   */
  fullWidth?: boolean;

  /**
   * variant of the button
   */
  variant?: "primary" | "success" | "danger" | "disabled";

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "medium",
  label,
  fullWidth = false,
  variant,
  afterIcon = "",
  beforeIcon = "",
  ...props
}: ButtonProps) => {
  const mode =
    variant == "primary"
      ? "storybook-button--primary"
      : "storybook-button--secondary";
  const successMode = variant == "success" && "storybook-button--success";
  const dangerMode = variant == "danger" && "storybook-button--danger";
  const disabledMode = variant == "disabled" && "storybook-button--disabled";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        successMode,
        dangerMode,
        disabledMode,
      ].join(" ")}
      style={{ width: fullWidth ? "100%" : "auto" }}
      {...props}
    >
      {beforeIcon && (
        <img className="storybook-button-beforeIcon" src={beforeIcon} />
      )}
      {label}
      {afterIcon && (
        <img className="storybook-button-afterIcon" src={afterIcon} />
      )}
    </button>
  );
};
