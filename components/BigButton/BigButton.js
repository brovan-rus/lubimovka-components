import styles from './BigButton.module.css';

console.log(styles);

export default function BigButton({color, arrow, text}) {
  return (
    <button
      className={`${[styles.button_font, styles.button].join(' ')}
      ${color==='accent' && styles.button_accent}
      ${
      arrow === 'down' && [styles.arrow_down, styles.button_border_top].join(' ') ||
      arrow === 'diagonal' && [styles.arrow_diagonal, styles.button_border_top].join(' ')  ||
      arrow === 'right' && [styles.arrow_right, styles.button_border_full].join(' ')}`}>
      {text}
    </button>
  );
}
