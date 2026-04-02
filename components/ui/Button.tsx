import styles from './UI.module.scss';

interface Props extends React.BaseHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: Props) {
    return (
        <button
            className={`${styles.btn} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}