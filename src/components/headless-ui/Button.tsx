// components/ui/Button.tsx
import { forwardRef } from "react";
import clsx from 'clsx';


// clsx({ 'foo': true, 'bar': false }); // 'foo'
// clsx({ 'foo': true, 'bar': true });  // 'foo bar'

// clsx('foo', [isActive && 'active'], { 'hover': isHovered }); 
// // (isActive가 true이고 isHovered가 true일 경우) 'foo active hover'

// Falsy 값 무시
// clsx('foo', null, undefined, 0, false, '', 'bar'); // 'foo bar'


//   const baseNavClasses = clsx(
//     'text-sm py-2 px-4 text-indigo-800/70 rounded-full hover:text-indigo-800',
//     className
//   );



const DEFAULT_BUTTON = "Button";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: "primary" | "secondary";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   function Button(props, ref) {
      const {
         variant = "primary",
         className = "",
         children,
         ...rest
      } = props;

      const base = "bbbaa";
      const variants = {
         primary: clsx(base, 'primary'),
         secondary: clsx(base, 'secondary'),
      };
      const classes = `${variants[variant]} ${className}`;

      return (
         <button ref={ref} className={classes} {...rest}>
            {children}
         </button>
      );
   }
);

// Headless UI 패턴: 디버깅/DevTools용 이름
Button.displayName = DEFAULT_BUTTON;