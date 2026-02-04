

interface Props {
    children: React.ReactNode;
    as?: React.ElementType
}

const Excompo_1 = ({ children, as }: Props) => {
    const Component = as || 'div';
    return (
        <Component>{children}</Component>
    )
}

export default Excompo_1